import Link from "next/link";
import { ReactNode } from "react";

export default function SocialIconItem ({href, children} : {href: string, children: ReactNode}) {
    return(
        <li className="size-12 sm:size-16 border border-[#E0E0E9] rounded-2xl p-3 sm:p-5 flex items-center justify-center shadow-primary-auth">
            <Link href={href} target="_blank" className="text-2xl">
            {children}
            </Link>
        </li>
    )
}