import AuthMobileHeader from "@/components/features/auth/auth-mobile-header";
import AuthNav from "@/components/features/auth/auth-nav";
import AuthSide from "@/components/features/auth/auth-side";

export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <main className="min-h-screen md:flex md:justify-between md:gap-16 lg:gap-20 xl:gap-24 min-[1300px]:gap-32 2xl:gap-72">
            {/* Auth Side */}
            <AuthSide />

            <section className="h-ful w-full">
                {/* Auth Nav */}
                <AuthNav />

                {/* Auth Mobile Header */}
                <AuthMobileHeader />

                {/* Form */}
                {children}
            </section>
        </main>
    );
    }