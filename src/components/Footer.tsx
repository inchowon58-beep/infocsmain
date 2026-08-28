"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, NAV } from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="display text-5xl text-accent">{COMPANY.nameEn}</p>
          <p className="mt-2 text-lg font-extrabold">{COMPANY.legal}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
            블로그 · 카페 · 워드프레스 · 웹문서 상위노출 · 자동화 · 인스타그램 · 유튜브 · 지식인.
            바이럴 전문.
          </p>
        </div>
        <div>
          <p className="display text-sm text-mute">NAV</p>
          <ul className="mt-3 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-bold hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm leading-7 text-paper-dim">
          <p className="display text-sm text-mute">COMPANY</p>
          <p className="mt-3 font-bold text-paper">{COMPANY.legal}</p>
          <p>대표 {COMPANY.ceo}</p>
          <p>{COMPANY.address}</p>
          <p>{COMPANY.years}</p>
          <p>{COMPANY.domain}</p>
        </div>
      </div>
      <div className="border-t border-line px-5 py-4 text-center text-xs text-mute md:px-8">
        © {COMPANY.founded}–2026 {COMPANY.legal}. All rights reserved.
      </div>
    </footer>
  );
}
