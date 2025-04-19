import { Button } from "@/components/ui/button"
import { MobileMenuToggleProps } from "@/lib/types/navbar"
import { Menu } from "lucide-react"


export const MobileMenuToggle = ({isMobile, toggleMobileSidebar} : MobileMenuToggleProps) => {
    if (!isMobile) return null;
    return (
        <Button
        variant="ghost"
        size="icon"
        onClick={toggleMobileSidebar}
        >
            <Menu/>
        </Button>
    )
}