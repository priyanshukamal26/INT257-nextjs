import { NextResponse } from "next/server";
export async function GET() {
    const response=NextResponse.json({
    message: "Cookie stored successfully"});
    response.cookies.set("username", "NextJSClass",);
    response.cookies.set("year", "2026");
};