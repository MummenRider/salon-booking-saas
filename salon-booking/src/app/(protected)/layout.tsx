import { auth } from "@/auth";
import AppBreadCrumbs from "@/components/app-breadcrumbs";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React, { FC } from "react";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}
const ProtectedLayout: FC<ProtectedLayoutProps> = async ({ children }) => {
  const session = await auth();
  return (
    <SidebarProvider className="">
      <AppSidebar user={session?.user.name} />
      <SidebarInset className="">
        <header className="flex h-16 shrink-0 items-center gap-2 p-4">
          <div className="flex items-center gap-2 ">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <AppBreadCrumbs />
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default ProtectedLayout;
