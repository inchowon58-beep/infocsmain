import type { Metadata } from "next";
import Link from "next/link";
import { PRICING } from "@/lib/constants";
import { formatMan, formatWon } from "@/lib/format";

export const metadata: Metadata = { title: "요금" };

export default function PricingPage() {
  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="display text-accent">PRICING</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">숫자는 단순하게.</h1>
          <p className="mt-4 max-w-2xl text-paper-dim">
            웹문서 상위노출과 브랜드블로그는 기본가가 있습니다. 임대 사이트는 관리자가 등록한 금액이 그대로
            메인과 목록에 나갑니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <h2 className="display text-2xl text-accent">WEB RANKING</h2>
        <div className="mt-6 overflow-hidden border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-2 text-mute">
              <tr>
                <th className="px-5 py-3 font-bold">항목</th>
                <th className="px-5 py-3 font-bold">내용</th>
                <th className="px-5 py-3 font-bold">금액</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-line">
                <td className="px-5 py-4 font-black">사이트 셋팅</td>
                <td className="px-5 py-4 text-paper-dim">네이버 웹문서 상위노출 기본 셋팅 · 1회</td>
                <td className="px-5 py-4 font-black">
                  {formatMan(PRICING.rankingSetup)}
                  <span className="ml-2 text-xs font-normal text-mute">{formatWon(PRICING.rankingSetup)}</span>
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-5 py-4 font-black">월 발행</td>
                <td className="px-5 py-4 text-paper-dim">키워드 {PRICING.rankingKeywords.toLocaleString()}개</td>
                <td className="px-5 py-4 font-black">
                  {formatMan(PRICING.rankingMonthly)}
                  <span className="ml-2 text-xs font-normal text-mute">{formatWon(PRICING.rankingMonthly)} / 월</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="display mt-16 text-2xl text-accent">BRAND BLOG</h2>
        <div className="mt-6 overflow-hidden border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-2 text-mute">
              <tr>
                <th className="px-5 py-3 font-bold">항목</th>
                <th className="px-5 py-3 font-bold">내용</th>
                <th className="px-5 py-3 font-bold">금액</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-line">
                <td className="px-5 py-4 font-black">브랜드블로그 월관리</td>
                <td className="px-5 py-4 text-paper-dim">한 달 {PRICING.brandBlogPosts}개 포스팅</td>
                <td className="px-5 py-4 font-black">
                  {formatMan(PRICING.brandBlogMonthly)}
                  <span className="ml-2 text-xs font-normal text-mute">{formatWon(PRICING.brandBlogMonthly)} / 월</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="display mt-16 text-2xl text-accent">RENTAL</h2>
        <div className="mt-6 border border-line p-6">
          <p className="font-black">임대형 업종 사이트</p>
          <p className="mt-2 text-sm text-paper-dim">
            월 임대비용과 사이트 기본 셋팅비용은 사이트마다 다릅니다. 관리자에서 등록한 금액이{" "}
            <Link href="/sites" className="font-bold text-accent">
              임대 사이트
            </Link>{" "}
            목록과 메인에 표시됩니다. 기본 가이드는 웹문서 셋팅 {formatMan(PRICING.rankingSetup)} / 월{" "}
            {formatMan(PRICING.rankingMonthly)} 입니다.
          </p>
        </div>

        <p className="mt-10 text-sm text-mute">
          카페 · 워드프레스 제작 · 인스타 · 유튜브 · 지식인 · 자동화는 범위 확인 후 견적입니다.
        </p>
        <Link href="/contact" className="btn-accent mt-6 inline-flex">
          견적 문의
        </Link>
      </section>
    </div>
  );
}
