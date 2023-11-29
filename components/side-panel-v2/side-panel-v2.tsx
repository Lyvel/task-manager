import SidePanelNavigation from "../side-panel/side-panel-navigation";
import SidePanelProfile from "../side-panel/side-panel-profile";
import SidePanelSignout from "../side-panel/side-panel-signout";

export default function SidePanelV2() {
  return (
    <div className="bg-background lg:w-[300px] h-full xl:flex flex-col justify-between items-center hidden outline outline-1">
      <h1 className="font-extrabold text-4xl pt-6">Task Forge</h1>
    </div>
  );
}
