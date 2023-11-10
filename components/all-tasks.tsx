import { Plus } from "lucide-react";
import TaskCard from "./task-card";
import { Button } from "./ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import TaskNew from "./task-new";
import { sp } from "@/app/page";
import { Fragment } from "react";

async function getTasks(email: string) {
  const response = await fetch("http://localhost:3000/api/task/" + email, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const tasks = await response.json();
    return tasks;
  }
}

export default async function AllTasks({ category }: { category: string }) {
  var loading = true;
  const session = await getServerSession(authOptions);
  const tasks = await getTasks(session?.user?.email);

  console.log(sp);

  if (tasks) {
    loading = false;
  }

  return (
    <div className="p-5 bg-card rounded-xl w-full gap-4 flex flex-col ">
      <div className="flex justify-between">
        <h1 className="font-bold tracking-wider text-3xl">All Tasks</h1>
        <Button variant={"ghost"} size={"icon"}>
          <Plus />
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4 overflow-y-auto">
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {tasks.tasks.map((task: Task) => (
              <Fragment key={task.id}>
                {sp.tasks === undefined && <TaskCard task={task} />}
                {sp.tasks === "all" && <TaskCard task={task} />}
                {sp.tasks === "important" && task.important && (
                  <TaskCard task={task} />
                )}
                {sp.tasks === "completed" && task.completed && (
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
