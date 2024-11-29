"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CiBoxList } from "react-icons/ci";
import { BsUiChecksGrid } from "react-icons/bs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { RiListCheck3 } from "react-icons/ri";
export default function SecondStep() {
  return (
    <Card
      className="  shadow-none  border-none py-6
     flex flex-col  gap-4  w-full  items-center  mt-11"
    >
      <div className="flex justify-center w-full">
        <DifficultyChoices />
      </div>
      <NumberOfQuestions />
    </Card>
  );
}

function DifficultyChoices() {
  const [selectedMethod, setSelectedMethod] = useState("easy");

  console.log(selectedMethod);

  return (
    <div className="flex flex-col w-full max-w-sm gap-1.5 items-center justify-center ">
      <div className="flex flex-col gap-1">
        <Label htmlFor="quizTitle" className="text-slate-600">
          Difficulty
        </Label>
        <p className="text-slate-500 text-xs">
          How diffcult the quiz want to be?
        </p>
      </div>
      <ToggleGroup
        type="single"
        value={selectedMethod}
        onValueChange={setSelectedMethod}
        className="flex  gap-3 mt-4"
      >
        <ToggleGroupItem
          value="easy"
          className={`p-6 flex items-center justify-center border rounded-lg gap-2 ${
            selectedMethod === "easy" ? "border-primary" : "border-gray-200"
          }`}
        >
          <p className="text-center text-[14px]">Easy</p>
        </ToggleGroupItem>
        {/* Medium */}
        <ToggleGroupItem
          value="medium"
          className={`p-6 flex items-center justify-center border rounded-lg gap-2 ${
            selectedMethod === "medium"
              ? "border-primary text-primary"
              : "border-gray-200"
          }`}
        >
          <p className="text-center text-[14px]">Medium</p>
        </ToggleGroupItem>

        {/* Hard */}
        <ToggleGroupItem
          value="hard"
          className={`p-6 flex items-center justify-center border rounded-lg gap-2 ${
            selectedMethod === "hard" ? "border-primary" : "border-gray-200"
          }`}
        >
          <p className="text-center text-[14px]">Hard</p>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

function QuestionToggle() {
  const [selectedMethod, setSelectedMethod] = useState("multi");

  console.log(selectedMethod);

  return (
    <div className="flex flex-col w-full max-w-sm gap-1.5 justify-center items-center">
      <div className="flex flex-col gap-1">
        <Label htmlFor="quizTitle" className="text-slate-600">
          Question Type
        </Label>
        <p className="text-slate-500 text-xs">
          Which type your Quizz want to be?{" "}
        </p>
      </div>

      <ToggleGroup
        type="single"
        value={selectedMethod}
        onValueChange={setSelectedMethod}
        className="flex  gap-3 mt-4"
      >
        <ToggleGroupItem
          value="multi"
          className={`p-6  flex items-center justify-center border rounded-lg gap-2 ${
            selectedMethod === "multi" ? "border-blue-500" : "border-gray-200"
          }`}
        >
          <BsUiChecksGrid className="" />
          <p className="text-center text-[14px]">Multi-Choice</p>
        </ToggleGroupItem>

        <ToggleGroupItem
          value="trueFalse"
          className={`p-6 flex items-center justify-center border rounded-lg gap-2 ${
            selectedMethod === "trueFalse"
              ? "border-blue-500"
              : "border-gray-200"
          }`}
        >
          <RiListCheck3 />
          <p className="text-center text-[14px]">True or False</p>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

function NumberOfQuestions() {
  return (
    <div className="flex flex-col w-full max-w-sm  gap-1.5 mt-16  justify-center items-center">
      <div className="flex flex-col gap-1">
        <Label htmlFor="quizTitle" className="text-slate-600">
          Number Of Questions
        </Label>
        <p className="text-slate-500 text-xs">
          Maximum of question you can set is 20!
        </p>
      </div>

      <div className="flex gap-5 items-center justify-center mt-4">
        <Button variant={"outline"} className="size-10">
          <FaMinus />
        </Button>
        <span className="text-3xl font-bold">2</span>
        <Button variant={"outline"} className="size-10">
          <FaPlus />
        </Button>
      </div>
    </div>
  );
}
