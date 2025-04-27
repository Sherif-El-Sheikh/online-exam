"use client"

import { SessionProvider } from "next-auth/react"

type NextAuthProviderProps = {
    children: React.ReactNode
}

// This component wraps the application in a SessionProvider to manage the user's session for authentication.
export default function NextAuthProvider({children}: NextAuthProviderProps) {
    return <SessionProvider>{children}</SessionProvider>
}
