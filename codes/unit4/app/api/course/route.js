import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

//Add course
export async function POST(request) {
    const data=await request.json();
    const course=await prisma.course.create({
        data: {
            name: data.name
        }
    });
    return NextResponse.json(course);
}

//Display courses
export async function GET(){
    const courses=await prisma.course.findMany();
    return NextResponse.json(courses);
}