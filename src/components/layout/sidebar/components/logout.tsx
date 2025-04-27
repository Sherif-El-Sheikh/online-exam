"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils/tailwind-merge"
import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

export function Logout({isCollapsed}: {isCollapsed: boolean}) {
    return (
        <Button
        variant="ghost"
        size="default"
        className={cn(
            "w-full text-base md:text-lg lg:text-xl font-poppins font-semibold flex justify-start items-center relative gap-5 rounded-lg hover:bg-submain/85 hover:text-white px-3 py-2 transition-all duration-300 ease-in-out",
            isCollapsed && "md:justify-center md:px-2"
            )}
            onClick={() => signOut({callbackUrl:"/"})}
        >
            <LogOut className={cn("!h-4 !w-4 md:!h-5 md:!w-5 transition-transform duration-500 ease-in-out",
                isCollapsed && "md:!h-4 md:!w-4"
            )}/>
            <span 
            className={cn(
                "text-base md:text-lg lg:text-xl transition-all duration-500 ease-in-out ",
                    isCollapsed
                                ? "scale-0 opacity-0 translate-y-3 pointer-events-none absolute -left-40 delay-0"
                                : "scale-100 opacity-100 translate-y-0 pointer-events-auto delay-100"
                )}>
                    Log Out
                    </span>
        </Button>
    )
}
