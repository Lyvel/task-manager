import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function LandingPageNavbar() {
  return (
    <nav className="py-6 flex justify-between items-center w-[1440px] m-auto sticky top-0 bg-background">
      <h1 className="font-extrabold text-4xl">Task Forge</h1>
      <div className="flex gap-8 font-medium">
        <Link href={""} className="hover:text-primary">
          Home
        </Link>
        <Link href={""} className="hover:text-primary">
          Features
        </Link>
        <Link href={""} className="hover:text-primary">
          Team
        </Link>
        <Link href={""} className="hover:text-primary">
          Contact
        </Link>
      </div>
      <div>
        <Link
          href={""}
          className="bg-foreground text-background flex px-5 py-3 rounded-lg gap-2 hover:bg-primary"
        >
          Get Started
          <ArrowRight />
        </Link>
      </div>
    </nav>
  );
}
