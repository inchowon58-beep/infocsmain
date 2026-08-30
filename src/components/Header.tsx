"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY, NAV } from "@/lib/constants";
import { KakaoButton } from "./KakaoButton";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-50 border-b-2 border-accent/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-lg font-black text-white">
            I
          </span>
          <span>
            <span className="block text-lg font-black leading-none tracking-tight">{COMPANY.name}</span>
            <span className="text-[11px] font-bold tracking-wide text-mute">국내 유일 실행사</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold tracking-tight ${active ? "text-accent" : "text-paper-dim hover:text-paper"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <KakaoButton className="py-2.5 text-sm">카톡 상담</KakaoButton>
        </nav>

        <button
          type="button"
          className="text-paper md:hidden"
          aria-label="메뉴"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-extrabold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <KakaoButton className="mt-2">카톡 상담</KakaoButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
