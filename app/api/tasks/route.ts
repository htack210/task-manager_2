import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = auth()

        if (!userId) {
            return NextResponse.json({ error: "Dun-dun-Duuun! Unauthorized!", status: 401 })
        }

        const { title, description, date, completed, important } = await req.json();

        if (!title || !description || !date) {
            return NextResponse.json({ error: "Dude! We're missing required fields", status: 400 })
        }

        if (title.length < 3) {
            return NextResponse.json({
                error: "Title must be at least 3 characters long",
                status: 400,
            })
        }

        const task = await prisma.task.create({
            data: {
                title,
                description,
                date,
                isCompleted: completed,
                isImportant: important,
                userId,
            }
        })

        return NextResponse.json({ message: task + " created!" }, { status: 200 })

    } catch (error) {
        console.log("ERROR CREATING TASK:", error);
        return NextResponse.json({ error: "Error creating task" }, { status: 400 })
    }
}

export async function GET(req: Request) {
    try {

    } catch (error) {
        console.log("ERROR GETTING TASKs:", error);
        return NextResponse.json({ error: "Error getting tasks" }, { status: 404 })
    }
}

export async function PUT(req: Request) {
    try {

    } catch (error) {
        console.log("ERROR UPDATING TASK:", error);
        return NextResponse.json({ error: "Error updating task" }, { status: 400 })
    }
}

export async function DELETE(req: Request) {
    try {

    } catch (error) {
        console.log("ERROR DELETING TASK:", error);
        return NextResponse.json({ error: "Error deleting task" }, { status: 400 })
    }
}