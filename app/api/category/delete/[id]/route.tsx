import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  try {
    const id = context.params.id;

    const category = await db.categories.findUnique({
      where: { id: parseInt(id) },
    });

    if (session?.user?.email !== category?.email) {
      return NextResponse.json(
        {
          message: "You don't have permission to delete these.",
          error: "ERROR",
        },
        { status: 500 }
      );
    }

    await db.categories.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({
      message: "Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "It failed",
        error: error,
      },
      { status: 500 }
    );
  }
}
