import { Sidebar, SidebarClientControls } from "@/components/layout/sidebar";
import { SidebarProvider } from "@/components/providers/sidebar/sidebar.provider";

export default function DashboardLayout({ children }: {children: React.ReactNode}) {
    return (
        <SidebarProvider>
            <main>
                <Sidebar>
                    <SidebarClientControls role="user"/>
                </Sidebar>
                {children}
            </main>
        </SidebarProvider>
    )
}