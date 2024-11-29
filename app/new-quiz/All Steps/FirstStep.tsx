"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdError } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
export default function FirstStep() {
  return (
    <Card
      className="  shadow-none  border-none py-6
     flex flex-col gap-2 w-full  overflow-auto  items-center  mt-16 mb-9"
    >
      <QuizTitle />
      <QuizTopic />
    </Card>
  );
}

function QuizTitle() {
  return (
    <div className="flex flex-col w-full max-w-sm gap-1.5">
      <Label htmlFor="quizTitle" className="text-slate-600">
        Quiz Title
      </Label>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          id="quizTitle"
          placeholder="Quiz Title..."
          className="p-4 py-5 mt-1"
        />
        <Button className="size-[42px] mt-1"></Button>
      </div>

      {/* error text and icon */}
      <div className="flex items-center gap-1 text-red-500">
        <MdError />
        <p className="text-xs">This is an error</p>
      </div>
    </div>
  );
}

function QuizTopic() {
  return (
    <div className="flex flex-col w-full max-w-sm gap-1.5 mt-6">
      <Label htmlFor="quizTitle" className="text-slate-600">
        Quiz Topic
      </Label>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          id="quizTitle"
          placeholder="Quiz Topic..."
          className="p-4 py-5 mt-1"
        />
      </div>

      {/* error text and icon */}
      <div className="flex items-center gap-1 text-red-500">
        <MdError />
        <p className="text-xs">This is an error</p>
      </div>
    </div>
  );
}
