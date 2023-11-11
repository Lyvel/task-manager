import { getServerSession } from "next-auth";
import AllTasks from "./all-tasks";
import SessionProv from "./session";
import SidePanel from "./side-panel/side-panel";
import { authOptions } from "@/lib/auth";
import { sp } from "@/app/page";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-screen flex p-4 lg:p-10 gap-4">
      <SessionProv serverSession={session as ServerSession} />
      <SidePanel />
      <AllTasks sp={sp} />
    </div>
  );
}
