import AllTasks from "./all-tasks";
import SidePanel from "./side-panel";

export default function HomePage() {
  return (
    <div className="h-full flex p-10 gap-4">
      <SidePanel />
      <AllTasks />
    </div>
  );
}
