import { Navbar } from "@/components/layout/navbar";
import { SidebarProvider } from "@/components/providers/sidebar/sidebar.provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { Sidebar } from "@/components/layout/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Retrieve the server-side session to get user data and role
  const session = await getServerSession(authOptions);
  const role = session?.user?.role === "admin" ? "admin" : "user";

  return (
    <SidebarProvider>
      {/* Main container */}
      <div className="relative flex min-h-screen">
        {/* Sidebar */}
        <Sidebar role={role} />

        {/* Navbar and Page Content */}
        <div className="flex min-h-screen flex-1 flex-col bg-dashboard/70">
          <Navbar role={role} />

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
