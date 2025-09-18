import { getSessionUser } from "./auth";

export async function requireRole(roles: string[]) {
  const user = await getSessionUser();
  if (!user || !roles.includes(user.role)) {
    throw new Error("Forbidden");
  }
  return user;
}
