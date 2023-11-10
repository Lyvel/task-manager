"use client";
import { Delete, DeleteIcon, FileEdit, Trash } from "lucide-react";
import { Button } from "./ui/button";
import TaskEdit from "./task-edit";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

export default function TaskCard({ task }: { task: Task }) {
  const [showEdit, setShowEdit] = useState(false);

  const { toast } = useToast();
  const router = useRouter();
  async function deleteTask() {
    const response = await fetch("/api/task/delete/" + task.id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      toast({
        title: "Task Deleted Successfully",
        description: task.title + " has been deleted successfully",
      });
      router.refresh();
    } else {
      toast({
        title: "Failed to delete task",
        description: task.title + " has failed to be deleted",
        variant: "destructive",
      });
    }
  }
  return (
    <>
      <div
        className={
          "p-5 bg-muted rounded-xl shadow-inner flex flex-col gap-4 m-1 " +
          (task.important && "outline-dotted outline-primary")
        }
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold tracking-wider">{task.title}</h1>
          <p className="line-clamp-3 text-ellipsis">{task.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <time className="">
            {new Date(task.completeBy).toLocaleDateString()}
          </time>
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
                onClick={() => deleteTask()}
              >
                <Trash />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showEdit && <TaskEdit show={setShowEdit} newTask={false} task={task} />}
    </>
  );
}
