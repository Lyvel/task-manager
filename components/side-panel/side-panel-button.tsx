"use client";

import { Trash } from "lucide-react";
import { Button } from "../ui/button";

export default function SidePanelButton({
  current,
  title,
  icon,
  onClick,
  className,
  category,
}: {
  current: boolean;
  title: string;
  icon: any;
  onClick?: any;
  className?: string;
  category?: boolean;
}) {
  return (
    <div
      className={
        className +
        " flex gap-4 justify-between w-full pl-10 hover:bg-muted hover:cursor-pointer" +
        (current ? " bg-muted" : "")
      }
      onClick={onClick}
    >
      <div className="flex gap-4 justify-center items-center py-2">
        {icon}
        <h1>{title}</h1>
        {category && (
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={(e) => e.stopPropagation()}
            className="hover:text-red-500"
          >
            <Trash size={20} />
          </Button>
        )}
      </div>
      {current ? <div className="h-full w-[2px] bg-green-500"></div> : <></>}
    </div>
  );
}
