import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import SessionProv from "./providers/session-provider";
import SidePanel from "./side-panel/side-panel";
import AllTasks from "./task/all-tasks";

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
    orderBy: {
      completeBy: "desc",
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
      <SidePanel />
      <AllTasks />
      {/* {searchParams.settings === "" ? <UserSettings /> : <AllTasks />} */}
    </div>
  );
}
