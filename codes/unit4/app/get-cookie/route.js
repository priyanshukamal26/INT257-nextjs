import {cookies} from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const c=await cookies();
    return NextResponse.json({
        username:c.get("username"),
        course:c.get("course"),
        year:c.get("year")
    })
}