"use client";

import { useState } from "react";

export var session = {} as Session;
export var refresh: boolean;
export var setRefresh: Function;

export default function SessionProv(serverSession: Session) {
  const [r, setR] = useState(false);
  refresh = r;
  setRefresh = setR;
  session = serverSession;
  return <></>;
}
