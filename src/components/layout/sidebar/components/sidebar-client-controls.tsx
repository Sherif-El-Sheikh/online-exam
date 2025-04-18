"use client"

import { History, LayoutGrid, LogOut, PanelLeftClose, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dashboardLogo from "../../../../../public/assets/images/dashboardLogo.png"
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/tailwind-merge";
import { DashboardRoute, SidebarClientControlsProps } from "@/lib/types/sidebar";

// Sidebar links based on roles (admin/user)
const dashboardRoutes : DashboardRoute[] = [
    {
        name: "Dashboard",
        icon: LayoutGrid,
        baseHref: 'dashboard',
        roles: ["admin", "user"]
    },
    {
        name: "Quiz History",
        icon: History,
        href: '/user-dashboard/quiz-history',
        roles: ["user"]
    },
    {
        name: "Log Out",
        icon: LogOut,
        href: '',
        roles: ["admin", "user"]
    }
]


export function SidebarClientControls({role} : SidebarClientControlsProps) {
    // Gets the current route to highlight the active link
    const pathname = usePathname();

    /**
 * Returns the full URL for a sidebar route based on role.
 * @param route - A dashboard route object.
 * @returns Full URL string for sidebar link.
 */
    const getHref = (route : DashboardRoute) => {
        if(route.baseHref) {
            return `/${role}-` + route.baseHref
        }
        return route.href || '#'
    }

    return (
            <div className="min-h-screen bg-dashboard shadow-lg border-r text-dashboardText w-64 font-poppins font-semibold relative ">
                {/* Sidebar Header */}
                <div className="p-6">
                    <div className="flex items-center mt-3 mb-14">
                        {/* Logo */}
                        <Link href="/user-dashboard" className="flex-1">
                        <Image
                        src={dashboardLogo}
                        width={125}
                        priority
                        alt="dashboard logo"
                        />
                        </Link>

                        {/* Panel Toggle Button*/}
                        <Button 
                        variant="ghost"
                        size="icon"
                        className="hover:bg-transparent hover:text-submain"
                        >
                            <PanelLeftClose className="!h-5 !w-5 "/>
                        </Button>

                        {/* Mobile Close Button */}
                        <Button 
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 hover:bg-transparent"
                        >
                            <X className="!h-5 !w-5"/>
                        </Button>
                    </div>

                    {/* Sidebar Menu */}
                    <div className="space-y-6 py-4">
                        {dashboardRoutes.filter((route) => route.roles.includes(role)).map((route) => {
                            const href = getHref(route)
                            return (
                                <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "flex items-center gap-5 rounded-lg hover:bg-submain/85 hover:text-white px-3 py-2 transition-all duration-500 ease-in-out",
                                    pathname === href ? "bg-main text-white" : ""
                                )}
                                >
                                    <route.icon className="h-5 w-5"/>
                                    <span className="text-lg">{route.name}</span>
                                </Link> 
                            )
                        })}
                    </div>
                </div>

                {/* Mobile Overlay */}
                {/* <div className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-500 ease-in-out"/> */}
            </div>
    )
}
