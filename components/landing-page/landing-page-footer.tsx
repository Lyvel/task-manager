import Link from "next/link";

export default function LandingPageFooter() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 my-16">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="font-extrabold text-4xl">Task Forge</h1>
        <h2 className="text-center text-gray-500">
          Streamline Your Tasks, Boost Productivity:
          <br /> Your Central Hub for Effortless Organization
        </h2>
      </div>
      <ul className="flex gap-8 text-sm font-medium">
        <li>
          <Link href={"/"} className="hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <Link href={"#features"} className="hover:text-primary">
            Features
          </Link>
        </li>
        <li>
          <Link href={"/"} className="hover:text-primary">
            Team
          </Link>
        </li>
        <li>
          <Link href={"/"} className="hover:text-primary">
            Contact Us
          </Link>
        </li>
      </ul>
      <h2 className="text-center text-gray-500 font-light">
        © 2023 Task Forge. All rights reserved.
      </h2>
    </div>
  );
}
