import { NextResponse } from "next/server";
import { unauthorizedIfNotAdmin, badRequest } from "@/lib/api";
import { saveUpload } from "@/lib/persist";

const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

export async function POST(req: Request) {
  const denied = await unauthorizedIfNotAdmin();
  if (denied) return denied;

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) return badRequest("파일이 없습니다.");
  if (!ALLOWED.has(file.type)) return badRequest("이미지 파일만 올릴 수 있습니다.");
  if (file.size > 5 * 1024 * 1024) return badRequest("5MB 이하만 가능합니다.");

  const ext = file.type.split("/")[1] === "jpeg" ? "jpg" : file.type.split("/")[1];
  const name = `${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${ext}`;
  try {
    const url = await saveUpload(name, Buffer.from(await file.arrayBuffer()), file.type);
    return NextResponse.json({ url });
  } catch (err) {
    return badRequest(err instanceof Error ? err.message : "업로드에 실패했습니다.");
  }
}
