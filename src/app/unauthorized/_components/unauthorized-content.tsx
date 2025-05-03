import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Link from "next/link";
import UnauthorizedContentClient from "./unauthorized-content-client";

export default async function UnauthorizedContent() {
    // Get the current user's session from the server
    const session = await getServerSession(authOptions);

    // Extract the user's role
    const role = session?.user?.role;

    // Determine which dashboard path based on the role
    const dashboardPath = role === "admin" ? "/admin-dashboard" : "/user-dashboard";

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 font-poppins">
            <div className="mx-auto w-full max-w-4xl">
                <UnauthorizedContentClient dashboardPath={dashboardPath} />

                <div className="mt-6 text-center text-sm text-muted-foreground">
                    <p>
                        Need help?
                        <Link
                        href="mailto:elevatetecheg@gmail.com"
                        className="ml-2 text-primary hover:underline"
                        >
                        Contact Support
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
