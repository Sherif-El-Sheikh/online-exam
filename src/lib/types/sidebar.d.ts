import { ReactNode } from "react"

declare type SidebarProps = {
    children: ReactNode,
}

declare type SidebarClientControlsProps = {
    role: string
}

declare type DashboardRoute = {
    name: string;
    icon: React.ComponentType<{className?: string}>;
    roles: string[];
    href?: string;
    baseHref?: string;
}