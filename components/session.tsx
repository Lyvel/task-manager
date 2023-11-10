"use client";
import { Session } from "next-auth";

export var session = {} as Session;

export default function SessionProv(serverSession: Session) {
  session = serverSession;
  return <></>;
}
