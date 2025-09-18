import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Assessment from "@/models/Assessment";

export async function GET() {
  await connectDB();
  const list = await Assessment.find().lean();
  return NextResponse.json(list);
}

export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const doc = await Assessment.create(body);
  return NextResponse.json(doc, { status: 201 });
}
