"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTheme } from "next-themes";

export default function LandingPageNavbar() {
  const { setTheme } = useTheme();
  return (
    <nav className="py-6 w-screen m-auto sticky top-0 bg-background">
      <div className="flex justify-between items-center w-[1200px] m-auto">
        <h1 className="font-extrabold text-4xl">Task Forge</h1>
        <div className="flex gap-8 font-medium">
          <Link href={""} className="hover:text-primary">
            Home
          </Link>
          <Link
            href={""}
            onClick={() => setTheme("light")}
            className="hover:text-primary"
          >
            Features
          </Link>
          <Link
            href={""}
            onClick={() => setTheme("dark")}
            className="hover:text-primary"
          >
            Team
          </Link>
          <Link href={""} className="hover:text-primary">
            Contact
          </Link>
        </div>
        <div>
          <Link
            href={""}
            onClick={() => signIn("google")}
            className="bg-foreground text-background flex px-5 py-3 rounded-lg gap-2 hover:bg-primary"
          >
            Get Started
            <ArrowRight />
          </Link>
        </div>
      </div>
    </nav>
  );
}
