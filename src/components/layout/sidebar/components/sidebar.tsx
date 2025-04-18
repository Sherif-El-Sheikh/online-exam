import { SidebarProps } from "@/lib/types/sidebar";

export function Sidebar({children} : SidebarProps) {
    return (
        <aside className='min-h-screen bg-red-400 w-fit'>
            {children}
        </aside>
    )
}
