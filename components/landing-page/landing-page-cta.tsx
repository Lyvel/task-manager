import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPageCTA() {
  return (
    <div className="bg-cta-pattern w-screen bg-cover bg-no-repeat text-white flex justify-center items-center flex-col py-14 lg:py-20 gap-8">
      <h1 className="text-center text-[32px] lg:text-6xl font-extrabold">
        Ready to Transform Your Workflow?
      </h1>
      <p className="leading-7 text-xl text-center lg:w-[1100px]">
        Take the First Step with Task Forge and Experience Effortless Task
        Management. Join Now for a Smoother, More Productive Tomorrow.
      </p>
      <Link
        href={""}
        className="bg-background text-foreground flex px-5 py-3 mt-8 lg:mt-0 rounded-lg gap-2 hover:text-primary"
      >
        Get Started
        <ArrowRight />
      </Link>
    </div>
  );
}
