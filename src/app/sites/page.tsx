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
            단순 홈페이지가 아닙니다. 상위노출 프로그램을 이식하고 한 달에 1,000개 글을 웹문서로 올리는 실행형
            사이트입니다. 미리보기와 임대·셋팅비를 보고 문의하세요.
          </p>
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
