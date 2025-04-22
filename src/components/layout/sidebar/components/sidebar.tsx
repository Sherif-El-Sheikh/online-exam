import { SidebarProps } from "@/lib/types/sidebar";

export function Sidebar({children} : SidebarProps) {
    return (
        <aside className='min-h-screen flex flex-col w-fit'>
            {children}
        </aside>
    )
}
