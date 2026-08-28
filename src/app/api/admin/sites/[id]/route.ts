import { NextResponse } from "next/server";
import { unauthorizedIfNotAdmin, badRequest } from "@/lib/api";
import { parseSitePayload } from "@/lib/site-payload";
import { deleteSite, getSite, upsertSite } from "@/lib/store";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const denied = await unauthorizedIfNotAdmin();
  if (denied) return denied;
  const { id } = await params;
  const site = await getSite(id);
  if (!site) return NextResponse.json({ error: "없음" }, { status: 404 });
  return NextResponse.json(site);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const denied = await unauthorizedIfNotAdmin();
  if (denied) return denied;
  const { id } = await params;
  const existing = await getSite(id);
  if (!existing) return NextResponse.json({ error: "없음" }, { status: 404 });
  const body = await req.json().catch(() => ({}));
  try {
    const site = await upsertSite(parseSitePayload(body, id));
    return NextResponse.json(site);
  } catch (err) {
    return badRequest(err instanceof Error ? err.message : "저장에 실패했습니다.");
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const denied = await unauthorizedIfNotAdmin();
  if (denied) return denied;
  const { id } = await params;
  await deleteSite(id);
  return NextResponse.json({ ok: true });
}
