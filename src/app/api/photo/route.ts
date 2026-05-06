import { list } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slot = searchParams.get("slot") || "hero";

  const { blobs } = await list({ prefix: `portfolio/${slot}/` });
  const url = blobs[0]?.url ?? null;

  return NextResponse.json({ url }, {
    headers: { "Cache-Control": "no-store" },
  });
}
