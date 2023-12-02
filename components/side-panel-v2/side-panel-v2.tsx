import Logo from "../logo";
import SidePanelNavigation from "../side-panel/side-panel-navigation";
import SidePanelProfile from "../side-panel/side-panel-profile";
import SidePanelSignout from "../side-panel/side-panel-signout";

export default function SidePanelV2() {
  return (
    <div className="bg-background lg:w-[300px] h-full xl:flex flex-col justify-between items-center hidden border-r border-indigo-100 px-6">
      <span className="flex flex-col w-full">
        <Logo />
        <SidePanelProfile />
        <SidePanelNavigation />
      </span>
      <SidePanelSignout />
    </div>
  );
}
