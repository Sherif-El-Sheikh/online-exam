import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileSidebarProp } from "@/lib/types/navbar";
import { Sidebar, SidebarClientControls } from "../../sidebar";

export function MobileSidebar({children}: MobileSidebarProp) {
    return (
        <Sheet>
            {/* Trigger to open the sheet, passed as children allows mobile button to interact with sheet */}
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>

            {/* SheetContent holds the Sidebar */}
            <SheetContent side="left" className="p-0 w-72">
                <Sidebar>
                    <SidebarClientControls role="user"/>
                </Sidebar>
            </SheetContent>
        </Sheet>
    )
}
