import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MdQuiz } from "react-icons/md";
import { Progress } from "@/components/ui/progress";
import { RiListCheck } from "react-icons/ri";
import QuizMenuDropDown from "@/app/dashboard/SidebarInset/_components/dropdowns/QuizMenuDrop";

import { MdFavoriteBorder } from "react-icons/md";

export default function QuizzesArea() {
  const allCards = [
    {
      id: 1,
      icon: <MdQuiz className="text-primary text-xl" />,
      title: "Javascript Quiz",
      descrtiption: "This is a descritpion",
      questions: 20,
      difficulty: "Easy",
      status: "In Progress",
    },
    {
      id: 1,
      icon: <MdQuiz className="text-primary text-2xl" />,
      title: "Javascript Quiz",
      descrtiption: "This is a descritpion",
      questions: 20,
      difficulty: "Easy",
      status: "In Progress",
    },
    {
      id: 1,
      icon: <MdQuiz className="text-primary text-2xl" />,
      title: "Javascript Quiz",
      descrtiption: "This is a descritpion",
      questions: 20,
      difficulty: "Easy",
      status: "In Progress",
    },
    {
      id: 1,
      icon: <MdQuiz className="text-primary text-2xl" />,
      title: "Javascript Quiz",
      descrtiption: "This is a descritpion",
      questions: 20,
      difficulty: "Easy",
      status: "In Progress",
    },
    {
      id: 1,
      icon: <MdQuiz className="text-primary text-2xl" />,
      title: "Javascript Quiz",
      descrtiption: "This is a descritpion",
      questions: 20,
      difficulty: "Easy",
      status: "In Progress",
    },
    {
      id: 1,
      icon: <MdQuiz className="text-primary text-2xl" />,
      title: "Javascript Quiz",
      descrtiption: "This is a descritpion",
      questions: 20,
      difficulty: "Easy",
      status: "In Progress",
    },
  ];
  return (
    <div className="flex flex-col gap-4 mt-9 poppins">
      <div className="grid grid-cols-4 gap-3">
        {allCards.map((singleCard, index) => (
          <Card key={index} className="shadow-none border-none">
            {/* Icon and close Button */}
            <CardHeader className="p-5 ">
              <div className="flex justify-between items-start">
                <div className="size-9 bg-primary/20 rounded-md flex justify-center items-center">
                  {singleCard.icon}
                </div>
                <QuizMenuDropDown />
              </div>
            </CardHeader>
            {/* Title And description */}
            <CardContent>
              <CardTitle>{singleCard.title}</CardTitle>
              <CardDescription className="mt-1">
                {singleCard.questions} questions
              </CardDescription>
              {/* Progress bar */}
              <div className="flex gap-2 items-center mt-3">
                <Progress value={56} />
                <span className="text-slate-600 text-xs">56%</span>
              </div>
            </CardContent>

            {/* footer */}
            <CardFooter className="flex justify-between items-center mt-1">
              {/* Difficulty */}
              <div className=" flex gap-1 items-center text-slate-500 text-sm">
                <div className="size-2 rounded-full bg-green-500"></div>
                <span className="text-green-500">Easy</span>
              </div>
              {/* favorite Type */}

              <div className=" flex gap-1 items-center text-slate-500 text-sm">
                <MdFavoriteBorder className="text-[16px]" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
