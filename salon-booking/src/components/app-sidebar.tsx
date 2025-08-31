"use client";
import {
  Calendar,
  ChevronUp,
  Home,
  Inbox,
  LogOutIcon,
  Search,
  Settings,
  Settings2,
  User2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useUserState } from "@/stores/user-store";

export function AppSidebar({ ...props }) {
  const sidebarItems = [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: User2,
    },
    {
      title: "Settings",
      url: "/dashboard/profile",
      icon: Settings2,
    },
  ];
  const handleSignOut = () => {
    // Your sign-out logic here
    console.log("Signing out...");
  };
  const email = useUserState((state) => state.email);
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarMenu>
            {sidebarItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton size="default" asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {email}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
