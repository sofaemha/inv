"use client";

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  MapIcon,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import type * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { NavMain } from "./ux/sidebar/navigation/root";
import { NavProjects } from "./nav-projects";
import { SearchCombobox } from "./search-combobox";
import { TeamSwitcher } from "./team-switcher";
import { UserButton } from "@daveyplate/better-auth-ui";

// This is sample data.
const data = {
  navMain: [
    {
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
      title: "Playground",
      url: "#",
    },
    {
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
      title: "Models",
      url: "#",
    },
    {
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
      title: "Documentation",
      url: "#",
    },
    {
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
      title: "Settings",
      url: "#",
    },
  ],
  projects: [
    {
      icon: Frame,
      name: "Design Engineering",
      url: "#",
    },
    {
      icon: PieChart,
      name: "Sales & Marketing",
      url: "#",
    },
    {
      icon: MapIcon,
      name: "Travel",
      url: "#",
    },
  ],
  teams: [
    {
      logo: GalleryVerticalEnd,
      name: "Acme Inc",
      plan: "Enterprise",
    },
    {
      logo: AudioWaveform,
      name: "Acme Corp.",
      plan: "Startup",
    },
    {
      logo: Command,
      name: "Evil Corp.",
      plan: "Free",
    },
  ],
  user: {
    email: "m@example.com",
    name: "Lumi UI",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <TeamSwitcher />
        <SearchCombobox />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarSeparator className="mx-0" />
      <SidebarFooter>
        <UserButton
          className="bg-transparent text-sidebar-foreground rounded-md !px-4 !py-3 text-left focus-visible:outline focus-visible:outline-ring focus-visible:ring-4 focus-visible:ring-ring/10 text-sm hover:text-sidebar-accent-foreground hover:bg-sidebar-accent select-none"
          classNames={{
            trigger: {
              user: {
                avatar: {
                  base: "hidden",
                },
              },
            },
            content: {
              base: "!min-w-min w-(--radix-dropdown-menu-trigger-width) max-h-(--radix-dropdown-menu-content-available-height)",
              menuItem: "px-3.5 py-2",
            },
          }}
          size="default"
        />
      </SidebarFooter>
    </Sidebar>
  );
}
