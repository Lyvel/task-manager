import HomePage from "@/components/home";
import LandingPage from "@/components/landing-page/landing-page";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    return <HomePage searchParams={searchParams as SP} />;
  }
  return (
    <>
      {session ? (
        <HomePage searchParams={searchParams as SP} />
      ) : (
        <LandingPage />
      )}
    </>
  );
}
