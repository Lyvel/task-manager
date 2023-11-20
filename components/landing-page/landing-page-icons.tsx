import {
  AppWindow,
  ClipboardList,
  Cog,
  Drama,
  Gamepad2,
  Layers3,
  LayoutPanelTop,
  Tv2,
} from "lucide-react";

export default function LandingPageIcons() {
  return (
    <>
      <div className="w-[64px] h-[64px] rounded-3xl border p-4 flex justify-center items-center absolute top-[138px] left-[calc(50vw-507px)] rotate-[26deg]">
        <Layers3 size={"large"} />
      </div>
      <div className="w-[64px] h-[64px] rounded-3xl border p-4 flex justify-center items-center absolute top-[349px] left-[calc(50vw-624px)] rotate-[-32deg]">
        <Cog size={"large"} />
      </div>
      <div className="w-[64px] h-[64px] rounded-3xl border p-4 flex justify-center items-center absolute top-[644px] left-[calc(50vw-541px)] rotate-[-26deg]">
        <Tv2 size={"large"} />
      </div>
      <div className="w-[64px] h-[64px] rounded-3xl border p-4 flex justify-center items-center absolute top-[878px] left-[calc(50vw-600px)] rotate-[-26deg]">
        <Drama size={"large"} />
      </div>
      <div className="w-[64px] h-[64px] rounded-3xl border p-4 flex justify-center items-center absolute top-[138px] left-[calc(50vw+443px)] rotate-[-26deg]">
        <ClipboardList size={"large"} />
      </div>
      <div className="w-[64px] h-[64px] rounded-3xl border p-4 flex justify-center items-center absolute top-[422px] left-[calc(50vw+560px)] rotate-[32deg]">
        <AppWindow size={"large"} />
      </div>
      <div className="w-[64px] h-[64px] rounded-3xl border p-4 flex justify-center items-center absolute top-[682px] left-[calc(50vw+477px)] rotate-[26deg]">
        <LayoutPanelTop size={"large"} />
      </div>
      <div className="w-[64px] h-[64px] rounded-3xl border p-4 flex justify-center items-center absolute top-[971px] left-[calc(50vw+536px)] rotate-[26deg]">
        <Gamepad2 size={"large"} />
      </div>
    </>
  );
}
