import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Framework from "@/models/Framework";

export async function GET() {
  await connectDB();
  const list = await Framework.find().lean();
  return NextResponse.json(list);
}

export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const doc = await Framework.create(body);
  return NextResponse.json(doc, { status: 201 });
}
