import { Navbar} from "@/components/layout/navbar";
import { Sidebar, SidebarClientControls } from "@/components/layout/sidebar";
import { SidebarProvider } from "@/components/providers/sidebar/sidebar.provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function DashboardLayout({ children }: {children: React.ReactNode}) {
    // Retrieve the server-side session to get user data and role
    const session = await getServerSession(authOptions)
    const role = session?.user?.role === "admin" ? "admin" : "user";

    return (
        <SidebarProvider>
            {/* Main container */}
            <div className="flex relative min-h-screen">
                {/* Sidebar */}
                <Sidebar>
                    <SidebarClientControls role={role}/>
                </Sidebar>

                {/* Navbar and Page Content */}
                <div className="flex flex-col flex-1 min-h-screen bg-dashboard/70">
                    <Navbar role={role}/>
                        
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}