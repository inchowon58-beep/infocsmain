"use client";

import { usePathname } from "next/navigation";
import { COMPANY } from "@/lib/constants";
import { KakaoIcon } from "./KakaoButton";

export function KakaoDock() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <div
      className="fixed bottom-5 right-4 z-50 md:bottom-7 md:right-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
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
