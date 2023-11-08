import { getServerSession } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { authOptions } from "@/lib/auth";

export default async function SidePanel() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-10 bg-card rounded-xl w-[300px]">
      <div className="flex gap-4 justify-center items-center hover:bg-muted p-2 rounded-lg hover:cursor-pointer">
        <Avatar className="w-[75px] h-auto">
          <AvatarImage src={session?.user?.image as string} />
          <AvatarFallback>{session?.user?.name}</AvatarFallback>
        </Avatar>
        <h1 className="text-xl line-clamp-2">{session?.user?.name}</h1>
      </div>
    </div>
  );
}
