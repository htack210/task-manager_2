
import prisma from "../../../utils/connect";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"


export async function DELETE(res: Request,
    { params }: { params: { id: string } }) {
    try {

        const { userId } = auth();
        const { id } = params;

        if (!userId)
            return NextResponse.json({ error: "Dun-dun-DUUUUUN! Unauthorized.", status: 401 })

        const task = await prisma.task.delete({
            where: { id },
        },
        );
        console.log("TASK DELETED: ", task)
        return NextResponse.json(task);
    } catch (error) {
        console.log("ERROR deleting task.", error)
        return NextResponse.json({ error: "ERROR deleting task", status: 500 })
    }
}

export async function GET(res: Request,
    { params }: { params: { id: string } }) {
    try {

        const { userId } = auth();
        const { id } = params;

        if (!userId)
            return NextResponse.json({ error: "Dun-dun-DUUUUUN! Unauthorized.", status: 401 })

        const task = await prisma.task.findUnique({
            where: { id, userId },
        },
        );
        console.log("Found Task: ", task)
        return NextResponse.json(task);
    } catch (error) {
        console.log("ERROR Task not found.", error)
        return NextResponse.json({ error: "ERROR task not found", status: 500 })
    }

    // export async function GET(req: Request) {
    //     try {
    //         const { userId } = auth();

    //         if (!userId) {
    //             return NextResponse.json({ error: "Unauthorized", status: 401 });
    //         }

    //         const tasks = await prisma.task.findMany({
    //             where: {
    //                 userId,
    //             },
    //         });

    //         console.log("TASKS: ", tasks);
    //         return NextResponse.json(tasks);
    //     } catch (error) {
    //         console.log("ERROR GETTING TASKS: ", error);
    //         return NextResponse.json({ error: "Error getting tasks", status: 500 });
    //     }

}