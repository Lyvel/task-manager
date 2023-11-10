import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  context: { params: { id: string } }
) {
  // const session = await getServerSession(authOptions);
  try {
    const id = context.params.id;

    // console.log(session + ":::" + id);

    // if (session?.user?.email !== id) {
    //   return NextResponse.json(
    //     {
    //       message: "You don't have permission to access these.",
    //       error: "ERROR",
    //     },
    //     { status: 500 }
    //   );
    // }

    const tasks = await db.tasks.findMany({
      where: {
        email: {
          equals: id,
        },
      },
      orderBy: {
        completeBy: "asc",
      },
    });

    return NextResponse.json({
      tasks: tasks,
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
