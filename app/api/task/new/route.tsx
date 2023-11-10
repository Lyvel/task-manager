import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, title, description, important, completed, completeBy } =
      body;
    const nextTask = await db.tasks.create({
      data: { email, title, description, important, completed, completeBy },
    });
    return NextResponse.json({
      message: "Task Added successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error },
      { status: 500 }
    );
  }
}
