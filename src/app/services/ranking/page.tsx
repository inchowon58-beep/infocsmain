import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { PRICING } from "@/lib/constants";
import { formatMan } from "@/lib/format";

export const metadata: Metadata = { title: "네이버 웹문서 상위노출" };

export default function RankingPage() {
  return (
    <ServiceLayout
      en="WEB DOCUMENT RANK"
      title="네이버 웹문서 상위노출"
      lead="검색창에 키워드를 쳤을 때, 웹문서 자리에 사이트가 뜨도록 셋팅하고 매달 키워드를 발행합니다."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-line p-6">
          <p className="display text-accent">01 SETUP</p>
          <p className="mt-4 text-5xl font-black">{formatMan(PRICING.rankingSetup)}</p>
          <p className="mt-2 font-bold">사이트 기본 셋팅 · 1회</p>
          <p className="mt-3 text-sm text-mute">
            업종 페이지 구성, 기본 SEO, 발행 구조까지 웹문서 상위노출에 맞게 세팅합니다.
          </p>
        </div>
        <div className="border border-line p-6">
          <p className="display text-accent">02 MONTHLY</p>
          <p className="mt-4 text-5xl font-black">{formatMan(PRICING.rankingMonthly)}</p>
          <p className="mt-2 font-bold">월 발행 · 키워드 {PRICING.rankingKeywords.toLocaleString()}개</p>
          <p className="mt-3 text-sm text-mute">
            매달 키워드를 찍어 올립니다. 검색이 끊기지 않게 물량을 유지하는 것이 핵심입니다.
          </p>
        </div>
      </div>
      <ul className="mt-10 grid gap-3 text-sm text-paper-dim md:grid-cols-3">
        <li className="border border-line p-4">업종·지역 키워드 설계</li>
        <li className="border border-line p-4">사이트 셋팅 후 바로 발행 시작</li>
        <li className="border border-line p-4">임대형 사이트와 같이 운영 가능</li>
      </ul>
    </ServiceLayout>
  );
}
