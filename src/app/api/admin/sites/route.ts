import { NextResponse } from "next/server";
import { unauthorizedIfNotAdmin, badRequest } from "@/lib/api";
import { parseSitePayload } from "@/lib/site-payload";
import { getSites, upsertSite } from "@/lib/store";

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
    const site = await upsertSite(parseSitePayload(body));
    return NextResponse.json(site, { status: 201 });
  } catch (err) {
    return badRequest(err instanceof Error ? err.message : "저장에 실패했습니다.");
  }
}
