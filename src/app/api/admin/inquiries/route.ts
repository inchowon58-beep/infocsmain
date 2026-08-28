import { NextResponse } from "next/server";
import { unauthorizedIfNotAdmin } from "@/lib/api";
import { getInquiries } from "@/lib/store";

export async function GET() {
  const denied = await unauthorizedIfNotAdmin();
  if (denied) return denied;
  return NextResponse.json(await getInquiries());
}
