"use client";
import {
  AlertCircle,
  Banana,
  Delete,
  DeleteIcon,
  FileEdit,
  Trash,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { categories, refresh, setRefresh } from "../providers/session-provider";
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
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useToast } from "../ui/use-toast";
import TaskEdit from "./task-edit";

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
        className={`p-5 bg-background rounded-lg flex flex-col justify-between gap-4 m-1 2xl:max-w-xs w-full hover:bg-muted cursor-pointer border border-indigo-950 hover:dark:border-indigo-50 border-opacity-10`}
        style={{
          outlineColor: categories.find((c) => c.id === task.category)?.colour,
        }}
        onClick={() => setShowEdit(true)}
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div>
              {task.important && (
                <p className="uppercase px-4 py-2 bg-red-400 bg-opacity-20 w-fit rounded-full text-red-400 font-bold text-sm leading-none tracking-widest">
                  Important
                </p>
              )}
            </div>

            {new Date(task.completeBy) < new Date(Date.now()) &&
              !task.completed && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <AlertCircle className="text-red-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Task Overdue</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-xl font-bold tracking-wider  overflow-hidden text-ellipsis whitespace-nowrap">
              {task.title}
            </h1>
            <p className="line-clamp-3 text-ellipsis text-indigo-950 dark:text-indigo-50 tracking-tight opacity-60">
              {task.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {task.category && (
            <p
              className="px-4 py-2 w-fit rounded-full font-bold text-sm leading-none tracking-widest"
              style={{
                backgroundColor:
                  categories.find((c) => c.id === task.category)?.colour + "20",
                color: categories.find((c) => c.id === task.category)?.colour,
              }}
            >
              {categories.find((c) => c.id === task.category)?.title}
            </p>
          )}
          <div className="flex justify-between items-center">
            <time className="line-clamp-3 text-ellipsis text-indigo-950 dark:text-indigo-50 tracking-tight opacity-60">
              {new Date(task.completeBy).toLocaleDateString()}
            </time>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="hover:text-destructive dark:hover:text-destructive text-indigo-950 dark:text-indigo-50 opacity-60"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Trash />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
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
      {showEdit && <TaskEdit show={setShowEdit} newTask={false} task={task} />}
    </>
  );
}
