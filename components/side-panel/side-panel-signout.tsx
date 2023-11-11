"use client";
import { LogOut } from "lucide-react";
import SidePanelButton from "./side-panel-button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SidePanelSignout() {
  const router = useRouter();
  return (
    <div className="flex w-full mb-10">
      <SidePanelButton
        current={false}
        title={"Sign Out"}
        icon={<LogOut />}
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      />
    </div>
  );
}
