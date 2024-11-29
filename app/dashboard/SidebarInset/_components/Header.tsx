"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { IoSearch } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { LuLayoutDashboard } from "react-icons/lu";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <Card className="border-none p-3 flex justify-between items-center shadow-none poppins">
      <SidebarTrigger className="hidden max-sm:block" />

      <div className="flex gap-2 items-center">
        <LuLayoutDashboard className="text-lg text-primary" />
        <p className="font-bold text-lg ">All Quizzes</p>
      </div>

      <div className="relative w-[49%] bg-slate-100 rounded-md  ">
        <IoSearch className="absolute text-slate-700  top-[10px] left-2 text-xl" />
        <Input
          placeholder="Search..."
          className={`$ placeholder: h-10 border-none px-8  outline-none  `}
        />
        <Button className="absolute right-1 top-1 size-8">
          <MdAdd />
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <DarkModeToggle />
        <LevelAndPoints />
      </div>
    </Card>
  );
}

function LevelAndPoints() {
  return (
    <div className=" bg-slate-100 p-1 rounded-xl flex gap-1 items-center">
      {/*  */}

      <VscDebugBreakpointData className="text-[34px] text-primary" />

      <div className="flex items-end gap-1 pr-2">
        <div className="font-bold">1200</div>
        <span className="text-slate-600">XP</span>
      </div>
      <UserProfile />
    </div>
  );
}

function UserProfile() {
  return (
    <div className="mr-1">
      <div className="size-7 bg-slate-400 rounded-full"></div>
    </div>
  );
}
