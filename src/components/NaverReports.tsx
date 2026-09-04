"use client";

import { useEffect, useState } from "react";
import { NAVER_REPORTS } from "@/lib/constants";

export function NaverReports({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const active = NAVER_REPORTS.find((item) => item.src === open);

  return (
    <section id="proof" className={compact ? "" : "bg-[#f4f5f4]"}>
      <div className={compact ? "" : "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20"}>
        <p className="text-xs font-extrabold tracking-[0.16em] text-accent">60일 실측</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
          네이버 서치어드바이저
          <br />
          그래프가 이렇게 올라갑니다
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-paper-dim">
          실행 중인 사이트의 최근 60일 화면입니다. 광고를 사서 만든 숫자가 아니라, 사이트에 웹문서를 올려 붙은
          노출·클릭입니다.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {NAVER_REPORTS.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-[1.4rem] border border-line bg-white shadow-[0_12px_32px_rgba(17,24,20,0.08)]">
              <button
                type="button"
                onClick={() => setOpen(item.src)}
                className="block w-full bg-[#eef1ef] text-left"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={`네이버 서치어드바이저 실측 노출 ${item.exposure} 클릭 ${item.clicks}`}
                  className="h-auto w-full object-contain"
                />
                <p className="px-4 py-2 text-center text-[11px] font-extrabold text-mute">클릭하면 원본 크기로 봅니다</p>
              </button>
              <div className="grid grid-cols-2 gap-2 border-t border-line bg-white p-3">
                <div className="rounded-xl bg-[#fff4f4] px-3 py-3">
                  <p className="text-[11px] font-extrabold tracking-wide text-mute">총 노출 · 60일</p>
                  <p className="mt-1 text-2xl font-black leading-none">{item.exposure}</p>
                  <span className="mt-2 inline-flex items-center rounded-full bg-[#e23d3d] px-2.5 py-1 text-[12px] font-black text-white">
                    ▲ {item.exposureUp}
                  </span>
                </div>
                <div className="rounded-xl bg-[#fff4f4] px-3 py-3">
                  <p className="text-[11px] font-extrabold tracking-wide text-mute">총 클릭 · 60일</p>
                  <p className="mt-1 text-2xl font-black leading-none">{item.clicks}</p>
                  <span className="mt-2 inline-flex items-center rounded-full bg-[#e23d3d] px-2.5 py-1 text-[12px] font-black text-white">
                    ▲ {item.clicksUp}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-lg font-black md:text-2xl">사이트에 글이 남으니, 그래프가 끊기지 않고 우상향합니다.</p>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label="서치어드바이저 원본"
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-extrabold"
            onClick={() => setOpen(null)}
          >
            닫기
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.src}
            alt={`원본 노출 ${active.exposure} 클릭 ${active.clicks}`}
            className="max-h-[92vh] max-w-[96vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
