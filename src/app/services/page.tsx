import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = { title: "서비스" };

export default function ServicesPage() {
  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="display text-accent">ALL CHANNELS</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">바이럴에 쓰는 채널을 전부 다룹니다.</h1>
          <p className="mt-5 max-w-2xl text-paper-dim">
            네이버 검색부터 카페·지식인, 워드프레스 제작, SNS, 자동화까지. 필요한 것만 골라 월관리로 이어갑니다.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.filter((s) => s.slug !== "viral").map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="flex flex-col justify-between border border-line bg-ink-2 p-6 transition hover:border-accent"
            >
              <div>
                <p className="display text-sm text-accent">{s.en}</p>
                <h2 className="mt-3 text-3xl font-black">{s.name}</h2>
                <p className="mt-3 text-paper-dim">{s.desc}</p>
              </div>
              <span className="mt-6 text-sm font-bold text-accent">자세히 보기 →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
