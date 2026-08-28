import Link from "next/link";
import { EmptySites, SiteCard } from "@/components/SiteCard";
import { SectionHeading } from "@/components/SectionHeading";
import { COMPANY, PRICING, PROCESS, SERVICES } from "@/lib/constants";
import { formatMan } from "@/lib/format";
import { getPublicSites } from "@/lib/store";

export const dynamic = "force-dynamic";

const ticker = [
  "BLOG",
  "CAFE",
  "WORDPRESS",
  "WEB RANKING",
  "AUTOMATION",
  "INSTAGRAM",
  "YOUTUBE",
  "지식인",
  "VIRAL",
];

export default async function HomePage() {
  const sites = await getPublicSites();
  const featured = SERVICES.filter((s) => s.slug !== "viral");

  return (
    <div>
      <section className="noise relative overflow-hidden border-b border-line">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.3fr_0.7fr] md:px-8 md:py-24">
          <div>
            <p className="display text-accent">VIRAL / RANK / RENT</p>
            <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              네이버가 찾는
              <br />
              자리를 만듭니다.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-paper-dim">
              {COMPANY.name}는 블로그·카페·워드프레스·웹문서 상위노출·자동화·인스타·유튜브·지식인
              바이럴 전문업체입니다. 상위노출부터 임대형 업종 사이트까지 한 곳에서 굴립니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-accent">
                상담 문의
              </Link>
              <Link href="/sites" className="btn-ghost">
                임대 사이트 보기
              </Link>
            </div>
          </div>
          <div className="grid content-end gap-3">
            <div className="slash-card border border-line bg-ink-2 p-6">
              <p className="display text-sm text-mute">SETUP</p>
              <p className="text-5xl font-black">{formatMan(PRICING.rankingSetup)}</p>
              <p className="mt-1 text-sm text-mute">네이버 웹문서 상위노출 사이트 셋팅</p>
            </div>
            <div className="slash-card border border-line bg-ink-2 p-6">
              <p className="display text-sm text-mute">MONTHLY</p>
              <p className="text-5xl font-black">{formatMan(PRICING.rankingMonthly)}</p>
              <p className="mt-1 text-sm text-mute">키워드 {PRICING.rankingKeywords.toLocaleString()}개 월 발행</p>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={`${item}-${i}`}>
              {item} <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {[
            { n: "2017", l: "운영 시작" },
            { n: "2026", l: "현재" },
            { n: "8", l: "핵심 채널" },
            { n: "월관리", l: "끊기지 않는 발행" },
          ].map((item) => (
            <div key={item.l} className="border-line px-5 py-8 md:border-r md:last:border-r-0">
              <p className="display text-5xl text-accent md:text-6xl">{item.n}</p>
              <p className="mt-2 text-sm font-bold text-paper-dim">{item.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading
          kicker="SERVICES"
          title="채널을 나눠 쓰지 않습니다."
          body="검색·커뮤니티·SNS를 한 회사에서 묶습니다. 필요한 채널만 골라 시작해도 됩니다."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="slash-card group border border-line bg-ink-2 p-5 transition hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <span className="display text-sm text-accent">{s.en}</span>
                <span className="text-[11px] font-bold text-mute">{s.tag}</span>
              </div>
              <h3 className="mt-6 text-2xl font-black">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              kicker="RENTAL SITES"
              title="지금 임대 가능한 사이트"
              body="관리자가 등록한 업종 사이트가 여기에 올라옵니다. 미리보기와 월 임대·셋팅비를 바로 확인하세요."
            />
            <Link href="/sites" className="btn-ghost">
              전체 보기
            </Link>
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

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading kicker="PRICING" title="기본 요금은 이렇습니다." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <PriceBlock
            label="SETUP"
            value={formatMan(PRICING.rankingSetup)}
            note="1회"
            title="네이버 웹문서 상위노출 셋팅"
          />
          <PriceBlock
            label="KEYWORDS"
            value={formatMan(PRICING.rankingMonthly)}
            note={`월 / ${PRICING.rankingKeywords.toLocaleString()}키워드`}
            title="월 발행"
          />
          <PriceBlock
            label="BRAND BLOG"
            value={formatMan(PRICING.brandBlogMonthly)}
            note={`월 / ${PRICING.brandBlogPosts}포스팅`}
            title="브랜드블로그 월관리"
          />
        </div>
        <p className="mt-6 text-sm text-mute">임대형 사이트 가격은 사이트마다 다르며, 목록에 표시된 금액이 기준입니다.</p>
        <Link href="/pricing" className="mt-4 inline-block font-bold text-accent">
          요금 자세히 보기 →
        </Link>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading kicker="PROCESS" title="상담에서 월관리까지." />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="border border-line p-5">
                <p className="display text-4xl text-accent">{p.step}</p>
                <h3 className="mt-4 text-xl font-black">{p.title}</h3>
                <p className="mt-2 text-sm text-mute">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-accent text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div>
            <p className="display text-sm">LET’S WORK</p>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">업종과 키워드를 알려주세요.</h2>
          </div>
          <Link href="/contact" className="bg-ink px-6 py-4 font-black text-paper hover:bg-black">
            상담 문의
          </Link>
        </div>
      </section>
    </div>
  );
}

function PriceBlock({
  label,
  value,
  note,
  title,
}: {
  label: string;
  value: string;
  note: string;
  title: string;
}) {
  return (
    <div className="slash-card border border-line bg-ink-2 p-6">
      <p className="display text-sm text-accent">{label}</p>
      <p className="mt-6 text-5xl font-black">{value}</p>
      <p className="mt-1 text-xs font-bold text-mute">{note}</p>
      <p className="mt-4 font-bold">{title}</p>
    </div>
  );
}
