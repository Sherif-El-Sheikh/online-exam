import { cookies } from "next/headers";
import "server-only";
import { SESSION_COOKIE_NAME } from "../constants/auth.constant";
import { decode, JWT } from "next-auth/jwt";

export async function getAuthToken() {
  // Getting the cookie using the cookie name
  const authCookie = cookies().get(SESSION_COOKIE_NAME)?.value;

  //DecodeToken variable and initializing it to null
  let decodeToken: JWT | null = null;

  // Trying to decode the token using the decode function
  try {
    decodeToken = await decode({
      token: authCookie,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    // If an error occurs during decoding
  } catch (error) {
    console.error("Error decoding JWT:", error);
    throw new Error("Please check the token format or its validity.");
  }

  // Returning an object containing the decoded token (or a message token not found)
  return {
    token: decodeToken?.token || "Token not found",
    // You should not return a string if the token is not found, since the token is a string too, thus, a `null` is more appropriate
  };
}
