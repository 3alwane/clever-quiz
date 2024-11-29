"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IoClose } from "react-icons/io5";
import { Progress } from "@/components/ui/progress";
import { MdOutlineTimer } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { Card, CardTitle } from "@/components/ui/card";
import { FaRegCheckCircle } from "react-icons/fa";
import { useTheme } from "next-themes";
import QuizResult from "./results";

export default function QuizPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get("name");

  const {} = useTheme();
  const [backgroundColor, setBackgroundColor] = useState("");
  const [headerFooterBgColor, setHeaderFooterBgColor] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Set mounted state to true after component mounts
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only set background color after component is mounted
    if (isMounted) {
      setBackgroundColor(theme === "dark" ? "bg-slate-900" : "bg-slate-50");
      setHeaderFooterBgColor(
        theme === "dark" ? "bg-slate-800" : "bg-slate-100"
      );
    }
  }, [theme, isMounted]);

  useEffect(() => {
    // Redirect to dashboard if name is missing, but only after mounting
    if (isMounted && !name) {
      router.push("/dashboard");
    }
  }, [name, router, isMounted]);

  // Wait until mounted before rendering
  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`poppins  w-full h-screen flex flex-col justify-between relative`}
    >
      {/* <Header headerFooterBgColor={headerFooterBgColor} />
      <QuizBody backgroundColor={backgroundColor} />
      <QuizFooter headerFooterBgColor={headerFooterBgColor} /> */}
      <QuizResult />
    </div>
  );
}

function Header({ headerFooterBgColor }: { headerFooterBgColor: string }) {
  return (
    <div
      className={`w-full py-7 ${headerFooterBgColor} flex justify-between items-center px-6 max-sm:px-5`}
    >
      <div className="flex gap-2 items-center">
        <div className="size-9 bg-primary/20 rounded-md flex justify-center items-center">
          <MdQuiz className="text-primary text-lg" />
        </div>
        <div className="max-sm:hidden">
          <p className="text-[16px] font-semibold">Jabascript quiz</p>
          <p className="text-xs text-slate-500">Easy</p>
        </div>
      </div>

      {/* progress bar */}
      <div className="w-[41%]">
        <Progress className="bg-slate-300" value={45} />
      </div>
      {/* timer */}
      <Button variant={"outline"} className="bg-transparent size-8">
        <IoClose className="text-opacity-50" />
      </Button>
    </div>
  );
}

function QuizBody({ backgroundColor }: { backgroundColor: string }) {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center ${backgroundColor}`}
    >
      <Card
        className={`border  mx-[22%] p-4 border-none shadow-none
     ${backgroundColor} max-sm:mx-[13%]`}
      >
        {/* Question area */}

        <div>
          <span className="opacity-40 text-sm">Question 1</span>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            cupiditate consequuntur Reprehenderit odit id distinctio quis
            deserunt obcaecati nostrum quisquam dolores eligendi?
          </p>
        </div>

        {/* choices area */}
        <ul className="mt-5 flex flex-col gap-2">
          <li
            className="p-3 border rounded-md text-sm hover:bg-primary/10 
        transition-all"
          >
            choice 1
          </li>
          <li
            className="p-3 border rounded-md text-sm hover:bg-primary/10 
        transition-all"
          >
            choice 2
          </li>
          <li
            className="p-3 border rounded-md text-sm hover:bg-primary/10 
        transition-all"
          >
            choice 3
          </li>
        </ul>
      </Card>
    </div>
  );
}

function QuizFooter({ headerFooterBgColor }: { headerFooterBgColor: string }) {
  return (
    <div
      className={`w-full py-7 ${headerFooterBgColor} flex justify-between items-center px-[12%] max-sm:px-[6%]`}
    >
      {/* left part */}
      <div className="flex gap-2 items-center text-green-700">
        <FaRegCheckCircle className="text-xl" />
        <p>Question solved. Good Job!</p>
      </div>
      {/* right part */}
      <Button className="p-5">Check</Button>
    </div>
  );
}
