import Image from "next/image";
import boc1 from "../../public/boc1.png";
import si1 from "../../public/si1.png";
import si2 from "../../public/si2.png";

export default function LandingPageWhyUs() {
  return (
    <div className="flex w-[1100px] flex-col m-auto pt-24">
      <h1 className="text-5xl font-bold text-center leading-[1.3]">
        Unveiling Task Forge, Your Ultimate Task Management Solution for Peak
        Productivity
      </h1>
      <p className="pt-2 text-center text-xl font-light">
        Elevate Your Projects with OrganizeHub: The Ultimate Task Management
        Solution for Seamless Organization, Enhanced Collaboration, and
        Unmatched Productivity
      </p>
      <div className="flex flex-col gap-12 py-16">
        <div className="bg-secondary rounded-lg p-10 flex justify-between">
          <div className="flex flex-col justify-center gap-4 w-[492px]">
            <h1 className="text-4xl font-semibold">Efficiency Amplified</h1>
            <p className="leading-snug">
              Maximize your productivity with Task Forge&apos;s powerful
              features. From task prioritization to collaborative project
              management, every aspect is crafted to amplify efficiency and
              streamline your workflow.
            </p>
          </div>
          <Image src={boc1} width={495} height={346} alt="si1" />
        </div>
        <div className="bg-background rounded-lg p-10 flex justify-between">
          <Image src={si1} width={476} height={346} alt="Boc1" />
          <div className="flex flex-col justify-center gap-4 w-[492px]">
            <h1 className="text-4xl font-semibold">Customizable Workflows</h1>
            <p className="leading-snug">
              Tailor Task Forge to fit your unique work style. Our customizable
              workflows empower you to adapt the platform to your specific
              needs, ensuring a personalized and efficient task management
              experience.
            </p>
          </div>
        </div>
        <div className="bg-secondary rounded-lg p-10 flex justify-between">
          <div className="flex flex-col justify-center gap-4 w-[492px]">
            <h1 className="text-4xl font-semibold">Time Management Mastery</h1>
            <p className="leading-snug">
              Make control of your time like never before. Task Forge&apos;s
              time management features empower you to set realistic deadlines,
              track progress, and ensure timely completion of tasks
            </p>
          </div>
          <Image src={si2} width={417} height={346} alt="si2" />
        </div>
      </div>
    </div>
  );
}
