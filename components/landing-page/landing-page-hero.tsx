import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPageHero() {
  return (
    <div className="lg:w-[1100px] m-auto flex flex-col justify-center items-center gap-4 pt-32 px-4 lg:px-0">
      <div className="flex bg-secondary rounded-full justify-center items-center gap-2.5 px-3 py-2">
        <h1 className="bg-primary text-white px-2 py-1 rounded-full">New</h1>
        <h1>Introducing Task Forge</h1>
      </div>
      <h1 className="text-[32px] lg:text-6xl font-extrabold text-center w-full leading-[1.3]">
        Empowering Productivity Through Seamless Task Management
      </h1>
      <p className="leading-7 lg:text-xl text-center font-light">
        Unlock Your Full Potential with Task Forge - A Comprehensive Task
        Management Solution Tailored to Elevate Your Efficiency, Streamline
        Workflows, and Transform Chaos into Coherent Productivity for
        Individuals and Teams
      </p>
      <div className="flex gap-4 pt-16">
        <Link
          href={""}
          className="bg-foreground text-background flex px-5 py-3 rounded-lg gap-2 hover:bg-primary"
        >
          Get Started
          <ArrowRight />
        </Link>
        <Link
          href={""}
          className="outline-foreground outline outline-1 flex px-5 py-3 rounded-lg gap-2 hover:bg-secondary-foreground hover:text-secondary"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
