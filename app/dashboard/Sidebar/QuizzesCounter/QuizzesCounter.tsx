"use client";

import { Button } from "@/components/ui/button";

export default function QuizzesCounter() {
  const challengeText = "AI-Generated Quizzes";
  const progressText = ` 45 quizzes generated`;
  const upgradeButtonText = "Upgrade to Pro";

  return (
    <div className={` mb-7  p-[18px] rounded-lg shadow-md  mx-4   bg-primary`}>
      <h3 className="text-[15px] font-semibold mb-2 text-white ">
        {challengeText}
      </h3>
      <div className="w-full bg-gray-300 rounded-full h-1.5 mt-5 mb-2">
        <div className="bg-white h-1.5 rounded-full"></div>
      </div>
      <p className="text-[10px] text-white mb-5">{progressText}</p>

      <Button className="w-full text-[10px] bg-white text-primary  rounded-md hover:bg-slate-100 transition duration-300">
        {upgradeButtonText}
      </Button>
    </div>
  );
}
