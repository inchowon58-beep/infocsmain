import { NextResponse } from "next/server";
import { readUpload } from "@/lib/persist";

export async function GET(_req: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  if (!name || name.includes("..") || name.includes("/")) {
    return NextResponse.json({ error: "잘못된 파일입니다." }, { status: 400 });
  }
  const file = await readUpload(name);
  if (!file) return NextResponse.json({ error: "파일이 없습니다." }, { status: 404 });
  return new NextResponse(file.stream, {
    headers: {
      "Content-Type": file.contentType,
      "Cache-Control": "public, max-age=86400",
    },
  });
}
