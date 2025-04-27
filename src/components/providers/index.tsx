import NextAuthProvider from "./components/next-auth.provider"

type ProvidersProps = {
    children: React.ReactNode
}

// This component acts as a wrapper to provide authentication-related context to the app.
// Any future providers that the app requires can be added inside this component as needed.
export default function Providers({children}: ProvidersProps) {
    return (
        <NextAuthProvider>
            {children}
        </NextAuthProvider>
    )
    }
