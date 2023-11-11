"use client";
import {
  ArrowBigDown,
  CatIcon,
  Check,
  Folder,
  FolderOpen,
  Home,
  List,
  ListTree,
  Minus,
  Plus,
} from "lucide-react";
import SidePanelButton from "./side-panel-button";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { useState } from "react";

export default function SidePanelNavigation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tasks = searchParams.get("tasks");
  const category = searchParams.get("category");
  const [isOpen, setIsOpen] = useState(false);
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
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger className="w-full">
          <SidePanelButton
            current={tasks === "custom-categories"}
            title={"Custom Categories"}
            icon={isOpen ? <FolderOpen /> : <Folder />}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="max-h-[32rem] overflow-y-auto">
          <SidePanelButton
            current={category === "custom"}
            title={"Category 1"}
            icon={<Folder />}
            onClick={() => router.push("/?tasks=all-cat&category=custom")}
            className={"translate-x-5"}
            category
          />
          <SidePanelButton
            current={false}
            title={"New Category"}
            icon={<Plus />}
            className={"translate-x-5"}
          />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
