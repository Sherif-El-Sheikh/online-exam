"use client"
import { useSidebar } from "@/components/providers/sidebar/sidebar.provider"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export const MobileMenuToggle = () => {
    // Accessing sidebar states using useSidebar hook
    const {isMobile, toggleMobileSidebar} = useSidebar();
    
    return (
        <Button
        variant="ghost"
        size="icon"
        onClick={toggleMobileSidebar}
        className={!isMobile ? "hidden" : ""}
        >
            <Menu/>
        </Button>
    )
}