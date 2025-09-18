import { getSessionUser } from "@/lib/auth";
import Link from "next/link";

export default async function DashboardPage() {
  const user = await getSessionUser();
  return (
    <main>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Signed in as <b>{user.email}</b> (role: <b>{user.role}</b>)</p>
          <ul>
            <li><Link href="/admin">Admin</Link></li>
            <li><Link href="/org">Organizations</Link></li>
            <li><Link href="/frameworks">Frameworks</Link></li>
            <li><Link href="/assessments">Assessments</Link></li>
            <li><Link href="/controls">Controls</Link></li>
            <li><Link href="/evidence">Evidence</Link></li>
          </ul>
        </div>
      ) : (
        <p>Please <a href="/auth/login">login</a>.</p>
      )}
    </main>
  )
}
