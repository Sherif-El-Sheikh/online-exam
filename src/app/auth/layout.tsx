import AuthMobileHeader from "@/components/features/auth/auth-mobile-header";
import AuthNav from "@/components/features/auth/auth-nav";
import AuthSide from "@/components/features/auth/auth-side";

export default function AuthLayout({ children } : {children : React.ReactNode}) {
    return (
            <main className="md:flex md:justify-between gap-5 h-dvh">
                {/* Auth Side */}
                <AuthSide/>

                <section className="h-full">
                {/* Auth Nav */}
                <AuthNav/>

                {/* Auth Mobile Header */}
                <AuthMobileHeader/>

                {/* Form */}
                {children}
                </section>
            </main>
    )
}