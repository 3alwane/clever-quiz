import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

import { MdQuiz } from "react-icons/md";
import { ExperienceChart } from "./_compontents/BarChart";

export default function Statistics() {
  return (
    <div className="poppins">
      <ChartHistory />
      <AchievementsCard />
    </div>
  );
}

function ChartHistory() {
  return (
    <Card className="mt-4 shadow-none border-none">
      <CardHeader className="p-5">
        <div className="flex justify-between items-center mb-8">
          <span className="font-semibold text-lg">XP gained this week</span>
          <span>789 XP</span>
        </div>
        <ExperienceChart />
      </CardHeader>
    </Card>
  );
}

function AchievementsCard() {
  const allCards = [
    {
      id: "1",
      icon: <MdQuiz className="text-primary text-xl" />,
      label: "Quizzes Generated",
      counter: "89",
    },
    {
      id: "2",
      icon: <MdQuiz className="text-primary text-xl" />,
      label: "Total XP",
      counter: "1200",
    },
    {
      id: "3",
      icon: <MdQuiz className="text-primary text-xl" />,
      label: "Quizzes Completed",
      counter: "34",
    },
    {
      id: "4",
      icon: <MdQuiz className="text-primary text-xl" />,
      label: "Total Time Spent",
      counter: "1h 45 min",
    },
    {
      id: "5",
      icon: <MdQuiz className="text-primary text-xl" />,
      label: "Completion Rate",
      counter: "56%",
    },
    {
      id: "3",
      icon: <MdQuiz className="text-primary text-xl" />,
      label: "Quizzes Completed",
      counter: "34",
    },
  ];

  return (
    <Card className="mt-4 shadow-none border-none">
      <CardHeader className="p-5">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">Achievements</span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          {allCards.map((singleCard, index) => (
            <SingleAchievementCard key={index} singleCard={singleCard} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SingleAchievementCard({
  singleCard,
}: {
  singleCard: { id: string; icon: ReactNode; label: string; counter: string };
}) {
  return (
    <Card className="flex items-center shadow-none ">
      {/* Icon */}
      <CardHeader className=" p-3">
        <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center ">
          {singleCard.icon}
        </div>
      </CardHeader>

      {/* Label and sub labl */}
      <div className="">
        <div className=" flex flex-col p-1">
          <CardTitle className="text-[22px]  font-bold">
            {singleCard.counter}
          </CardTitle>
          <CardDescription className="text-xs p-0">
            {singleCard.label}
          </CardDescription>
        </div>
      </div>
    </Card>
  );
}
