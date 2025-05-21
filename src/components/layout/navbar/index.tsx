import { NavbarProps } from "@/lib/types/navbar";
import { MobileSidebar } from "./components/mobile-sidebar";
import { MobileMenuToggle } from "./components/mobile-menu-toggle";
import { SearchInput } from "./components/search-input";
import SwitchLanguage from "@/components/common/switch-language";
import { ClientNavbarButtons } from "./components/navbar-client-buttons";
import { UserNav } from "./components/user-nav";

export function Navbar({ role }: NavbarProps) {
  return (
    <nav className="mb-6 bg-dashboard font-poppins shadow-lg md:mb-8">
      <div className="my-3 flex h-16 items-center px-2 sm:my-5 sm:px-6">
        {/* Mobile sheet to open sidebar */}
        <MobileSidebar>
          <MobileMenuToggle />
        </MobileSidebar>

        {/* Search input field */}
        <div className="min-w-md mr-2 flex-1">
          <SearchInput />
        </div>

        <div className="ml-auto flex items-center space-x-3 max-[375px]:space-x-2 md:space-x-4">
          {/* Language switcher */}
          <SwitchLanguage className="px-1 sm:px-2" />

          {/* Navbar buttons, using the role */}
          <ClientNavbarButtons role={role} />

          {/* User avatar with dropdown menu */}
          <UserNav role={role} />
        </div>
      </div>
    </nav>
  );
}
