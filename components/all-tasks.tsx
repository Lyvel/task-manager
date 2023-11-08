import TaskCard from "./task-card";

export default function AllTasks() {
  return (
    <div className="p-5 bg-card rounded-xl w-full gap-4 flex flex-col">
      <h1 className="font-bold tracking-wider text-3xl">All Tasks</h1>
      <div className="grid grid-cols-4 gap-4">
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
