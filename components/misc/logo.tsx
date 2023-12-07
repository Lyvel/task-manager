"use client";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  return (
    <h1
      className="font-extrabold text-4xl pt-6 text-center cursor-pointer"
      onClick={() => router.push("/")}
    >
      Task Forge
    </h1>
  );
}
