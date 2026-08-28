import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { PRICING } from "@/lib/constants";
import { formatMan } from "@/lib/format";

export const metadata: Metadata = { title: "블로그" };

export default function BlogPage() {
  return (
    <ServiceLayout
      en="BLOG"
      title="네이버 블로그 상위노출 · 브랜드블로그 월관리"
      lead="검색용 블로그와 브랜드 채널을 나눠 운영합니다. 상위노출은 키워드, 브랜드블로그는 신뢰를 맡습니다."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-line p-6">
          <p className="display text-accent">RANK BLOG</p>
          <h2 className="mt-3 text-2xl font-black">네이버 상위노출 블로그</h2>
          <p className="mt-3 text-sm leading-relaxed text-mute">
            키워드 선정, 발행 스케줄, 월관리로 검색 상단을 노립니다. 상세 금액은 키워드 수와 경쟁 강도에 따라
            상담 후 안내합니다.
          </p>
        </div>
        <div className="border border-line p-6">
          <p className="display text-accent">BRAND BLOG</p>
          <h2 className="mt-3 text-2xl font-black">브랜드블로그 월관리</h2>
          <p className="mt-6 text-5xl font-black">{formatMan(PRICING.brandBlogMonthly)}</p>
          <p className="mt-2 font-bold">한 달 {PRICING.brandBlogPosts}개 포스팅</p>
          <p className="mt-3 text-sm text-mute">브랜드 톤을 유지한 채 꾸준히 올립니다. 검색과 채널을 같이 키웁니다.</p>
        </div>
      </div>
    </ServiceLayout>
  );
}
