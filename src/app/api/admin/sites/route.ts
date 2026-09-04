import { NextResponse } from "next/server";
import { unauthorizedIfNotAdmin, badRequest } from "@/lib/api";
import { parseSitePayload } from "@/lib/site-payload";
import { captureSitePreview } from "@/lib/screenshot";
import { getSites, upsertSite } from "@/lib/store";

export const maxDuration = 60;

export async function GET() {
  const denied = await unauthorizedIfNotAdmin();
  if (denied) return denied;
  return NextResponse.json(await getSites());
}

export async function POST(req: Request) {
  const denied = await unauthorizedIfNotAdmin();
  if (denied) return denied;
  const body = await req.json().catch(() => ({}));
  try {
    const payload = parseSitePayload(body);
    if (!payload.previewImage) {
      payload.previewImage = await captureSitePreview(payload.url);
    }
    const site = await upsertSite(payload);
    return NextResponse.json(site, { status: 201 });
  } catch (err) {
    return badRequest(err instanceof Error ? err.message : "저장에 실패했습니다.");
  }
}
