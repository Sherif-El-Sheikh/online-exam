import { ReactNode } from "react"

declare type SidebarProps = {
    children: ReactNode,
}

declare type SidebarClientControlsProps = {
    role: "admin" | "user"
}

type Role = "admin" | "user";

declare type DashboardRoute = {
    name: string,
    icon: React.ComponentType<{className?: string}>,
    roles: Role[],
    href?: string,
    baseHref?: string
}

declare type SidebarContextType = {
    isDesktopExpanded: boolean,
    isMobileOpen: boolean,
    isMobile: boolean,
    toggleDesktopSidebar: () => void,
    toggleMobileSidebar: () => void,
    isCollapsed: boolean
}