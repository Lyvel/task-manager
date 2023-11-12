"use client";
import { Banana, Delete, DeleteIcon, FileEdit, Trash } from "lucide-react";
import { Button } from "./ui/button";
import TaskEdit from "./task-edit";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { refresh, setRefresh } from "./session";

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
  async function completeTask() {
    const response = await fetch("/api/task/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: task.id,
        title: task.title,
        description: task.description,
        important: task.important,
        completed: !task.completed,
        completeBy: new Date(task.completeBy),
      }),
    });
    if (response.ok) {
      toast({
        title: "Task Completed Successfully",
        description: task.title + " has been completed successfully",
      });
      router.refresh();
      setRefresh(!refresh);
    } else {
      toast({
        title: "Failed to complete task",
        description: task.title + " has failed to be complete",
        variant: "destructive",
      });
    }
  }
  return (
    <>
      <div
        className={
          "p-5 bg-muted rounded-xl flex flex-col justify-between gap-4 m-1 shadow-lg xl:max-w-xs w-full " +
          (task.important && "")
        }
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold tracking-wider flex justify-between">
            {task.title}
            {task.important && <Banana className="text-yellow-500" />}
          </h1>
          <p className="line-clamp-3 text-ellipsis">{task.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <time className="">
            {new Date(task.completeBy).toLocaleDateString()}
            {/* {task.completeBy.split("T")[0]} */}
          </time>
          <div className="flex justify-between">
            <Button
              variant={task.completed ? "default" : "destructive"}
              onClick={() => completeTask()}
            >
              {task.completed ? "Completed" : "Incomplete"}
            </Button>
            <div className="flex gap-2">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="hover:text-primary"
                onClick={() => setShowEdit(true)}
              >
                <FileEdit />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="hover:text-destructive"
                  >
                    <Trash />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      this task.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteTask()}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
      {showEdit && <TaskEdit show={setShowEdit} newTask={false} task={task} />}
    </>
  );
}
