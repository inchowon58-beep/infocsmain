"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRound } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { KakaoIcon } from "./KakaoButton";

export function KakaoDock() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[7.5rem_1fr] bg-kakao text-kakao-ink shadow-[0_-6px_24px_rgba(23,32,51,0.12)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href="/admin/login"
        className="flex h-14 items-center justify-center gap-1.5 border-r border-kakao-ink/15 px-2 text-sm font-extrabold hover:bg-black/5"
      >
        <UserRound className="h-5 w-5" strokeWidth={2.4} />
        관리자
      </Link>
      <a
        href={COMPANY.kakao}
        target="_blank"
        rel="noreferrer"
        className="flex h-14 items-center justify-center gap-2 text-base font-extrabold"
      >
        <KakaoIcon className="h-6 w-6" />
        카카오톡 문의하기
      </a>
    </div>
  );
}
