import {NextAuthOptions} from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { JSON_HEADER } from "./lib/constants/api.constants"

export const authOptions: NextAuthOptions = {
    // Custom pages to override default NextAuth pages
    pages: {
        signIn: "auth/login"
    },

    // Authentication methods using providers
    providers: [
        // Define a Credentials Provider to allow login using email and password
        Credentials({
            // Name of the provider
            name: "Credentials",
           // Fields required for login (required by NextAuth)
            credentials: {
                email: {},
                password: {}
            },

            // This function runs when a user tries to sign in
            authorize: async (Credentials) => {
                // Send a request to the backend
                const response = await fetch(`${process.env.API}/auth/signin`, {
                    method: "POST",
                    body: JSON.stringify({
                        // Extract email and password from credentials
                        email: Credentials?.email,
                        password: Credentials?.password
                    }),
                    headers: {
                        ...JSON_HEADER
                    }
                })
                
                // Receive the API response (typed for both success and error cases)
                const payload:APIResponse<LoginResponse> = await response.json();
                console.log(payload)

                // If a "code" exists, it means an error occurred
                if("code" in payload) {
                    throw new Error (payload.message)
                }

                // Assign admin role manually due to the absence of a real admin email
                let role = payload.user.role;
                if (payload.user.email === process.env.DEV_ADMIN_EMAIL) {
                    role = "admin";
                }

                // Return the user information to be stored in the token
                return {
                    id: payload.user._id,
                    token: payload.token,
                    user: payload.user,
                    role: role
                }
            }
        })
    ],

    // Callback functions to control returned data
    callbacks: {
        // This function Customize the contents of the JWT token before it gets encrypted and stored
        // The token object stores encrypted data in the cookie
        jwt: ({token, user}) => {
             // User exists only after a successful login - Only modify the token if user data exists
            if(user) {
                token.token = user.token
                token.user = user.user
                token.user.role = user.role
            }

            // Return the updated token to be encrypted and stored
            return token
        },

        // This function controls what data is exposed in the session
        // The session is filled with data taken from the decoded token
        session: ({session, token}) => {
            session.user = token.user
            session.user.role = token.user.role

            // Return the updated session object
            return session
        }
    }
}