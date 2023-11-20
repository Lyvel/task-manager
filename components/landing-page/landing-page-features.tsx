import Image from "next/image";
import f1 from "../../public/f1.png";
import f2 from "../../public/f2.png";
import f3 from "../../public/f3.png";

export default function LandingPageFeatures() {
  return (
    <div
      className="bg-foreground text-background dark:bg-secondary dark:text-foreground"
      id="features"
    >
      <div className="w-[1100px] m-auto pt-32 flex flex-col gap-5">
        <h1 className="text-center text-5xl font-bold">
          Unleashing the Power of Seamless Task Management
        </h1>
        <p className="text-xl text-center">
          Discover a World of Efficiency - Explore the Comprehensive Features
          That Make Task Forge the Ultimate Task Management Solution
        </p>
      </div>
      <div className="w-[1200px] m-auto py-32 grid grid-cols-3 gap-5">
        <div className="p-6 bg-background text-foreground rounded-3xl">
          <Image src={f1} width={348} height={193} alt="f1" />
          <h1 className="text-2xl font-semibold pt-4">
            Intuitive Task Creation
          </h1>
          <p className="pt-1">
            Effortlessly create, edit, and prioritize tasks with our
            user-friendly interface, ensuring a quick and seamless task
            management experience.
          </p>
        </div>
        <div className="p-6 bg-background text-foreground rounded-3xl">
          <Image src={f1} width={348} height={193} alt="f1" />
          <h1 className="text-2xl font-semibold pt-4">
            Intuitive Folder Arrangement
          </h1>
          <p className="pt-1">
            Revolutionize your digital workspace with Task Forge&apos;s
            game-changing feature — Intuitive Folder Arrangement.
          </p>
        </div>
        <div className="p-6 bg-background text-foreground rounded-3xl">
          <Image src={f1} width={348} height={193} alt="f1" />
          <h1 className="text-2xl font-semibold pt-4">
            Simple and Easy to use
          </h1>
          <p className="pt-1">
            Simplicity meets functionality with Task Forge&apos;s user-friendly
            interface. Streamlined for effortless navigation and ease of use.
          </p>
        </div>
      </div>
    </div>
  );
}
