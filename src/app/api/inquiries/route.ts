import { NextResponse } from "next/server";
import { addInquiry } from "@/lib/store";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();
  if (!name || !phone || !message) {
    return NextResponse.json({ error: "이름, 연락처, 문의 내용을 입력하세요." }, { status: 400 });
  }
  const inquiry = await addInquiry({
    name,
    phone,
    industry: String(body.industry || "").trim(),
    service: String(body.service || "").trim(),
    message,
  });
  return NextResponse.json({ ok: true, id: inquiry.id });
}
