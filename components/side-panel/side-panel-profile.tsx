"use client";
import { useRouter } from "next/navigation";
import { searchParams, session } from "../providers/session-provider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function SidePanelProfile() {
  const router = useRouter();
  return (
    <>
      {session ? (
        <div className={`mt-4 flex gap-4 items-center `}>
          <Avatar className="w-[75px] h-auto">
            <AvatarImage src={session?.user?.image as string} />
            <AvatarFallback>{session?.user?.name}</AvatarFallback>
          </Avatar>
          <h1 className="font-semibold line-clamp-2">{session?.user?.name}</h1>
        </div>
      ) : (
        <div>FAILED</div>
      )}
    </>
  );
}
