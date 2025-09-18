import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export type SessionUser = {
  _id: string;
  email: string;
  role: string;
  orgId?: string;
}

export function signToken(user: SessionUser) {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "7d" });
}

export async function getSessionUser(): Promise<SessionUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth")?.value;
    if (!token) return null;
    const decoded = jwt.verify(token, JWT_SECRET) as SessionUser;
    return decoded;
  } catch {
    return null;
  }
}
