import { Check, Home, List, LogOut } from "lucide-react";
import SidePanelButton from "./side-panel-button";
import SidePanelProfile from "./side-panel-profile";
import SidePanelNavigation from "./side-panel-navigation";
import SidePanelSignout from "./side-panel-signout";

export default async function SidePanel() {
  return (
    <div className="bg-card rounded-xl w-[300px] h-full flex flex-col justify-between">
      <SidePanelProfile />
      <SidePanelNavigation />
      <SidePanelSignout />
    </div>
  );
}
