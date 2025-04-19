import { NavbarProps } from "@/lib/types/navbar";



export function Navbar({children} : NavbarProps) {
    return (
        <nav className="font-poppins bg-dashboard shadow-lg">
            {children}
        </nav>
    )
}
