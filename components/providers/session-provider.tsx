"use client";

import { useState } from "react";

export var session = {} as ServerSession;
export var categories = {} as Categories;
export var tasks = {} as Tasks;
export var searchParams = {} as SP;
export var refresh: boolean;
export var setRefresh: Function;

export default function SessionProv({
  serverSession,
  serverCategories,
  serverTasks,
  serverSearchParams,
}: {
  serverSession: ServerSession;
  serverCategories: Categories;
  serverTasks: Tasks;
  serverSearchParams: SP;
}) {
  const [r, setR] = useState(false);
  refresh = r;
  setRefresh = setR;
  session = serverSession;
  categories = serverCategories;
  tasks = serverTasks;
  searchParams = serverSearchParams;
  return <></>;
}
