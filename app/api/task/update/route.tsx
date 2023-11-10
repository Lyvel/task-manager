import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(req) {
  const session = await getServerSession(authOptions);
  try {
    const body = await req.json();
    const { id, title, description, important, completed, completeBy } = body;

    const ownerOfTask = await db.tasks.findUnique({
      where: { id: id },
    });

    if (ownerOfTask.email !== session?.user?.email) {
      console.log("No perms");
      return NextResponse.json({
        message: "You don't have permission to edit this task.",
      });
    }

    await db.tasks.update({
      where: {
        id: id,
      },
      data: { title, description, important, completed, completeBy },
    });
    return NextResponse.json({
      message: "Task Updated successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error", error: error },
      { status: 500 }
    );
  }
}
