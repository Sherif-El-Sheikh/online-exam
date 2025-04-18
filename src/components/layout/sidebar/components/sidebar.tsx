import { SidebarProps } from "@/lib/types/sidebar";

export function Sidebar({children} : SidebarProps) {
    return (
        <aside className='min-h-screen w-fit'>
            {children}
        </aside>
    )
}
