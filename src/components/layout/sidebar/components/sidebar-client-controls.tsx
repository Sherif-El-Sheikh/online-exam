"use client"

import { History, LayoutGrid, LogOut, PanelLeft, PanelLeftClose, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dashboardLogo from "../../../../../public/assets/images/dashboardLogo.png"
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/tailwind-merge";
import { DashboardRoute, SidebarClientControlsProps } from "@/lib/types/sidebar";
import { useSidebar } from "@/components/providers/sidebar/sidebar.provider";

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

    // Accessing sidebar states using useSidebar hook
    const {isDesktopExpanded, isMobileOpen, isMobile, isCollapsed, toggleDesktopSidebar, toggleMobileSidebar} = useSidebar()

    /**
 * Returns the full URL for a sidebar route based on role.
 * @param route - A dashboard route object.
 * @returns Full URL string for sidebar link.
 */
    const getHref = (route : DashboardRoute) => {
        if(route.baseHref) {
            return `/${role}-` + route.baseHref
        }
        return route.href!
    }

    return (
        <>
            <div className={cn (
                "min-h-screen bg-dashboard shadow-lg border-r text-dashboardText w-64 font-poppins font-semibold md:w-64 md:data-[collapsed=true]:w-16 transition-all duration-500 ease-in-out",
                isMobile ? "fixed left-0 top-0 bottom-0 min-h-screen" : "relative",
                isMobile && "z-40",
                !isMobile && "md:block",
                isMobile && !isMobileOpen && "-translate-x-full md:translate-x-0"
            )} data-collapsed={isCollapsed}>
                
                {/* Sidebar Header */}
                <div className={cn("p-5 mt-8 md:mt-0 md:p-6 transition-all duration-500 ease-in-out", isCollapsed && "md:p-4")}>
                    <div className="flex items-center mt-8 md:mt-3 mb-14">
                        {/* Logo */}
                        <Link href="/user-dashboard" className="flex-1">
                        <Image
                        src={dashboardLogo}
                        width={125}
                        priority
                        alt="dashboard logo"
                        className= {cn("transition-all duration-500 ease-in-out",
                            isCollapsed
                            ? "scale-0 opacity-0 translate-y-2 delay-0"
                            : "scale-100 opacity-100 translate-y-0 delay-100"
                        )}
                        />
                        </Link>

                        {/* Panel Toggle Button*/}
                        {!isMobile && (
                        <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleDesktopSidebar}
                        className="hover:bg-transparent hover:text-submain transition-transform duration-500 ease-in-out"
                        >
                            {isDesktopExpanded ? (
                                <PanelLeftClose className="!h-5 !w-5 transition-transform duration-500 ease-in-out"/>
                            )
                            : (
                                <PanelLeft className="!h-5 !w-5 transition-transform duration-500 ease-in-out"/>
                            )
                            }
                        </Button>
                        )}

                        {/* Mobile Close Button */}
                        {isMobile && (
                        <Button 
                        variant="ghost"
                        size="icon"
                        onClick={toggleMobileSidebar}
                        className="absolute right-2 top-2 mt-3 hover:bg-transparent transition-transform duration-500 ease-in-out"
                        >
                            <X className="!h-5 !w-5"/>
                        </Button>
                        )}
                    </div>

                    {/* Sidebar Menu */}
                    <div className="space-y-6 py-4">
                        {dashboardRoutes.filter((route) => route.roles.includes(role)).map((route) => {
                            const href = getHref(route)
                            return (
                                <Link
                                key={href}
                                href={href}
                                title={isCollapsed ? route.name : undefined}
                                className={cn(
                                    "relative flex items-center gap-5 rounded-lg hover:bg-submain/85 hover:text-white px-3 py-2 transition-all duration-300 ease-in-out",
                                    pathname === href ? "bg-main text-white" : "",
                                    isCollapsed && "md:justify-center md:px-2"
                                )}
                                >
                                    <route.icon className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-500 ease-in-out"/>
                                    <span className={cn(
                                        "text-base md:text-lg lg:text-xl transition-all duration-500 ease-in-out ",
                                        isCollapsed
                                            ? "scale-0 opacity-0 translate-y-3 pointer-events-none absolute -left-40 delay-0"
                                            : "scale-100 opacity-100 translate-y-0 pointer-events-auto delay-100"
                                        )}
                                        >
                                        {route.name}
                                    </span>
                                </Link> 
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isMobile && isMobileOpen && (
                <div className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-500 ease-in-out" aria-hidden="true" onClick={toggleMobileSidebar}/>
            )}
            </>
    )
}
