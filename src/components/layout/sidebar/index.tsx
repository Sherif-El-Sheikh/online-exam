import React from "react";
import { SidebarClientControls } from "./components/sidebar-client-controls";

export function Sidebar(
  props: React.ComponentProps<typeof SidebarClientControls>,
) {
  return (
    <aside className="flex min-h-screen w-fit flex-col">
      <SidebarClientControls {...props} />
    </aside>
  );
}
