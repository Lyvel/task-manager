"use client";

import { Edit, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
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
} from "../ui/alert-dialog";
import { refresh, setRefresh } from "../session-provider";
import { useState } from "react";
import CategoryNew from "../category-new";

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
  category?: Category;
}) {
  const router = useRouter();
  const [showNewCat, setShowNewCat] = useState(false);
  async function deleteCategory() {
    const response = await fetch("/api/category/delete/" + category?.id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      toast({
        title: "Category Deleted Successfully",
        description: category?.title + " has been deleted successfully",
      });
      setRefresh(!refresh);
      router.push("/");
      router.refresh();
    } else {
      toast({
        title: "Failed to delete category",
        description: category?.title + " has failed to be deleted",
        variant: "destructive",
      });
    }
  }
  return (
    <>
      {showNewCat && <CategoryNew show={setShowNewCat} category={category} />}
      <div
        className={
          " group flex justify-between w-full p-2 rounded-lg hover:cursor-pointer text-lg" +
          (current ? " bg-primary text-white" : " hover:bg-muted") +
          (category && " pl-6") +
          " " +
          className
        }
        onClick={onClick}
      >
        <div className={"flex gap-4 justify-between items-center w-full"}>
          {category && (
            <Edit
              className="hover:text-primary hidden group-hover:block"
              onClick={(e) => {
                e.stopPropagation();
                setShowNewCat(true);
              }}
            />
          )}
          {icon}
          <div className="flex justify-between items-center w-full">
            <h1
              className={
                "max-w-[115px]  tracking-light text-ellipsis whitespace-nowrap overflow-hidden " +
                (category !== undefined ? " text-sm" : " max-w-[150px]") +
                (current ? " text-white" : "")
              }
            >
              {title}
            </h1>
            {category && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Trash
                    size={20}
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-red-500 hidden group-hover:block"
                  />
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
                    <AlertDialogAction onClick={() => deleteCategory()}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
