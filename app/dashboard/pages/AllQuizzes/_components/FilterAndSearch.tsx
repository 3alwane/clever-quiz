import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import StatusDropDown from "../drop downs/StatusDropDown";
import DifficultyDropDown from "../drop downs/DifficulyDropDown";
import QuestionTypeDropDown from "../drop downs/QuestionType";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { IoClose } from "react-icons/io5";
export default function FilterAndSearch() {
  return (
    <Card
      className=" mt-8 p-[18px] shadow-none border-none flex flex-col gap-4
    "
    >
      {/* Search input */}
      <div className=" flex gap-2 items-center justify-between ">
        <div className="w-full ">
          <div className="w-[85%] relative">
            <Input
              placeholder="Search a quizz..."
              className=" p-5 bg-slate-100 border-none pl-9"
            />
            <FaSearch className="absolute top-3 left-3 opacity-65" />
            <Button className="absolute right-1 top-1 p-3 h-[34px] shadow-none">
              <MdAdd className="text-2xl" />
            </Button>
          </div>
        </div>
        {/* filter drop downs */}
        <div className="flex items-center gap-3">
          <StatusDropDown />
          <DifficultyDropDown />
          <QuestionTypeDropDown />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Badge
          className="bg-primary/20 text-primary shadow-none p-1 px-2 flex gap-1 
        items-center hover:bg-primary/30 select-none"
        >
          <span>filter option</span>
          <IoClose className="mt-[2px] cursor-pointer" />
        </Badge>

        <Badge
          className="bg-primary/20 text-primary shadow-none p-1 px-2 flex gap-1 
        items-center hover:bg-primary/30 select-none"
        >
          <span>filter option</span>
          <IoClose className="mt-[2px] cursor-pointer" />
        </Badge>
      </div>
    </Card>
  );
}
