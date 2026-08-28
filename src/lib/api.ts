import { NextResponse } from "next/server";
import { isAdmin } from "./auth";

export async function unauthorizedIfNotAdmin() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }
  return null;
}

export function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}
