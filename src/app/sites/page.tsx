import type { Metadata } from "next";
import { EmptySites, SiteCard } from "@/components/SiteCard";
import { getPublicSites } from "@/lib/store";
import { SitesFilter } from "@/components/SitesFilter";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "임대 사이트" };

export default async function SitesPage({
  searchParams,
}: {
  searchParams: Promise<{ industry?: string }>;
}) {
  const { industry } = await searchParams;
  const all = await getPublicSites();
  const industries = [...new Set(all.map((s) => s.industry))];
  const sites = industry ? all.filter((s) => s.industry === industry) : all;

  return (
    <div>
      <section className="stage-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="display text-[0.95rem] tracking-[0.18em] text-hot">FOR RENT</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">네이버에서 검색되면 뜨는 사이트</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            미리보기와 임대·셋팅비를 보고 문의하세요.
          </p>
          <div className="mt-6 max-w-3xl rounded-2xl border-2 border-accent bg-accent/15 px-5 py-4 md:px-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-extrabold text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              지금 작업 진행 중
            </p>
            <p className="mt-3 text-base font-extrabold leading-relaxed text-white md:text-xl">
              아래 사이트들은 제작과 프로그램 이식을 이미 마친 상태입니다.
              <span className="text-hot"> 네이버 노출이 시작됐고, 지금 상위노출 작업이 계속 진행 중입니다.</span>
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        {all.length > 0 ? <SitesFilter industries={industries} current={industry} /> : null}
        {sites.length === 0 ? (
          <EmptySites />
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sites.map((site) => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
