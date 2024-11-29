// shadcn components
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Icons
import { MdQuiz } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaPercent } from "react-icons/fa";
import { BiStats } from "react-icons/bi";

export default function Overview() {
  const allCards = [
    {
      id: 1,
      result: "21",
      label: "Quizzes Generated",
      icon: <MdQuiz className="text-primary text-xl" />,
    },
    {
      id: 2,
      result: "Medium",
      label: "Avreage Quiz Difficulty",
      icon: <SiLevelsdotfyi className="text-primary text-xl" />,
    },
    {
      id: 3,
      result: "87",
      label: "Quiz Completion Rate",
      icon: <FaPercent className="text-primary text-lg" />,
    },
  ];
  return (
    <div className="flex flex-col gap-4 mt-8 poppins">
      {/* Overview section */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center text-slate-500 text-xl">
          <BiStats className="text-2xl" />
          <span className="font-bold  ">Overview</span>
        </div>
        <Button variant={"link"}>See all</Button>
      </div>

      {/* All the stat cards */}
      <div className="grid grid-cols-3 gap-2">
        {allCards.map((singleCard, index) => (
          <Card
            key={index}
            className="flex items-center shadow-none border-none "
          >
            {/* Icon */}
            <CardHeader className=" ">
              <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center ">
                {singleCard.icon}
              </div>
            </CardHeader>

            {/* Label and sub labl */}
            <div className="">
              <div className=" flex flex-col p-1">
                <CardTitle className="text-[22px]  font-bold">
                  {singleCard.result}
                </CardTitle>
                <CardDescription className="text-xs p-0">
                  {singleCard.label}
                </CardDescription>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
