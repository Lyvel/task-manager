"use client";
import { session } from "../session-provider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function UserSettings() {
  return (
    <div className="p-5 bg-card rounded-xl w-full gap-4 flex flex-col outline outline-1 outline-card-foreground">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold tracking-wider text-3xl uppercase">
            User Settings
          </h1>
        </div>
      </div>
      <div>
        {/* <Avatar className="w-[75px] h-auto">
          <AvatarImage src={session?.user?.image as string} />
          <AvatarFallback>{session?.user?.name}</AvatarFallback>
        </Avatar> */}
      </div>
    </div>
  );
}
