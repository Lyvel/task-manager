import { Plus } from "lucide-react";
import TaskCard from "./task-card";
import { Button } from "./ui/button";

export default function AllTasks({ category }: { category: string }) {
  return (
    <div className="p-5 bg-card rounded-xl w-full gap-4 flex flex-col ">
      <div className="flex justify-between">
        <h1 className="font-bold tracking-wider text-3xl">All Tasks</h1>
        <Button variant={"ghost"} size={"icon"}>
          <Plus />
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4 overflow-y-scroll">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}
