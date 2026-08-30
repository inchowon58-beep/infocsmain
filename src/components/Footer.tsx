"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, NAV } from "@/lib/constants";
import { KakaoButton } from "./KakaoButton";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="border-t border-white/10 bg-stage pb-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-lg font-black text-white">
              I
            </span>
            <span className="text-xl font-black">{COMPANY.name}</span>
          </div>
          <p className="mt-2 text-sm font-bold text-white/55">{COMPANY.legal}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            국내 유일 네이버 웹문서 상위노출 실행사. 광고 대행사가 아닙니다. 직접 실행합니다.
          </p>
          <KakaoButton className="mt-5">카톡 상담</KakaoButton>
        </div>
        <div>
          <p className="text-xs font-extrabold tracking-[0.16em] text-hot">메뉴</p>
          <ul className="mt-3 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-bold text-white/80 hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm leading-7 text-white/55">
          <p className="text-xs font-extrabold tracking-[0.16em] text-hot">회사 정보</p>
          <p className="mt-3 font-bold text-white">{COMPANY.legal}</p>
          <p>대표 {COMPANY.ceo}</p>
          <p>사업자등록번호 {COMPANY.bizNo}</p>
          <p>{COMPANY.address}</p>
          <p>{COMPANY.years}</p>
          <p>{COMPANY.domain}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 border-t border-white/10 px-5 py-4 text-xs text-white/40 md:px-8">
        <span>© {COMPANY.founded}–2026 {COMPANY.legal}. All rights reserved.</span>
        <Link href="/admin/login" className="font-bold text-white/55 hover:text-accent">
          관리자 로그인
        </Link>
      </div>
    </footer>
  );
}
