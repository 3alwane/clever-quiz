"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import AppLogo from "./_components/AppLogo";
import { MainMenu } from "./MainMenu/MainMenu";
import QuizzesCounter from "./QuizzesCounter/QuizzesCounter";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="poppins border-none">
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        <MainMenu />
      </SidebarContent>
      <SidebarFooter>
        <QuizzesCounter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
