import { Sidebar, SidebarClientControls } from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: {children: React.ReactNode}) {
    return (
        <main>
            <Sidebar>
                <SidebarClientControls role="user"/>
            </Sidebar>
            {children}
        </main>
    )
}