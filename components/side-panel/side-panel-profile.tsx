"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { searchParams, session } from "../session";
import { useRouter } from "next/navigation";

export default function SidePanelProfile() {
  const router = useRouter();
  return (
    <>
      {session ? (
        <div
          className={`m-10 flex gap-4 justify-center items-center hover:bg-muted p-2 rounded-lg hover:cursor-pointer ${
            searchParams.settings === "" && "bg-muted"
          }`}
          onClick={() => router.push("/?settings=")}
        >
          <Avatar className="w-[75px] h-auto">
            <AvatarImage src={session?.user?.image as string} />
            <AvatarFallback>{session?.user?.name}</AvatarFallback>
          </Avatar>
          <h1 className="text-xl line-clamp-2">{session?.user?.name}</h1>
        </div>
      ) : (
        <div>FAILED</div>
      )}
    </>
  );
}
