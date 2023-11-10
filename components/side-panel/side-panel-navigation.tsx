"use client";
import { Check, Home, List } from "lucide-react";
import SidePanelButton from "./side-panel-button";
import { useRouter, useSearchParams } from "next/navigation";

export default function SidePanelNavigation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tasks = searchParams.get("tasks");
  return (
    <div className="flex flex-col w-full">
      <SidePanelButton
        current={tasks === "all" || tasks === null}
        title={"All Tasks"}
        icon={<Home />}
        onClick={() => router.push("/?tasks=all")}
      />
      <SidePanelButton
        current={tasks === "important"}
        title={"Important"}
        icon={<List />}
        onClick={() => router.push("/?tasks=important")}
      />
      <SidePanelButton
        current={tasks === "completed"}
        title={"Completed"}
        icon={<Check />}
        onClick={() => router.push("/?tasks=completed")}
      />
    </div>
  );
}
