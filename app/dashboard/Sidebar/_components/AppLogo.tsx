"use client";

import * as React from "react";

import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { SiQuizlet } from "react-icons/si";

export default function AppLogo() {
  const { state } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem
        className={`flex items-center gap-2 mt-7 ${
          state === "expanded" ? "mx-3" : "mx-1"
        } transition-all`}
      >
        <div
          className={`   flex aspect-square size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground`}
        >
          <SiQuizlet className="text-lg" />
        </div>

        {state === "expanded" && (
          <div className="flex items-center gap-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold text-[22px]">Clever</span>
            <span className="truncate text-[22px]">Quiz</span>
          </div>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
