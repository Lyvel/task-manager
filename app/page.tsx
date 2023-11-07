import HomePage from "@/components/home";
import LoginPage from "@/components/login-page";
import { ModeToggle } from "@/components/theme-toggle";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
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
