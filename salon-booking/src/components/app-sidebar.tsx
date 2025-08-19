import {
  Calendar,
  Home,
  Inbox,
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
    </Sidebar>
  );
}
