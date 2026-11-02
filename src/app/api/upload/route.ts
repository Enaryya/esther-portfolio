import { put, list, del } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const slot = (formData.get("slot") as string) || "hero";

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  // Delete any existing photo for this slot
  const { blobs } = await list({ prefix: `portfolio/${slot}/` });
  await Promise.all(blobs.map((b) => del(b.url)));

  // Upload new photo public so the URL is directly accessible
  const blob = await put(`portfolio/${slot}/${Date.now()}-${file.name}`, file, {
    access: "public",
    contentType: file.type,
  });

  return NextResponse.json({ url: blob.url });
}
