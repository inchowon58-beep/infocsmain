import Link from "next/link";
import type { ReactNode } from "react";

export function ServiceLayout({
  en,
  title,
  lead,
  children,
}: {
  en: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <div>
      <section className="border-b border-line bg-ink-2">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="display text-accent">{en}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-paper-dim">{lead}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">{children}</section>
      <section className="border-t border-line bg-accent text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-2xl font-black">이 서비스로 시작하고 싶다면 상담부터.</p>
          <Link href="/contact" className="bg-ink px-5 py-3 font-black text-paper">
            문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
