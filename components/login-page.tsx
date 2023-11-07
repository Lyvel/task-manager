"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function LoginPage() {
  return (
    <div className="flex w-[800px] m-auto justify-center h-[90vh] items-center">
      <Button onClick={() => signIn("google")}>Sign in with Google.</Button>
    </div>
  );
}
