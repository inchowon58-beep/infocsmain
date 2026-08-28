import { NextResponse } from "next/server";
import { unauthorizedIfNotAdmin } from "@/lib/api";
import { deleteInquiry, markInquiryRead } from "@/lib/store";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const denied = await unauthorizedIfNotAdmin();
  if (denied) return denied;
  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  await markInquiryRead(id, Boolean(body.read));
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const denied = await unauthorizedIfNotAdmin();
  if (denied) return denied;
  const { id } = await params;
  await deleteInquiry(id);
  return NextResponse.json({ ok: true });
}
