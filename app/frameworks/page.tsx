"use client";
import { useEffect, useState } from "react";

export default function FrameworksPage() {
  const [list, setList] = useState<any[]>([]);
  const [name, setName] = useState("Custom Framework");
  useEffect(() => { fetch("/api/frameworks").then(r=>r.json()).then(setList) }, []);
  async function add() {
    const res = await fetch("/api/frameworks", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ name, version: "1.0", controls: [] }) });
    const item = await res.json();
    setList(x=>[...x, item]);
  }
  return (
    <main>
      <h2>Frameworks</h2>
      <div style={{ display: "flex", gap: 8 }}>
        <input value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={add}>Add</button>
      </div>
      <ul>
        {list.map(f => <li key={f._id}>{f.name} {f.version ? `(${f.version})` : ""}</li>)}
      </ul>
    </main>
  )
}
