import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  await connectDB();
  const { email, password } = await req.json();
  const user = await User.findOne({ email });
  if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const valid = await bcrypt.compare(password || "", user.passwordHash || "");
  if (!valid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const token = signToken({ _id: String(user._id), email: user.email, role: user.role, orgId: user.orgId ? String(user.orgId) : undefined });
  const res = NextResponse.json({ ok: true });
  res.cookies.set("auth", token, { httpOnly: true, path: "/" });
  return res;
}
