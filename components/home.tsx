import { getServerSession } from "next-auth";
import AllTasks from "./all-tasks";
import SessionProv from "./session";
import SidePanel from "./side-panel/side-panel";
import { authOptions } from "@/lib/auth";
import { sp } from "@/app/page";
import { db } from "@/lib/db";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  const categories = await db.categories.findMany({
    where: {
      email: {
        equals: session?.user?.email,
      },
    },
  });
  const tasks = await db.tasks.findMany({
    where: {
      email: {
        equals: session?.user?.email,
      },
    },
  });

  return (
    <div className="h-screen flex p-4 gap-4">
      <SessionProv
        serverSession={session as ServerSession}
        serverCategories={categories as Categories}
        serverTasks={tasks as Tasks}
      />
      <SidePanel />
      <AllTasks sp={sp} />
    </div>
  );
}
