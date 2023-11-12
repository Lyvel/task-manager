import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  try {
    const body = await req.json();
    const { id, title, description, colour } = body;

    const ownerOfTask = await db.categories.findUnique({
      where: { id: id },
    });

    if (ownerOfTask?.email !== session?.user?.email) {
      console.log("No perms");
      return NextResponse.json({
        message: "You don't have permission to edit this task.",
      });
    }

    await db.categories.update({
      where: {
        id: id,
      },
      data: { title, description, colour },
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
