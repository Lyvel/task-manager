"use client";
import { Plus } from "lucide-react";
import TaskCard from "./task-card";
import { Button } from "./ui/button";
import TaskNew from "./task-new";
import { Fragment, useEffect, useState } from "react";
import {
  categories,
  refresh,
  searchParams,
  session,
  tasks,
} from "./session-provider";

export default function AllTasks() {
  const cat = categories.find((c) => c.id.toString() === searchParams.category);
  return (
    <div className="p-5 bg-card rounded-xl w-full gap-4 flex flex-col outline outline-1 outline-card-foreground">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold tracking-wider text-3xl uppercase">
            {searchParams.tasks !== "all-cat"
              ? searchParams.tasks !== undefined
                ? searchParams.tasks + " Tasks"
                : "All Tasks"
              : categories.find(
                  ({ id }) => id.toString() === searchParams.category
                )?.title + " Tasks"}
          </h1>
          {cat && <h2>{cat.description}</h2>}
        </div>

        <Button variant={"ghost"} size={"icon"}>
          <Plus />
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:flex gap-4 overflow-hidden overflow-y-auto 2xl:flex-wrap p-2">
        {true && (
          <>
            {tasks.map((task: Task) => (
              <Fragment key={task.id}>
                {searchParams !== undefined ? (
                  <>
                    {searchParams.tasks === undefined && (
                      <TaskCard task={task} />
                    )}
                    {searchParams.tasks === "all" && <TaskCard task={task} />}
                    {searchParams.tasks === "all-cat" &&
                      task.category.toString() === searchParams.category && (
                        <TaskCard task={task} />
                      )}
                    {searchParams.tasks === "important" && task.important && (
                      <TaskCard task={task} />
                    )}
                    {searchParams.tasks === "completed" && task.completed && (
                      <TaskCard task={task} />
                    )}
                    {searchParams.tasks === "incomplete" && !task.completed && (
                      <TaskCard task={task} />
                    )}
                    {searchParams.tasks === "overdue" &&
                      new Date(task.completeBy) < new Date(Date.now()) &&
                      !task.completed && <TaskCard task={task} />}
                  </>
                ) : (
                  <TaskCard task={task} />
                )}
              </Fragment>
            ))}
          </>
        )}
        <TaskNew />
      </div>
    </div>
  );
}
