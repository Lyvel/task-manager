import { getServerSession } from "next-auth";
import AllTasks from "./all-tasks";
import SessionProv from "./session-provider";
import SidePanel from "./side-panel/side-panel";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import UserSettings from "./user/user-settings";
import SidePanelV2 from "./side-panel-v2/side-panel-v2";

export default async function HomePage({ searchParams }: { searchParams: SP }) {
  const session = await getServerSession(authOptions);

  const email = session?.user?.email || "";
  const categories = await db.categories.findMany({
    where: {
      email: {
        equals: email,
      },
    },
  });
  const tasks = await db.tasks.findMany({
    where: {
      email: {
        equals: email,
      },
    },
  });

  return (
    <div className="h-screen flex">
      <SessionProv
        serverSession={session as ServerSession}
        serverCategories={categories as Categories}
        serverTasks={tasks as Tasks}
        serverSearchParams={searchParams}
      />
      <SidePanelV2 />
      <AllTasks />
      {/* {searchParams.settings === "" ? <UserSettings /> : <AllTasks />} */}
    </div>
  );
}
