"use client";
import { Check, Folder, FolderOpen, Home, List, Plus } from "lucide-react";
import SidePanelButton from "./side-panel-button";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { useEffect, useState } from "react";
import CategoryNew from "../category-new";
import { refresh, session } from "../session";

export async function getCategories(email: string) {
  const response = await fetch("/api/category/" + email, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const categories = await response.json();
    return categories;
  }
}

export default function SidePanelNavigation() {
  const [categories, setCategories] = useState<Categories>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategories = async () => {
      const tasks = await getCategories(session.serverSession.user.email);
      setCategories(tasks);
      setLoading(false);
    };
    fetchCategories().catch(console.error);
  }, [refresh]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const tasks = searchParams.get("tasks");
  const category = searchParams.get("category");
  const [isOpen, setIsOpen] = useState(false);
  const [showNewCat, setShowNewCat] = useState(false);
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
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full z-0"
      >
        <CollapsibleTrigger className="w-full">
          <SidePanelButton
            current={tasks === "custom-categories"}
            title={"Custom Categories"}
            icon={isOpen ? <FolderOpen /> : <Folder />}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="max-h-[32rem] overflow-y-auto overflow-x-hidden">
          {!loading && (
            <>
              {categories?.categories.map((cat: Category) => (
                <SidePanelButton
                  key={cat.id}
                  current={category === cat.id.toString()}
                  title={cat.title}
                  icon={<Folder />}
                  onClick={() =>
                    router.push(
                      "/?tasks=all-cat&category=" +
                        cat.id +
                        "&categoryName=" +
                        cat.title
                    )
                  }
                  className={"translate-x-5"}
                  category={cat}
                />
              ))}
            </>
          )}
          <SidePanelButton
            current={false}
            title={"New Category"}
            icon={<Plus />}
            className={"translate-x-5"}
            onClick={() => setShowNewCat(true)}
          />
        </CollapsibleContent>
      </Collapsible>
      {showNewCat && <CategoryNew show={setShowNewCat} newCategory />}
    </div>
  );
}
