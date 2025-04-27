import { authOptions } from "@/auth";
import NextAuth from "next-auth";

// The route handler is responsible for handling authentication-related requests by passing custom settings (authOptions)
const handler = NextAuth(authOptions)

// Export handler to handle both GET and POST requests for authentication
export {handler as GET, handler as POST}