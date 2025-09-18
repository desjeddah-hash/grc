"use client";
import { useEffect, useState } from "react";

export default function AssessmentsPage() {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => { fetch("/api/assessments").then(r=>r.json()).then(setList) }, []);
  return (
    <main>
      <h2>Assessments</h2>
      <ul>
        {list.map(a => <li key={a._id}>{a.title} — {a.status}</li>)}
      </ul>
    </main>
  )
}
