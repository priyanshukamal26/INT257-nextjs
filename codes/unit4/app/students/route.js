import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

//GET: Display students with course details
export async function GET() {
    const students =await prisma.student.findMany({
        include: {
            course: true
        }
    });
    return NextResponse.json(students);
}

//POST: Add student with foreign key
export async function POST(request) {
    const data=await request.json();
    const student=await prisma.student.create({
        data: {
            name: data.name,
            email: data.email,
            course: {
                connect: {
                    id: Number(data.courseId)
                }
            }
        },
        include: {
            course: true
        }
    });
    return NextResponse.json(student);
}