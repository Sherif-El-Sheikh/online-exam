import { NavbarProps } from "@/lib/types/navbar";
import { MobileSidebar } from "./mobile-sidebar";
import { MobileMenuToggle } from "./mobile-menu-toggle";
import { SearchInput } from "./search-input";
import SwitchLanguage from "@/components/common/switch-language";
import { ClientNavbarButtons } from "./navbar-client-buttons";
import { UserNav } from "./user-nav";


export function Navbar({role}: NavbarProps) {
    return (
        <nav className="font-poppins bg-dashboard shadow-lg mb-6 md:mb-8">
            <div className='flex h-16 items-center px-2 sm:px-6 my-3 sm:my-5'>
                {/* Mobile sheet to open sidebar */}
                <MobileSidebar>
                    <MobileMenuToggle/>
                </MobileSidebar>

                {/* Search input field */}
                <div className="flex-1 min-w-md mr-2">
                <SearchInput/>
                </div>

                <div className="ml-auto flex items-center max-[375px]:space-x-2 space-x-3 md:space-x-4">
                    {/* Language switcher */}
                    <SwitchLanguage className="px-1 sm:px-2 "/>

                    {/* Navbar buttons, using the role */}
                    <ClientNavbarButtons role={role}/>
                    
                    {/* User avatar with dropdown menu */}
                    <UserNav/>
                </div>
            </div>
        </nav>
    )
}
