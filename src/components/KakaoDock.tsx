"use client";

import { usePathname } from "next/navigation";
import { COMPANY } from "@/lib/constants";
import { KakaoIcon } from "./KakaoButton";

function NaverIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.27 12.85 7.38 0H0v24h7.73V11.15L16.62 24H24V0h-7.73v12.85z"
      />
    </svg>
  );
}

export function KakaoDock() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <div
      className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-2.5 md:bottom-7 md:right-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={COMPANY.blog}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-xl bg-[#03c75a] px-4 py-3.5 text-[15px] font-extrabold text-white shadow-[0_10px_28px_rgba(3,199,90,0.28)]"
      >
        <NaverIcon className="h-5 w-5" />
        네이버 공식블로그
      </a>
      <a
        href={COMPANY.kakao}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-xl bg-[#fee500] px-4 py-3.5 text-[15px] font-extrabold text-[#191919] shadow-[0_10px_28px_rgba(0,0,0,0.18)]"
      >
        <KakaoIcon className="h-5 w-5" />
        카톡상담
      </a>
    </div>
  );
}
