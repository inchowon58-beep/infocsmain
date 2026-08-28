import type { Metadata } from "next";
import Link from "next/link";
import { KakaoButton } from "@/components/KakaoButton";
import { PRICING } from "@/lib/constants";
import { formatMan, formatWon } from "@/lib/format";

export const metadata: Metadata = { title: "요금" };

export default function PricingPage() {
  return (
    <div>
      <section className="stage-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="display text-[0.95rem] tracking-[0.18em] text-hot">PRICING</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">실행사는 마진을 붙이지 않습니다.</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            광고 대행이 아닙니다. 우리가 직접 개발하고 실행하니 최저 금액으로 효과를 보게 만듭니다. 셋팅 50만, 월
            1,000개 글 발행은 대행 기준 480만이 아니라 30만입니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <h2 className="text-xl font-black text-accent">웹문서 상위노출 자동화</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-line">
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
                <td className="px-5 py-4 text-paper-dim">상위노출 프로그램 이식 · 1회</td>
                <td className="px-5 py-4 font-black">
                  {formatMan(PRICING.rankingSetup)}
                  <span className="ml-2 text-xs font-normal text-mute">{formatWon(PRICING.rankingSetup)}</span>
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-5 py-4 font-black">월 발행</td>
                <td className="px-5 py-4 text-paper-dim">
                  웹문서 {PRICING.rankingKeywords.toLocaleString()}개 발행 · 자체 실행
                </td>
                <td className="px-5 py-4 font-black">
                  <span className="mr-2 text-mute line-through decoration-red-500 decoration-[3px]">
                    {formatMan(PRICING.rankingMonthlyCompare)}
                  </span>
                  <span className="text-2xl text-accent">{formatMan(PRICING.rankingMonthly)}</span>
                  <span className="ml-2 text-xs font-normal text-mute">{formatWon(PRICING.rankingMonthly)} / 월</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-16 text-xl font-black text-accent">임대형 업종 사이트</h2>
        <div className="mt-6 card p-6">
          <p className="font-black">월 임대 · 셋팅비는 사이트마다 다릅니다</p>
          <p className="mt-2 text-sm text-paper-dim">
            관리자가 등록한 금액이{" "}
            <Link href="/sites" className="font-bold text-accent">
              임대 사이트
            </Link>{" "}
            목록과 메인에 표시됩니다. 기본 가이드는 셋팅 {formatMan(PRICING.rankingSetup)} / 월{" "}
            {formatMan(PRICING.rankingMonthly)} 입니다.
          </p>
        </div>

        <KakaoButton className="mt-8">카카오톡 견적 문의</KakaoButton>
      </section>
    </div>
  );
}
