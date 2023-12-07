"use client";
import { LogOut, Settings } from "lucide-react";
import SidePanelButton from "./side-panel-button";
import { signOut } from "next-auth/react";

export default function SidePanelSignout() {
  return (
    <div className="flex flex-col w-full mb-10">
      <SidePanelButton
        current={false}
        title={"Settings"}
        icon={<Settings />}
        onClick={() => {
          console.log("Settings");
        }}
      />
      <SidePanelButton
        current={false}
        title={"Log Out"}
        icon={<LogOut />}
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      />
    </div>
  );
}
