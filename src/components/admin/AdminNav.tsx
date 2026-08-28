"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { COMPANY } from "@/lib/constants";

const LINKS = [
  { href: "/admin", label: "대시보드" },
  { href: "/admin/sites", label: "임대 사이트" },
  { href: "/admin/inquiries", label: "문의" },
];

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="border-b border-line bg-ink-2">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 md:px-8">
        <div className="flex items-center gap-6">
          <span className="display text-2xl text-accent">{COMPANY.nameEn} ADMIN</span>
          <nav className="flex gap-4 text-sm font-bold">
            {LINKS.map((l) => {
              const active = l.href === "/admin" ? pathname === "/admin" : pathname.startsWith(l.href);
              return (
                <Link key={l.href} href={l.href} className={active ? "text-accent" : "text-paper-dim hover:text-paper"}>
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/" className="text-mute hover:text-paper">
            사이트 보기
          </Link>
          <button type="button" onClick={logout} className="font-bold text-accent">
            로그아웃
          </button>
        </div>
      </div>
    </header>
  );
}
