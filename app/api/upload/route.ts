import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import formidable from "formidable";
import fs from "fs";
import path from "path";
import Evidence from "@/models/Evidence";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  await connectDB();
  const uploadDir = process.env.UPLOAD_DIR || "./uploads";
  fs.mkdirSync(uploadDir, { recursive: true });
  const form = formidable({ multiples: false, uploadDir, keepExtensions: true });
  const buf = Buffer.from(await req.arrayBuffer());
  const [fields, files] = await new Promise((resolve, reject) => {
    form.parse(buf as any, (err, fields, files) => {
      if (err) reject(err);
      else resolve([fields, files]);
    });
  }).catch(() => [null, null]);

  // fallback: just write entire body to a temp file (for environments where formidable parse may not work)
  const filename = `evidence_${Date.now()}.bin`;
  const filepath = path.join(uploadDir, filename);
  fs.writeFileSync(filepath, buf);

  const doc = await Evidence.create({ assignmentId: null, filePath: filepath });
  return NextResponse.json({ ok: true, evidence: doc });
}
