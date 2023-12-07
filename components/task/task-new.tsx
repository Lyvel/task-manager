"use client";
import { Delete, DeleteIcon, FileEdit, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import TaskEdit from "./task-edit";

export default function TaskNew() {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <>
      {/* <div
        className="p-5 bg-background rounded-xl w-full 2xl:max-w-xs flex flex-col gap-4 cursor-pointer min-w-fit  hover:bg-muted shadow-lg"
        onClick={() => setShowEdit(true)}
      >
        <div className="outline-dashed w-full h-full flex justify-center items-center flex-col gap-4 rounded-xl p-5">
          <h1 className="font-bold text-xl">Add new Task</h1>
          <Plus />
        </div>
      </div> */}

      <Button
        variant={"default"}
        className="gap-2 rounded-full"
        onClick={() => setShowEdit(true)}
      >
        <Plus />
        Create New Tasks
      </Button>
      {showEdit && <TaskEdit show={setShowEdit} newTask={true} />}
    </>
  );
}
