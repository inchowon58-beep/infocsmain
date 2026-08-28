"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { COMPANY, NAV } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="display text-3xl leading-none text-paper">{COMPANY.nameEn}</span>
          <span className="text-sm font-bold tracking-tight text-paper-dim">{COMPANY.name}</span>
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
          <Link href="/contact" className="btn-accent py-2.5 text-sm">
            상담 문의
          </Link>
        </nav>

        <button
          type="button"
          className="display text-2xl text-paper md:hidden"
          aria-label="메뉴"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-ink px-5 py-4 md:hidden">
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
            <Link href="/contact" className="btn-accent mt-2" onClick={() => setOpen(false)}>
              상담 문의
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
