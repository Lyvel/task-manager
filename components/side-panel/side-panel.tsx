import Logo from "../misc/logo";
import SidePanelNavigation from "../side-panel/side-panel-navigation";
import SidePanelProfile from "../side-panel/side-panel-profile";
import SidePanelSignout from "../side-panel/side-panel-signout";

export default function SidePanel() {
  return (
    <div className="bg-background lg:w-[350px] h-full xl:flex flex-col justify-between items-center hidden border-r border-indigo-100  dark:border-indigo-900 px-6">
      <div className="flex flex-col w-full">
        <Logo />
        <SidePanelProfile />
        <SidePanelNavigation />
      </div>
      <SidePanelSignout />
    </div>
  );
}
