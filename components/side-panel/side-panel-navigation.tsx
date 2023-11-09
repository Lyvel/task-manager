"use client";
import { Check, Home, List } from "lucide-react";
import SidePanelButton from "./side-panel-button";
import { useRouter } from "next/navigation";

export default function SidePanelNavigation() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full">
      <SidePanelButton
        current
        title={"All Tasks"}
        icon={<Home />}
        onClick={() => router.push("/")}
      />
      <SidePanelButton
        current={false}
        title={"Important"}
        icon={<List />}
        onClick={() => router.push("/")}
      />
      <SidePanelButton
        current={false}
        title={"Completed"}
        icon={<Check />}
        onClick={() => router.push("/")}
      />
    </div>
  );
}
