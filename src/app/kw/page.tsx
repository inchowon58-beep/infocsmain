import type { Metadata } from "next";
import Link from "next/link";
import { KakaoButton } from "@/components/KakaoButton";
import { CORE_INTENTS, SEO_INTENTS, industryHubs, makeSeoSlug, seoPath } from "@/lib/seo-catalog";

export const metadata: Metadata = { title: "업종·지역 키워드" };

export default function KeywordIndexPage() {
  const groups = industryHubs();

  return (
    <div>
      <section className="stage-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="text-xs font-extrabold tracking-[0.18em] text-hot">KEYWORD PAGES</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">업종·지역 웹문서 키워드</h1>
          <p className="mt-5 max-w-2xl text-white/70">
            블로그·카페 광고가 아니라, 사이트 웹문서 상위노출입니다. 업종과 지역을 골라 해당 키워드 안내를 확인하세요.
          </p>
          <div className="mt-8">
            <KakaoButton>카톡 상담</KakaoButton>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        {groups.map(([group, items]) => (
          <div key={group} className="mb-12">
            <h2 className="text-2xl font-black">{group}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((ind) => (
                <article key={ind.slug} className="rounded-2xl border border-line bg-white p-5">
                  <h3 className="text-lg font-black">{ind.label}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SEO_INTENTS.filter((i) => (CORE_INTENTS as readonly string[]).includes(i.slug) || i.slug === "블로그광고").slice(0, 5).map((intent) => (
                      <Link
                        key={intent.slug}
                        href={seoPath(makeSeoSlug(ind.slug, intent.slug))}
                        className="rounded-full border border-line px-3 py-1 text-xs font-extrabold hover:border-accent hover:text-accent"
                      >
                        {ind.label}
                        {intent.label.replace(/\s/g, "")}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
