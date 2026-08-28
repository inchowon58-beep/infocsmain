import Link from "next/link";
import { CalendarDays, Cpu, MessageCircle, Settings } from "lucide-react";
import { EmptySites, SiteCard } from "@/components/SiteCard";
import { SectionHeading } from "@/components/SectionHeading";
import { KakaoButton } from "@/components/KakaoButton";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyInfocs } from "@/components/WhyInfocs";
import { MonthlyPrice } from "@/components/MonthlyPrice";
import { COMPANY, MANAGED_INDUSTRIES, PROCESS, SERVICES } from "@/lib/constants";
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
      <section className="stage-dark">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-extrabold text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              국내 유일 웹문서 상위노출 실행사 · 광고 대행사 아님
            </span>
            <h1 className="mt-6 max-w-4xl text-[2.35rem] font-black leading-[1.12] tracking-tight md:text-7xl">
              네이버 <em className="hit-pct">99%</em> 상위노출
              <br />
              사이트 제작의 <em className="hit-secret">비밀</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              네이버에서 검색하면 왜 어떤 사이트만 위에 뜰까요. {COMPANY.name}는 그 자리에 사이트를 올리는 실행사입니다.
              대행이 아닙니다. 우리가 직접 프로그램을 이식하고, 한 달에 1,000개 글을 웹문서로 노출합니다.
            </p>
            <p className="mt-4 max-w-2xl text-base font-bold text-hot">
              이 방식으로 네이버 상위노출을 하는 곳은, 지금 오직 인포씨에스가 유일합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <KakaoButton>카카오톡 문의하기</KakaoButton>
              <Link href="/sites" className="btn-ghost-dark">
                임대 사이트 보기
              </Link>
            </div>
          </div>
          <MonthlyPrice />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <WhyInfocs />
      </section>

      <section className="bg-ink-2">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <SectionHeading
            kicker="SERVICE"
            title="실행은 두 가지입니다."
            body="상위노출 프로그램을 이식하고, 그 사이트를 직접 제작·월관리합니다."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionHeading
          kicker="INDUSTRY"
          title="지금 임대·관리 중인 업종"
          body="분양·병원·카페부터 철거·회생까지, 네이버에서 고객이 찾아오는 사이트를 직접 실행하고 있습니다."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {MANAGED_INDUSTRIES.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-bold shadow-sm"
            >
              {item}
            </span>
          ))}
          <span className="rounded-full bg-accent px-3.5 py-1.5 text-sm font-extrabold text-white">외 다수</span>
        </div>
      </section>

      <section className="bg-ink-2">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              kicker="RENTAL SITES"
              title="지금 임대 가능한 사이트"
              body="상위노출 프로그램이 이식된 업종 사이트입니다. 미리보기와 월 임대·셋팅비를 확인하세요."
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

      <section className="stage-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            dark
            kicker="PRICE"
            title="실행 비용은 이렇습니다."
            body="대행 마진을 붙이지 않습니다. 우리가 직접 돌리니 최저 금액으로 효과가 나게 만듭니다."
          />
          <div className="mt-10 max-w-xl">
            <MonthlyPrice />
          </div>
          <Link href="/pricing" className="mt-8 inline-block font-extrabold text-hot">
            요금 자세히 보기 →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionHeading kicker="PROCESS" title="상담에서 실행까지." />
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

      <section className="cta-band text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div>
            <p className="text-sm font-extrabold text-white/80">합법적으로, 직접 실행합니다</p>
            <h2 className="mt-2 text-3xl font-black md:text-5xl">업종과 키워드를 알려주세요.</h2>
          </div>
          <KakaoButton>카카오톡 문의하기</KakaoButton>
        </div>
      </section>
    </div>
  );
}
