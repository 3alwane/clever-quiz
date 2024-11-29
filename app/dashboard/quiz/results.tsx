import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LuTrophy } from "react-icons/lu";
import { FaC, FaCoins } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { GoGoal } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

export default function QuizResult() {
  return (
    <div className="absolute w-full h-full flex flex-col justify-center items-center gap-4">
      {/* <p className="text-[16px] font-semibold">Quiz Sumuray</p> */}
      <Card className="p-14 flex flex-col items-center gap-3 shadow-none border-none ">
        <LuTrophy className="text-[87px] text-yellow-500" />
        <div className="flex flex-col justify-center items-center mb-3">
          <p className="text-xl font-bold">Good Job!</p>
          <span className="text-[15px] text-slate-400 mb-5">
            You have scored 45 XP
          </span>
        </div>

        <Separator className="max-sm:w-1/2" />
        <div className="flex items-center gap-8 mt-1 max-sm:flex-col">
          {/* XP Gained */}
          <div>
            <div className="flex items-center gap-2">
              <GoGoal className="text-lg text-primary" />
              <p className="font-bold text-xl">20%</p>
            </div>
            <p className="text-sm text-gray-500">Average Accuracy</p>
          </div>
          {/* Correct Answers*/}
          <div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-lg text-green-600" />
              <p className="font-bold text-xl">20</p>
            </div>
            <p className="text-sm text-gray-500">Correct answers</p>
          </div>
          {/*  */}
          <div>
            <div className="flex items-center gap-2">
              <AiFillCloseCircle className="text-lg text-red-600" />
              <p className="font-bold text-xl">20</p>
            </div>
            <p className="text-sm text-gray-500">Wrong answers</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row p-3 justify-center gap-4 mt-8 w-full">
          <Button className="p-3 sm:p-5 w-full sm:w-auto">
            Replay The Quiz
          </Button>
          <Button variant="secondary" className="p-3 sm:p-5 w-full sm:w-auto">
            Back To Dashboard
          </Button>
        </div>
      </Card>
    </div>
  );
}
