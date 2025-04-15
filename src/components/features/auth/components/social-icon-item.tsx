import Link from "next/link";
import { ReactNode } from "react";

export default function SocialIconItem ({href, children} : {href: string, children: ReactNode}) {
    return(
        <Link href={href} target="_blank" className="">
        <li className="size-12 lg:size-14 3xl:size-16 border border-[#E0E0E9] rounded-2xl md:p-3 lg:p-4 flex items-center justify-center shadow-primary-auth transition-all duration-300 hover:bg-slate-100">
            {children}
        </li>
        </Link>
    )
}