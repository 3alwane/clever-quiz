"use client";
import { AppSidebar } from "./Sidebar/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "./SidebarInset/_components/Header";
import Overview from "./SidebarInset/_components/Overview";
import QuizzesInProgess from "./SidebarInset/_components/QuizzesOnProgess";
import AllQuizzes from "./pages/AllQuizzes/AllQuizzes";
import Statistics from "./pages/Statistics/Statistics";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Page() {
  const { theme } = useTheme();
  const [backgroundColor, setBackgroundColor] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true after component mounts
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setBackgroundColor(theme === "dark" ? "bg-slate-800" : "bg-slate-100");
    }
  }, [theme, isMounted]);

  // Avoid rendering on the server, only render after mount on the client
  if (!isMounted) {
    return null;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className={`w-full h-full  p-5 ${backgroundColor}`}>
          <Header />
          {/* <AllQuizzes /> */}
          <Statistics />
          {/* <Overview />
          <QuizzesInProgess /> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
