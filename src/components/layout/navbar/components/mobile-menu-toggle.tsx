"use client"
import { useSidebar } from "@/components/providers/sidebar/sidebar.provider"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import React from "react"

// React.forwardRef to forward the ref from parent to child
export const MobileMenuToggle = React.forwardRef<HTMLButtonElement> ((_, ref) => {
    // Accessing sidebar states using useSidebar hook
    const {isMobile, toggleMobileSidebar} = useSidebar();

    return (
        <Button
        // Allowing the parent to access the DOM element directly
        ref={ref}
        variant="ghost"
        size="icon"
        onClick={toggleMobileSidebar}
        className={!isMobile ? "hidden" : ""}
        >
            <Menu/>
        </Button>
    )
})

// displayName to "MobileMenuToggle" for the component to appear with this name in the DOM
MobileMenuToggle.displayName = "MobileMenuToggle"