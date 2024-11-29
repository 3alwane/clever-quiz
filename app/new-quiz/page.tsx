"use client";

import * as React from "react";

import { SiQuizlet } from "react-icons/si";
import LinearStepper from "./Stepper";

export default function NewQuizForm() {
  return (
    <div className="poppins w-full justify-center flex items-center">
      <div className="flex flex-col gap-14 items-center justify-between mt-3 w-[70%]">
        <AppLogo />
        <LinearStepper />
      </div>
    </div>
  );
}

function AppLogo() {
  return (
    <div className={`flex items-center gap-2 mt-6 mb-6 $  transition-all`}>
      <div
        className={`flex aspect-square size-10 items-center justify-center 
        rounded-lg bg-primary text-primary-foreground`}
      >
        <SiQuizlet className="text-lg" />
      </div>

      <div className="flex items-center gap-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold text-[22px]">Clever</span>
        <span className="truncate text-[22px]">Quiz</span>
      </div>
    </div>
  );
}
