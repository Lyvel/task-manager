"use client";
import { Plus } from "lucide-react";
import TaskCard from "./task-card";
import { Button } from "./ui/button";
import TaskNew from "./task-new";
import { Fragment, useEffect, useState } from "react";
import { session } from "./session";

async function getTasks(email: string) {
  const response = await fetch("/api/task/" + email, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const tasks = await response.json();
    return tasks;
  }
}

export default function AllTasks({ sp }: { sp: SP }) {
  const [tasks, setTasks] = useState<Tasks>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks(session.serverSession.user.email);
      setTasks(tasks);
      setLoading(false);
    };
    fetchTasks().catch(console.error);
  }, []);

  return (
    <div className="p-5 bg-card rounded-xl w-full gap-4 flex flex-col outline outline-1 outline-card-foreground">
      <div className="flex justify-between">
        <h1 className="font-bold tracking-wider text-3xl">All Tasks</h1>
        <Button variant={"ghost"} size={"icon"}>
          <Plus />
        </Button>
      </div>
      <div className="grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 overflow-y-auto">
        {!loading && (
          <>
            {tasks?.tasks.map((task: Task) => (
              <Fragment key={task.id}>
                {sp !== undefined ? (
                  <>
                    {sp.tasks === undefined && <TaskCard task={task} />}
                    {sp.tasks === "all" && <TaskCard task={task} />}
                    {sp.tasks === "important" && task.important && (
                      <TaskCard task={task} />
                    )}
                    {sp.tasks === "completed" && task.completed && (
                      <TaskCard task={task} />
                    )}
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
