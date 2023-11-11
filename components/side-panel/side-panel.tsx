import { ArrowBigRight, Check, Home, List, LogOut, Menu } from "lucide-react";
import SidePanelButton from "./side-panel-button";
import SidePanelProfile from "./side-panel-profile";
import SidePanelNavigation from "./side-panel-navigation";
import SidePanelSignout from "./side-panel-signout";
import { useState } from "react";
import { Button } from "../ui/button";

export default function SidePanel() {
  var menuVisible = false;
  return (
    <>
      <div className="bg-card rounded-xl lg:w-[300px] h-full lg:flex flex-col justify-between hidden">
        <SidePanelProfile />
        <SidePanelNavigation />
        <SidePanelSignout />
      </div>
      <div className="lg:hidden bg-card w-[50px] h-[50px] outline outline-1 outline-card-foreground rounded-xl flex justify-center items-center absolute top-24 -left-3">
        <Button size={"icon"}>
          <Menu width={25} height={25} />
        </Button>
      </div>
      {menuVisible && (
        <div className="bg-card rounded-xl w-[300px] h-full flex flex-col justify-between">
          <SidePanelProfile />
          <SidePanelNavigation />
          <SidePanelSignout />
        </div>
      )}
    </>
  );
}
