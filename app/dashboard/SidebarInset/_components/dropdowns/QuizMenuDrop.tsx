"use client";
//sahdcn
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// icons
import { IoMdMore } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const menuItems = [
  { icon: <MdFavoriteBorder />, label: "Favorite", className: "" },
  { icon: <FaRegEdit />, label: "Modify", className: "" },
  { separator: true },
  {
    icon: <MdOutlineDelete className="text-lg" />,
    label: "Delete",
    className: "text-red-600",
  },
];

export default function QuizMenuDropDown() {
  return (
    <DropdownMenu>
      {/* Trigger drop down which is the more icon */}
      <DropdownMenuTrigger>
        <IoMdMore />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="poppins p-2">
        {menuItems.map((item, index) =>
          item.separator ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownMenuItem
              key={index}
              className={`flex items-center gap-1 p-[10px] ${item.className}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
