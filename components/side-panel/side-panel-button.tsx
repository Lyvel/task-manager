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
import { refresh, setRefresh } from "../session";
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
          className +
          " flex gap-4 justify-between w-full pl-10 hover:bg-muted hover:cursor-pointer" +
          (current ? " bg-muted" : "")
        }
        onClick={onClick}
      >
        <div className={"flex gap-4 justify-between items-center py-2 w-full"}>
          {category && (
            <Edit
              className="block hover:text-primary"
              onClick={(e) => {
                e.stopPropagation();
                setShowNewCat(true);
              }}
            />
          )}
          {icon}
          <div className="flex justify-between items-center w-full">
            <h1>{title}</h1>
            {category && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Trash
                    size={20}
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-red-500 -translate-x-8"
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
        {current ? (
          <div className={"h-full w-[2px] bg-green-500"}></div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
