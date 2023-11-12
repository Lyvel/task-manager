"use client";

import { useState } from "react";

export var session = {} as ServerSession;
export var categories = {} as Categories;
export var tasks = {} as Tasks;
export var refresh: boolean;
export var setRefresh: Function;

export default function SessionProv({
  serverSession,
  serverCategories,
  serverTasks,
}: {
  serverSession: ServerSession;
  serverCategories: Categories;
  serverTasks: Tasks;
}) {
  const [r, setR] = useState(false);
  refresh = r;
  setRefresh = setR;
  session = serverSession;
  categories = serverCategories;
  tasks = serverTasks;
  return <></>;
}
