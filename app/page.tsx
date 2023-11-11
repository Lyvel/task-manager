import HomePage from "@/components/home";
import LoginPage from "@/components/login-page";
import { ModeToggle } from "@/components/theme-toggle";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export var sp: SP;

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  sp = searchParams as SP;
  const session = await getServerSession(authOptions);
  if (session) {
    return <HomePage />;
  }
  return (
    <main>
      <ModeToggle />
      <LoginPage />
    </main>
  );
}
