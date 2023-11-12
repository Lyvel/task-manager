"use client";
import { Plus } from "lucide-react";
import TaskCard from "./task-card";
import { Button } from "./ui/button";
import TaskNew from "./task-new";
import { Fragment, useEffect, useState } from "react";
import { categories, refresh, session, tasks } from "./session";

export default function AllTasks({ sp }: { sp: SP }) {
  const cat = categories.find((c) => c.id.toString() === sp.category);
  return (
    <div className="p-5 bg-card rounded-xl w-full gap-4 flex flex-col outline outline-1 outline-card-foreground">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold tracking-wider text-3xl uppercase">
            {sp.tasks !== "all-cat"
              ? sp.tasks !== undefined
                ? sp.tasks + " Tasks"
                : "All Tasks"
              : sp.categoryName + " Tasks"}
          </h1>
          {cat && <h2>{cat.description}</h2>}
        </div>

        <Button variant={"ghost"} size={"icon"}>
          <Plus />
        </Button>
      </div>
      {/* className="grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 overflow-y-auto" */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:flex gap-4 overflow-hidden overflow-y-auto 2xl:flex-wrap">
        {true && (
          <>
            {tasks.map((task: Task) => (
              <Fragment key={task.id}>
                {sp !== undefined ? (
                  <>
                    {sp.tasks === undefined && <TaskCard task={task} />}
                    {sp.tasks === "all" && <TaskCard task={task} />}
                    {sp.tasks === "all-cat" &&
                      task.category.toString() === sp.category && (
                        <TaskCard task={task} />
                      )}
                    {sp.tasks === "important" && task.important && (
                      <TaskCard task={task} />
                    )}
                    {sp.tasks === "completed" && task.completed && (
                      <TaskCard task={task} />
                    )}
                    {sp.tasks === "incomplete" && !task.completed && (
                      <TaskCard task={task} />
                    )}
                    {sp.tasks === "overdue" &&
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
