import Link from "next/link";
import { CalendarDays, Cpu, MessageCircle, Settings } from "lucide-react";
import { EmptySites, SiteCard } from "@/components/SiteCard";
import { KakaoButton } from "@/components/KakaoButton";
import { ServiceCard } from "@/components/ServiceCard";
import { MonthlyPrice } from "@/components/MonthlyPrice";
import { CompanyTrust } from "@/components/CompanyTrust";
import { SectionLabel } from "@/components/SectionLabel";
import { SearchAsset } from "@/components/SearchAsset";
import { NaverReports } from "@/components/NaverReports";
import {
  BLOG_SHIFT_INDUSTRIES,
  COMPANY,
  COMPARE,
  MANAGED_INDUSTRIES,
  NOW_ON_NAVER,
  PROCESS,
  REVIEWS,
  SERVICES,
  STRENGTHS,
} from "@/lib/constants";
import { getPublicSites } from "@/lib/store";

export const dynamic = "force-dynamic";

const PROCESS_ICONS = [
  { Icon: MessageCircle, anim: "anim-bounce" },
  { Icon: Settings, anim: "anim-spin" },
  { Icon: Cpu, anim: "anim-pulse" },
  { Icon: CalendarDays, anim: "anim-float" },
];

export default async function HomePage() {
  const sites = await getPublicSites();

  return (
    <div>
      <section id="benefit" className="relative overflow-hidden bg-stage text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-studio.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06140c] via-[#06140c]/88 to-[#06140c]/40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-24">
          <div>
            <SectionLabel num="01" label="BENEFIT" dark />
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-extrabold text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              지금 네이버를 열어보세요
            </span>
            <h1 className="mt-6 max-w-4xl text-[2.35rem] font-black leading-[1.12] tracking-tight md:text-7xl">
              홈페이지·랜딩이
              <br />
              네이버 <em className="hit-pct">상위</em>에 뜹니다.
              <br />
              그 자리를 <em className="hit-secret">대량</em>으로 올립니다.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {NOW_ON_NAVER.hook} {NOW_ON_NAVER.hookAsk} {COMPANY.name}는 그 웹문서를 한 달에 글 1,000개(1,000개
              키워드)로 올립니다. 대행이 아니라 실행입니다.
            </p>
            <p className="mt-4 max-w-2xl text-base font-bold text-hot">
              셋팅 50만 · 월 30만. 키워드 하나 수십만이 아닙니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <KakaoButton>카톡 상담</KakaoButton>
              <Link href="/sites" className="btn-ghost-dark">
                실제 사이트 보기
              </Link>
            </div>
          </div>
          <MonthlyPrice />
        </div>
      </section>

      <section id="pain" className="bg-[#f4f5f4]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/pain-owner.png" alt="" className="sec-shot aspect-[16/10]" />
            </div>
            <div>
              <SectionLabel num="02" label="PAIN" />
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                블로그로 홍보하던 대표님들,
                <br />
                <span className="text-accent">노출이 줄었습니다.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-paper-dim">
                {NOW_ON_NAVER.pain} {NOW_ON_NAVER.result}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {BLOG_SHIFT_INDUSTRIES.map((item) => (
                  <span key={item} className="rounded-full border border-line bg-white px-3 py-1 text-sm font-bold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["노출이 줄면 손님이 끊깁니다", "유입이 줄면 전환을 만들 수가 없습니다. 광고비만 쓰고 문의가 안 옵니다."],
              ["아이디가 죽으면 글이 사라집니다", "블로그·카페는 계정이 막히면 그동안 올린 노출이 같이 날아갑니다."],
              ["아이디 구매는 범죄입니다", "광고주도 처벌 대상이 될 수 있습니다. 합법 웹문서로 바꿔야 합니다."],
            ].map(([t, d]) => (
              <div key={t} className="card p-6">
                <h3 className="text-lg font-black">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SearchAsset />

      <section className="bg-[#f4f5f4]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <NaverReports compact />
          <div className="mt-10">
            <Link href="/results" className="btn-ghost">
              실측 레퍼런스 더 보기
            </Link>
          </div>
        </div>
      </section>

      <section id="diff" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionLabel num="03" label="DIFFERENCE" />
        <h2 className="mt-4 max-w-3xl text-3xl font-black md:text-5xl">홈페이지·랜딩을 대량으로 올립니다.</h2>
        <p className="mt-4 max-w-2xl text-paper-dim">
          지금 네이버 상위에 보이는 그 자리를, 월 글 1,000개로 채웁니다. 메인과 세부 키워드를 같이 올려 방문 고객을
          붙잡습니다. 받아서 넘기는 대행이 아닙니다.
        </p>
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
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["대량 노출", "홈페이지·랜딩 웹문서를 월 1,000개 올립니다. 키워드 하나 월정액이 아닙니다."],
            ["선점이 유리", "웹문서 영역을 먼저 잡으면 뒤에서 밀어내기가 어렵습니다."],
            ["자연 유입으로 유지", "신뢰가 쌓이면 과도한 트래픽 없이도 상위노출이 유지됩니다."],
          ].map(([t, d]) => (
            <div key={t} className="card p-5">
              <h3 className="font-black">{t}</h3>
              <p className="mt-2 text-sm text-mute">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="bg-ink-2">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="mb-10 overflow-hidden rounded-[2rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/work-mockups.png" alt="" className="sec-shot max-h-72 w-full" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel num="04" label="PORTFOLIO" />
              <h2 className="mt-4 text-3xl font-black md:text-5xl">지금 바로 임대가 가능한 사이트 목록</h2>
              <p className="mt-4 max-w-2xl text-paper-dim">
                말로만 상위노출이라고 하지 않습니다. 업종 사이트를 직접 열어 확인하세요. 디자인과 노출이 같이 돌아갑니다.
              </p>
            </div>
            <Link href="/sites" className="btn-ghost">
              전체 보기
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {MANAGED_INDUSTRIES.map((item) => (
              <span key={item} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-bold">
                {item}
              </span>
            ))}
            <span className="rounded-full bg-accent px-3.5 py-1.5 text-sm font-extrabold text-white">외 다수</span>
          </div>
          <div className="mt-10">
            {sites.length === 0 ? (
              <EmptySites />
            ) : (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {sites.slice(0, 6).map((site) => (
                  <SiteCard key={site.id} site={site} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionLabel num="05" label="REVIEWS" />
        <h2 className="mt-4 text-3xl font-black md:text-5xl">실제로 돌리는 업종에서 나온 이야기입니다.</h2>
        <p className="mt-4 max-w-2xl text-paper-dim">
          사람마다 만족은 다를 수 있습니다. 다만 아래는 지금 사이트를 운영하는 업종에서 가장 많이 듣는 말입니다.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {REVIEWS.map((item) => (
            <article key={item.industry} className="review-card">
              <p className="text-sm font-extrabold text-accent">
                {item.industry} · {item.role}
              </p>
              <p className="mt-4 text-base leading-relaxed text-paper">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </section>

      <section id="strength" className="bg-[#f4f5f4]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <SectionLabel num="06" label="STRENGTH" />
          <h2 className="mt-4 text-3xl font-black md:text-5xl">디자인 회사이면서, 광고를 직접 실행합니다.</h2>
          <p className="mt-4 max-w-2xl text-paper-dim">
            사이트만 예쁘게 만들고 끝내지 않습니다. 네이버에서 검색되면 뜨도록 제작과 노출을 한 회사에서 돌립니다.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STRENGTHS.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
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
        </div>
      </section>

      <CompanyTrust />

      <section className="cta-band text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div>
            <p className="text-sm font-extrabold text-white/80">홈페이지 노출이 필요하신 대표님</p>
            <h2 className="mt-2 text-3xl font-black md:text-5xl">지금 상담해 주세요.</h2>
            <p className="mt-3 text-sm text-white/70">셋팅 50만 · 월 30만. 키워드 하나 수십만이 아닙니다.</p>
          </div>
          <KakaoButton>카톡 상담</KakaoButton>
        </div>
      </section>
    </div>
  );
}
