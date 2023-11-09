"use client";
import { Delete, DeleteIcon, FileEdit, Trash } from "lucide-react";
import { Button } from "./ui/button";
import TaskEdit from "./task-edit";
import { useState } from "react";

export default function TaskCard() {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <>
      <div className="p-5 bg-muted rounded-xl shadow-inner flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold tracking-wider">Title</h1>
          <p className="line-clamp-3 text-ellipsis">
            Main Context Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Alias tempore debitis distinctio eos odio rem id dolores sequi
            officia reiciendis enim omnis autem voluptatibus illo iure at quasi,
            accusantium maxime!
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <time className="">01/01/2023</time>
          <div className="flex justify-between">
            <Button variant={"destructive"}>Incomplete</Button>
            <div className="flex gap-2">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="hover:text-primary"
                onClick={() => setShowEdit(true)}
              >
                <FileEdit />
              </Button>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="hover:text-destructive"
              >
                <Trash />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showEdit && <TaskEdit show={setShowEdit} />}
    </>
  );
}
