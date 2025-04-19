import { ReactNode } from "react"

declare type NavbarProps = {
    children: ReactNode
}

declare type NavbarClientProps = {
    role: string
}

declare type MobileMenuToggleProps = {
    isMobile: boolean,
    toggleMobileSidebar: () => void
}