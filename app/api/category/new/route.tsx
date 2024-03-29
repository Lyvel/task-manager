import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, title, description, colour } = body;
    const nextTask = await db.categories.create({
      data: { email, title, description, colour },
    });
    return NextResponse.json({
      message: "Category Added successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error },
      { status: 500 }
    );
  }
}
