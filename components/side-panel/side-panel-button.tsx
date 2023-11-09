"use client";

export default function SidePanelButton({
  current,
  title,
  icon,
  onClick,
}: {
  current: boolean;
  title: string;
  icon: any;
  onClick: any;
}) {
  return (
    <div
      className={
        "flex gap-4 justify-between w-full pl-10 hover:bg-muted hover:cursor-pointer" +
        (current ? " bg-muted" : "")
      }
      onClick={onClick}
    >
      <div className="flex gap-4 justify-center items-center py-2">
        {icon}
        <h1>{title}</h1>
      </div>
      {current ? <div className="h-full w-[2px] bg-green-500"></div> : <></>}
    </div>
  );
}
