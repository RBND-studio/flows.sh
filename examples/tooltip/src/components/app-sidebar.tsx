"use client";

import * as React from "react";
import { BarChart3, LineChart, PieChart, Settings2, Users } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: BarChart3,
      isActive: true,
      items: [
        { title: "Dashboard", url: "#" },
        { title: "Reports", url: "#" },
      ],
    },
    {
      title: "Acquisition",
      url: "#",
      icon: Users,
      items: [
        { title: "Channels", url: "#" },
        { title: "Campaigns", url: "#" },
      ],
    },
    {
      title: "Engagement",
      url: "#",
      icon: LineChart,
      items: [
        { title: "Events", url: "#" },
        { title: "Funnels", url: "#" },
        { title: "Retention", url: "#" },
      ],
    },
    {
      title: "Revenue",
      url: "#",
      icon: PieChart,
      items: [
        { title: "MRR", url: "#" },
        { title: "Churn", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Integrations", url: "#" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="h-full" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" id="sidebar-header">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <BarChart3 className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Analytics</span>
                  <span className="truncate text-xs">Growth plan</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
