import Link from "next/link";
import {
  BarChart3,
  Building2,
  CalendarDays,
  Cpu,
  Home,
  MapPin,
  MessageCircle,
  Search,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import { KakaoButton } from "@/components/KakaoButton";
import { MonthlyPrice } from "@/components/MonthlyPrice";
import { NaverReports } from "@/components/NaverReports";
import { SearchAsset } from "@/components/SearchAsset";
import { SectionLabel } from "@/components/SectionLabel";
import { COMPANY, COMPARE, PROCESS, STRENGTHS } from "@/lib/constants";
import { relatedSeoLinks, seoPath, type SeoPageRef } from "@/lib/seo-catalog";
import type { SeoDoc } from "@/lib/seo-content";

const STAT_ICONS = [Users, Home, TrendingUp, BarChart3];
const PROCESS_ICONS = [
  { Icon: MessageCircle, anim: "anim-bounce" },
  { Icon: Settings, anim: "anim-spin" },
  { Icon: Cpu, anim: "anim-pulse" },
  { Icon: CalendarDays, anim: "anim-float" },
];

export function SeoDocView({ page, doc }: { page: SeoPageRef; doc: SeoDoc }) {
  const related = relatedSeoLinks(page);
  const popSection = doc.sections[0];
  const restSections = doc.sections.slice(1);
  const why = restSections[0];
  const work = restSections[1];
  const occupy = restSections[2];

  return (
    <article>
      <section className="relative overflow-hidden bg-stage text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-studio.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06140c] via-[#06140c]/88 to-[#06140c]/40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-20">
          <div>
            <nav className="text-sm text-white/55">
              <Link href="/" className="hover:text-white">
                홈
              </Link>
              <span className="mx-2">/</span>
              <Link href="/kw" className="hover:text-white">
                키워드
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{page.keyword}</span>
            </nav>
            <SectionLabel num="01" label="KEYWORD" dark />
            <p className="mt-5 text-xs font-extrabold tracking-[0.16em] text-accent">{COMPANY.name} · 웹문서 실행</p>
            <h1 className="mt-3 text-[2.1rem] font-black leading-[1.12] tracking-tight md:text-6xl">{doc.h1}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{doc.lead}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { Icon: Search, text: page.industry.label },
                { Icon: MapPin, text: page.place?.label || "전국" },
                { Icon: Building2, text: "셋팅 50만 · 월 30만" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-extrabold text-white"
                >
                  <item.Icon className="h-3.5 w-3.5 text-accent" />
                  {item.text}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <KakaoButton>카톡 상담</KakaoButton>
              <Link href="/results" className="btn-ghost-dark">
                레퍼런스 확인
              </Link>
            </div>
          </div>
          <MonthlyPrice />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <SectionLabel num="02" label="LOCAL DATA" />
          <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">{popSection?.h2 || `${page.place?.label || "전국"} 주민등록`}</h2>
          {popSection?.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 max-w-3xl leading-relaxed text-paper-dim">
              {p}
            </p>
          ))}
          {doc.stats.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {doc.stats.map((s, i) => {
                const Icon = STAT_ICONS[i] || Users;
                return (
                  <div key={s.label} className="card p-6">
                    <span className="icon-wrap">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <p className="mt-4 text-xs font-extrabold tracking-wide text-mute">{s.label}</p>
                    <p className="mt-1 text-2xl font-black md:text-3xl">{s.value}</p>
                    <p className="mt-2 text-sm text-mute">{s.note}</p>
                  </div>
                );
              })}
            </div>
          )}
          <div className="mt-8 space-y-3">
            {doc.tables.map((table) => (
              <details key={table.caption} className="rounded-2xl border border-line bg-white px-5 py-4">
                <summary className="cursor-pointer font-extrabold">{table.caption}</summary>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[28rem] text-left text-sm">
                    <thead>
                      <tr className="border-b border-line text-mute">
                        {table.headers.map((h) => (
                          <th key={h} className="px-2 py-2.5 font-bold first:pl-0 last:pr-0">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row) => (
                        <tr key={row.join("-")} className="border-b border-line last:border-0">
                          {row.map((cell, i) => (
                            <td key={`${cell}-${i}`} className={`px-2 py-2.5 first:pl-0 last:pr-0 ${i === 0 ? "font-bold" : "text-paper-dim"}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-3 text-xs leading-relaxed text-mute">{table.source}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {why && (
        <section className="bg-[#f4f5f4]">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:py-20">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/pain-owner.png" alt="" className="sec-shot aspect-[16/10]" />
            </div>
            <div>
              <SectionLabel num="03" label="WHY WEBDOC" />
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">{why.h2}</h2>
              {why.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-paper-dim">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      <SearchAsset />

      {work && (
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="mb-10 overflow-hidden rounded-[2rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/work-mockups.png" alt="" className="sec-shot max-h-72 w-full" />
          </div>
          <SectionLabel num="04" label="EXECUTION" />
          <h2 className="mt-4 max-w-4xl text-3xl font-black md:text-5xl">{work.h2}</h2>
          {work.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 max-w-3xl leading-relaxed text-paper-dim">
              {p}
            </p>
          ))}
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {PROCESS.map((p, i) => {
              const { Icon, anim } = PROCESS_ICONS[i];
              return (
                <div key={p.step} className="card relative overflow-hidden p-5">
                  <span className="display absolute -right-1 -top-3 text-7xl text-accent/15">{p.step}</span>
                  <span className="icon-wrap">
                    <Icon className={`h-6 w-6 ${anim}`} strokeWidth={2.2} />
                  </span>
                  <p className="mt-4 text-xs font-extrabold text-accent">{p.step}</p>
                  <h3 className="mt-1 text-xl font-black">{p.title}</h3>
                  <p className="mt-2 text-sm text-mute">{p.body}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {occupy && (
        <section className="bg-[#f4f5f4]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <SectionLabel num="05" label="DIFFERENCE" />
            <h2 className="mt-4 max-w-4xl text-3xl font-black md:text-5xl">{occupy.h2}</h2>
            {occupy.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 max-w-3xl leading-relaxed text-paper-dim">
                {p}
              </p>
            ))}
            <div className="compare-wrap mt-10">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th className="w-[22%] bg-ink-2 text-mute">비교</th>
                    <th className="bg-ink-2 text-mute">일반 광고 대행</th>
                    <th className="col-us">인포씨에스 실행</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row) => (
                    <tr key={row.item}>
                      <td className="font-extrabold">{row.item}</td>
                      <td className="text-sm text-paper-dim">{row.others}</td>
                      <td className="col-us text-sm font-bold text-accent">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {STRENGTHS.map((item) => (
                <div key={item.title} className="card p-6">
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <NaverReports compact />
          <div className="mt-10">
            <Link href="/results" className="btn-ghost">
              실측 레퍼런스 더 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f4]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-20">
          <div>
            <SectionLabel num="06" label="FAQ" />
            <h2 className="mt-4 text-3xl font-black md:text-5xl">자주 묻는 질문</h2>
            <div className="mt-8 space-y-3">
              {doc.faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-line bg-white px-5 py-4">
                  <summary className="cursor-pointer font-extrabold">{f.q}</summary>
                  <p className="mt-2 leading-relaxed text-mute">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel num="07" label="RELATED" />
            <h2 className="mt-4 text-3xl font-black md:text-4xl">이어서 볼 키워드</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {related.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-bold hover:border-accent hover:text-accent"
                >
                  {l.label}
                </Link>
              ))}
              <Link href={seoPath(`${page.industry.slug}-웹문서상위노출`)} className="rounded-full bg-accent px-3.5 py-1.5 text-sm font-extrabold text-white">
                {page.industry.label} 웹문서 상위노출
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div>
            <p className="text-sm font-extrabold text-white/80">{page.keyword}</p>
            <h2 className="mt-2 text-3xl font-black md:text-5xl">업종과 지역을 알려주세요.</h2>
            <p className="mt-3 text-sm text-white/70">셋팅 50만 · 월 30만. 2017년부터 직접 실행합니다.</p>
          </div>
          <KakaoButton>카톡 상담</KakaoButton>
        </div>
      </section>
    </article>
  );
}
