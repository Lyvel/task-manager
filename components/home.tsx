import { getServerSession } from "next-auth";
import AllTasks from "./all-tasks";
import SessionProv from "./session";
import SidePanel from "./side-panel/side-panel";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import UserSettings from "./user/user-settings";

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

  console.log(searchParams);

  return (
    <div className="h-screen flex p-4 gap-4">
      <SessionProv
        serverSession={session as ServerSession}
        serverCategories={categories as Categories}
        serverTasks={tasks as Tasks}
        serverSearchParams={searchParams}
      />
      <SidePanel />
      {searchParams.settings === "" ? <UserSettings /> : <AllTasks />}
    </div>
  );
}
