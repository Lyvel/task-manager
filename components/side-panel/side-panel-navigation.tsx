"use client";
import {
  AlertCircle,
  Check,
  CheckSquare,
  Folder,
  FolderOpen,
  Home,
  List,
  Plus,
  Square,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { categories } from "../providers/session-provider";
import CategoryNew from "../task/category-new";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import SidePanelButton from "./side-panel-button";

export default function SidePanelNavigation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tasks = searchParams.get("tasks");
  const category = searchParams.get("category");
  const [isOpen, setIsOpen] = useState(false);
  const [showNewCat, setShowNewCat] = useState(false);
  return (
    <div className="flex flex-col w-full pt-6">
      <SidePanelButton
        current={
          tasks === "all" ||
          (tasks === null && searchParams.get("settings") === null)
        }
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
        current={tasks === "incomplete"}
        title={"Incomplete"}
        icon={<Square />}
        onClick={() => router.push("/?tasks=incomplete")}
      />
      <SidePanelButton
        current={tasks === "completed"}
        title={"Completed"}
        icon={<CheckSquare />}
        onClick={() => router.push("/?tasks=completed")}
      />
      <SidePanelButton
        current={tasks === "overdue"}
        title={"Overdue"}
        icon={<AlertCircle />}
        onClick={() => router.push("/?tasks=overdue")}
      />
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full z-0"
      >
        <CollapsibleTrigger className="w-full">
          <SidePanelButton
            current={tasks === "custom-categories"}
            title={"Categories"}
            icon={isOpen ? <FolderOpen /> : <Folder />}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="max-h-[32rem] overflow-y-auto overflow-x-hidden">
          {true && (
            <>
              {categories.map((cat: Category) => (
                <SidePanelButton
                  key={cat.id}
                  current={category === cat.id.toString()}
                  title={cat.title}
                  icon={<Folder color={cat.colour} />}
                  onClick={() =>
                    router.push("/?tasks=all-cat&category=" + cat.id)
                  }
                  category={cat}
                />
              ))}
            </>
          )}
          <SidePanelButton
            current={false}
            title={"Add New Category"}
            icon={<Plus />}
            className="pl-6 hover:bg-muted text-sm"
            onClick={() => setShowNewCat(true)}
          />
        </CollapsibleContent>
      </Collapsible>
      {showNewCat && <CategoryNew show={setShowNewCat} newCategory />}
    </div>
  );
}
