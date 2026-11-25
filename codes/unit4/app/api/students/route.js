import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Display all students
export async function GET() {
  try {
    const students = await prisma.student.findMany();
    return NextResponse.json(students);
  } catch (error) {
    console.error("Failed to fetch students:", error);
    return NextResponse.json(
      { error: "Failed to fetch students" },
      { status: 500 }
    );
  }
}
// POST: Create a student
export async function POST(request) {
  try {
    const { name, email, course } = await request.json();

    if (!name || !email || !course) {
      return NextResponse.json(
        { error: "Name, email, and course are required" },
        { status: 400 }
      );
    }

    const student = await prisma.student.create({
      data: { name, email, course },
    });

    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error("Failed to create student:", error);
    return NextResponse.json(
      { error: "Failed to create student" },
      { status: 500 }
    );
  }
}
 