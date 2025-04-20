import { NavbarProps } from "@/lib/types/navbar";
import { MobileSidebar } from "./mobile-sidebar";
import { MobileMenuToggle } from "./mobile-menu-toggle";

export function Navbar({role}: NavbarProps) {
    return (
        <nav className="font-poppins bg-dashboard shadow-lg">
            <div className='flex h-16 items-center px-6'>
                {/* Mobile sheet to open sidebar */}
                <MobileSidebar>
                    <MobileMenuToggle/>
                </MobileSidebar>
            </div>
        </nav>
    )
}
