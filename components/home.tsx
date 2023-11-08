import AllTasks from "./all-tasks";

export default function HomePage() {
  return (
    <div className="h-full flex p-10 gap-4">
      <div className="p-10 bg-card rounded-xl w-[300px]">Side Panel</div>
      <AllTasks />
    </div>
  );
}
