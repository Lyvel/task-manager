"use client";
import { Plus, Search } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import {
  categories,
  refresh,
  searchParams,
  session,
  tasks,
} from "../providers/session-provider";
import { Button } from "../ui/button";
import TaskCard from "./task-card";
import TaskNew from "./task-new";

export default function AllTasks() {
  const cat = categories.find((c) => c.id.toString() === searchParams.category);
  return (
    <div className=" bg-muted w-full flex flex-col ">
      <div className="flex justify-between h-fit bg-card py-6 px-8 border-b border-indigo-100 dark:border-indigo-900">
        <div className="bg-muted flex gap-3 py-2 px-3 w-[360px] rounded-full text-slate-400 items-center cursor-text">
          <Search size={20} />
          Search
          {/* <h1 className="font-bold tracking-wider text-3xl uppercase">
            {searchParams.tasks !== "all-cat"
              ? searchParams.tasks !== undefined
                ? searchParams.tasks + " Tasks"
                : "All Tasks"
              : categories.find(
                  ({ id }) => id.toString() === searchParams.category
                )?.title + " Tasks"}
          </h1>
          {cat && <h2>{cat.description}</h2>} */}
        </div>

        <TaskNew />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 overflow-hidden overflow-y-auto p-8">
        <>
          {tasks.map((task: Task) => (
            <Fragment key={task.id}>
              {searchParams !== undefined ? (
                <>
                  {searchParams.tasks === undefined && <TaskCard task={task} />}
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
        {/* <TaskNew /> */}
      </div>
    </div>
  );
}
