"use client";

import {
  ClipboardList,
  History,
  LayoutGrid,
  PanelLeft,
  PanelLeftClose,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dashboardLogo from "@assets/images/dashboardLogo.png";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/tailwind-merge";
import {
  DashboardRoute,
  SidebarClientControlsProps,
} from "@/lib/types/sidebar";
import { useSidebar } from "@/components/providers/sidebar/sidebar.provider";
import { Logout } from "./logout";

// Sidebar links based on roles (admin/user)
const dashboardRoutes: DashboardRoute[] = [
  {
    name: "Dashboard",
    icon: LayoutGrid,
    baseHref: "dashboard",
    roles: ["admin", "user"],
  },
  {
    name: "Exams",
    icon: ClipboardList,
    baseHref: "dashboard/exams",
    roles: ["admin", "user"],
  },
  {
    name: "Quiz History",
    icon: History,
    href: "/user-dashboard/quiz-history",
    roles: ["user"],
  },
];

export function SidebarClientControls({ role }: SidebarClientControlsProps) {
  // Navigation
  const pathname = usePathname();

  // Context
  const {
    isDesktopExpanded,
    isMobileOpen,
    isMobile,
    isCollapsed,
    toggleDesktopSidebar,
    toggleMobileSidebar,
  } = useSidebar();

  // Functions

  /**
   * Returns the full URL for a sidebar route based on role.
   * @param route - A dashboard route object.
   * @returns Full URL string for sidebar link.
   */
  const getHref = (route: DashboardRoute) => {
    if (route.baseHref) {
      return `/${role}-` + route.baseHref;
    }
    return route.href!;
  };

  return (
    <>
      <div
        className={cn(
          "h-full min-h-screen w-64 border-r bg-dashboard font-poppins font-semibold text-dashboardText shadow-lg transition-all duration-500 ease-in-out md:w-64 md:data-[collapsed=true]:w-16",
          isMobile ? "fixed bottom-0 left-0 top-0 min-h-screen" : "relative",
          isMobile && "z-40",
          !isMobile && "md:block",
          isMobile && !isMobileOpen && "-translate-x-full md:translate-x-0",
        )}
        data-collapsed={isCollapsed}
      >
        {/* Sidebar Header */}
        <div
          className={cn(
            "mt-8 p-5 transition-all duration-500 ease-in-out md:mt-0 md:p-6",
            isCollapsed && "md:p-4",
          )}
        >
          <div className="mb-14 mt-8 flex items-center md:mt-3">
            {/* Logo */}
            <Link
              href={role === "admin" ? "/admin-dashboard" : "/user-dashboard"}
              className="flex-1"
            >
              <Image
                src={dashboardLogo}
                width={125}
                priority
                alt="dashboard logo"
                className={cn(
                  "transition-all duration-500 ease-in-out",
                  isCollapsed
                    ? "translate-y-2 scale-0 opacity-0 delay-0"
                    : "translate-y-0 scale-100 opacity-100 delay-100",
                )}
              />
            </Link>

            {/* Panel Toggle Button*/}
            {!isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDesktopSidebar}
                className="transition-transform duration-500 ease-in-out hover:bg-transparent hover:text-submain"
              >
                {isDesktopExpanded ? (
                  <PanelLeftClose className="!h-5 !w-5 transition-transform duration-500 ease-in-out" />
                ) : (
                  <PanelLeft className="!h-5 !w-5 transition-transform duration-500 ease-in-out" />
                )}
              </Button>
            )}

            {/* Mobile Close Button */}
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileSidebar}
                className="absolute right-2 top-2 mt-3 transition-transform duration-500 ease-in-out hover:bg-transparent"
              >
                <X className="!h-5 !w-5" />
              </Button>
            )}
          </div>

          {/* Sidebar Menu */}
          <div className="space-y-6 py-4">
            {dashboardRoutes
              .filter((route) => route.roles.includes(role))
              .map((route) => {
                const href = getHref(route);
                return (
                  <Link
                    key={href}
                    href={href}
                    title={isCollapsed ? route.name : undefined}
                    className={cn(
                      "relative flex items-center gap-5 rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-submain/85 hover:text-white",
                      pathname === href ? "bg-main text-white" : "",
                      isCollapsed && "md:justify-center md:px-2",
                    )}
                  >
                    <route.icon className="h-4 w-4 transition-transform duration-500 ease-in-out md:h-5 md:w-5" />
                    <span
                      className={cn(
                        "text-base transition-all duration-500 ease-in-out md:text-lg lg:text-xl",
                        isCollapsed
                          ? "pointer-events-none absolute -left-40 translate-y-3 scale-0 opacity-0 delay-0"
                          : "pointer-events-auto translate-y-0 scale-100 opacity-100 delay-100",
                      )}
                    >
                      {route.name}
                    </span>
                  </Link>
                );
              })}
            <Logout isCollapsed={isCollapsed} />
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobile && isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 transition-opacity duration-500 ease-in-out"
          aria-hidden="true"
          onClick={toggleMobileSidebar}
        />
      )}
    </>
  );
}
