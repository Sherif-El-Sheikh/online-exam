"use client";
import { SidebarContextType } from "@/lib/types/sidebar";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Creating the context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Creating SidebarProvider Component wraps(Sidebar, SidebarClientControls, Navbar )
export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMoblie] = useState(false);

  useEffect(() => {
    // Handle desktop resizing
    const handleResize = () => {
      const width = window.innerWidth;

      // Close the mobile sidebar if screen is desktop
      if (width >= 768) {
        setIsMobileOpen(false);
      }

      // Auto-collapse the sidebar between 768px and 990px
      if (width >= 768 && width <= 990) {
        setIsDesktopExpanded(false);
      } else if (width > 990) {
        setIsDesktopExpanded(true);
      }
    };

    // Check if the device is mobile based on screen width
    const checkMobile = () => {
      setIsMoblie(window.innerWidth < 768);
    };

    // Triggers handleResize function when resizing
    window.addEventListener("resize", handleResize);

    // Triggers checkMobilee function when resizing
    window.addEventListener("resize", checkMobile);

    // Call when component mounts to check initial screen size
    handleResize();
    checkMobile();

    // Cleanup when component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Toggle the sidebar expanded state on desktop
  const toggleDesktopSidebar = () => {
    setIsDesktopExpanded((prev) => !prev);
  };

  // Toggle the sidebar (open/close) state on mobile
  const toggleMobileSidebar = () => {
    setIsMobileOpen((prev) => !prev);
  };

  // Determine if the sidebar is collapsed (hidden) based on the device type
  const isCollapsed = isMobile ? !isMobileOpen : !isDesktopExpanded;

  return (
    <SidebarContext.Provider
      value={{
        isDesktopExpanded,
        isMobileOpen,
        isMobile,
        toggleDesktopSidebar,
        toggleMobileSidebar,
        isCollapsed,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// Converted the context to a custom hook for easier access
export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
}
