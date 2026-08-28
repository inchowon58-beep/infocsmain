import { PRICING } from "@/lib/constants";
import { formatMan } from "@/lib/format";

export function MonthlyPrice({ light = false }: { light?: boolean }) {
  return (
    <div className={light ? "price-punch price-punch-light" : "price-punch"}>
      <p className="price-punch-kicker">웹문서 발행비용</p>
      <p className="price-was-label">광고 대행사라면</p>
      <p className="price-was">{formatMan(PRICING.rankingMonthlyCompare)}</p>
      <p className="price-punch-amt">{formatMan(PRICING.rankingMonthly)}</p>
      <p className="price-punch-sub">월 · 글 {PRICING.rankingKeywords.toLocaleString()}개 발행</p>
      <p className="price-punch-why">광고 대행이 아닙니다. 직접 개발하고 실행하니까.</p>
    </div>
  );
}
