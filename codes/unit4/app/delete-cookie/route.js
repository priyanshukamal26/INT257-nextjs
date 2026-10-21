import { NextResponse } from "next/server";

export async function GET() {
    const c=await cookie();
    c.delete("username");
    c.delete("course");
    c.delete("year");
    return NextResponse.json({
        message: "cookie deleted"
    })
}