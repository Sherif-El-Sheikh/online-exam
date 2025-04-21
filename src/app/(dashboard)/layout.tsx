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
                    <SidebarClientControls role="user"/>
                </Sidebar>

                {/* Navbar and Page Content */}
                <div className="flex flex-col flex-1 min-h-screen bg-dashboard/70">
                    <Navbar role="user"/>
                        
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}