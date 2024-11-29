"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { LuLayoutDashboard } from "react-icons/lu";
import { FaBorderAll } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
export function MainMenu() {
  const navMain = [
    {
      title: "Dashboard",
      url: "#",
      icon: LuLayoutDashboard,
      isActive: true,
    },
    {
      title: "All Quizzes",
      url: "#",
      icon: FaBorderAll,
    },
    {
      title: "Statistics",
      url: "#",
      icon: IoStatsChart,
    },
    {
      title: "Favorite Quizzes",
      url: "#",
      icon: MdFavoriteBorder,
    },
  ];
  return (
    <SidebarGroup className="mt-24 px-4">
      <SidebarMenu>
        {navMain.map((item, index) => (
          <SidebarMenuItem
            key={index}
            className={`${
              item.isActive ? " text-primary  " : "text-slate-400"
            } rounded-sm p-[2px]`}
          >
            <SidebarMenuButton tooltip={item.title} className="text-[16px]">
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
