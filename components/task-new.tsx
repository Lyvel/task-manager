"use client";
import { Delete, DeleteIcon, FileEdit, Plus, Trash } from "lucide-react";
import { Button } from "./ui/button";
import TaskEdit from "./task-edit";
import { useState } from "react";

export default function TaskNew() {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <>
      <div
        className="p-5 bg-muted rounded-xl flex flex-col gap-4 cursor-pointer min-h-[188px] hover:bg-popover shadow-lg"
        onClick={() => setShowEdit(true)}
      >
        <div className="outline-dashed w-full h-full flex justify-center items-center flex-col gap-4 rounded-xl">
          <h1 className="font-bold text-xl">Add new Task</h1>
          <Plus />
        </div>
      </div>
      {showEdit && (
        <TaskEdit show={setShowEdit} newTask={true} task={undefined} />
      )}
    </>
  );
}
