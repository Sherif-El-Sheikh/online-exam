import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authPages = new Set([
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/set-password",
    "/auth/verify-code",
])

const publicPages = new Set([
    "/",
    ...Array.from(authPages)
])

// Function to generate a random 16-character query
const generateComplexQuery = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let result = "";
    for (let i = 0; i < 16; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export default async function middleware(req:NextRequest) {
    const token = await getToken({req})

    // Checking if the request is for a public page
    if (publicPages.has(req.nextUrl.pathname)) {
        // If there is no token, continue with the request
        if (!token) return NextResponse.next();


        // If has a token and trying to access an auth page, redirect to dashboard based on role
        if (authPages.has(req.nextUrl.pathname)) {
            let dashboardPath = "/user-dashboard";

            // Check the role stored inside the token
            if (token?.user?.role === "admin") {
                dashboardPath = "/admin-dashboard";
            }

            // Redirecting to the appropriate dashboard based on the role
            const redirectUrl = new URL (dashboardPath, req.nextUrl.origin)
            return NextResponse.redirect(redirectUrl)
        }
    }

    // In private pages
    // Role-based protection
    if (token) {

    // If user tries to access admin dashboard
    if (req.nextUrl.pathname.startsWith("/admin-dashboard") && token?.user?.role !== "admin") {
        const redirectUrl = new URL("/unauthorized", req.nextUrl.origin);

        // Create a fake/random query parameter
        const complexKey = "authKey";
        const complexValue = generateComplexQuery();

        // Append the random query to the URL
        redirectUrl.searchParams.set(complexKey, complexValue + ".");

        return NextResponse.redirect(redirectUrl);
    }

    // If admin tries to access user dashboard
    if (req.nextUrl.pathname.startsWith("/user-dashboard") && token?.user?.role !== "user") {
        const redirectUrl = new URL("/unauthorized", req.nextUrl.origin);

        // Create a fake/random query parameter
        const complexKey = "authKey";
        const complexValue = generateComplexQuery();

        // Append the random query to the URL
        redirectUrl.searchParams.set(complexKey, complexValue + ".");
        
        return NextResponse.redirect(redirectUrl);
    }

        // If the token is valid continue with the request
        return NextResponse.next();
    }

    // If there is no token, redirect to the login page and save the current page URL to return to it after login
    const redirectUrl = new URL ("/auth/login", req.nextUrl.origin)

    // Attach the full current URL as callbackUrl
    redirectUrl.searchParams.set("callbackUrl", req.nextUrl.href);

    return NextResponse.redirect(redirectUrl)
}


export const config = {
    matcher: [
        /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
    }