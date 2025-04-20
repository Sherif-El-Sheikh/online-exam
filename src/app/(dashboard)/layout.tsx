import { Navbar} from "@/components/layout/navbar";
import { Sidebar, SidebarClientControls } from "@/components/layout/sidebar";
import { SidebarProvider } from "@/components/providers/sidebar/sidebar.provider";

export default function DashboardLayout({ children }: {children: React.ReactNode}) {
    return (
        <SidebarProvider>
            {/* Main container */}
            <div className="flex relative">
                {/* Sidebar */}
                <Sidebar>
                    <SidebarClientControls role="admin"/>
                </Sidebar>

                {/* Navbar and Page Content */}
                <div className="flex flex-col flex-1 min-h-screen">
                    <Navbar role="admin"/>
                        
                    <main className="flex-1 bg-dashboard/70">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}