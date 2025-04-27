import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface SocialIconItemProps {
    children: ReactNode;
    onClick?: () => void;
}

export default function SocialIconItem ({children, onClick} : SocialIconItemProps ) {
    return(
        <Button variant="ghost" className="rounded-2xl" onClick={onClick}>
        <li className="size-12 lg:size-14 3xl:size-16 border border-[#E0E0E9] rounded-2xl md:p-3 lg:p-4 flex items-center justify-center shadow-primary-auth transition-all duration-300 hover:bg-slate-100">
            {children}
        </li>
        </Button>
    )
}