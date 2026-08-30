import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { WhyInfocs } from "@/components/WhyInfocs";
import { PRICING } from "@/lib/constants";
import { formatMan } from "@/lib/format";

export const metadata: Metadata = { title: "네이버 웹문서 상위노출 자동화" };

export default function RankingPage() {
  return (
    <ServiceLayout
      slug="ranking"
      en="AUTO RANK SYSTEM"
      title="네이버에서 검색하면 상위노출됩니다"
      lead="사이트에 프로그램을 이식하고 한 달에 1,000개 글을 웹문서로 발행합니다. 블로그·카페처럼 아이디가 죽어 글이 사라지지 않습니다."
    >
      <WhyInfocs />
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <div className="card p-6">
          <p className="text-xs font-extrabold text-accent">01 SETUP</p>
          <p className="mt-4 text-5xl font-black">{formatMan(PRICING.rankingSetup)}</p>
          <p className="mt-2 font-bold">프로그램 이식 · 사이트 셋팅 · 1회</p>
          <p className="mt-3 text-sm text-mute">
            우리가 직접 실행합니다. 대행 마진 없이, 상위노출이 되도록 사이트에 시스템을 심습니다.
          </p>
        </div>
        <div className="card border-accent/40 p-6">
          <p className="text-xs font-extrabold text-accent">02 MONTHLY</p>
          <p className="mt-3 text-xs font-extrabold text-mute">광고 대행사라면</p>
          <p className="price-was price-was-light">{formatMan(PRICING.rankingMonthlyCompare)}</p>
          <p className="mt-1 text-5xl font-black text-accent">{formatMan(PRICING.rankingMonthly)}</p>
          <p className="mt-2 font-bold">
            월 글 {PRICING.rankingKeywords.toLocaleString()}개 발행 ({PRICING.rankingKeywords.toLocaleString()}개 키워드)
          </p>
          <p className="mt-3 text-sm text-mute">
            자체 컴퓨터 300대로 발행을 돌립니다. 키워드 하나에 트래픽을 쏟는 방식이 아닙니다. 광고 대행이 아니라 직접
            개발하고 실행하니까 이 가격입니다.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}
