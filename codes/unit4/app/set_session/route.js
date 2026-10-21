import {setSession} from "@/lib/session";
import {NextResponse} from "next/server";

export async function GET() {
    setSession("Mickey");
    return NextResponse.json({message: "Session Stored Successfully"})
}