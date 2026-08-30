import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MANAGED_INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = { title: "99% 상위노출 사이트 제작" };

export default function RankSitePage() {
  return (
    <ServiceLayout
      slug="sites"
      en="99% RANK SITE"
      title="네이버 99% 상위노출 사이트 제작의 비밀"
      lead="단순 사이트 제작이 아닙니다. 네이버에서 검색하면 뜨도록 프로그램을 이식한 사이트를 만듭니다. 예쁘기만 한 홈페이지는 만들지 않습니다."
    >
      <div className="max-w-3xl space-y-4 text-base leading-relaxed text-paper-dim">
        <p>
          고객이 네이버에서 업종을 검색합니다. 뷰탭에 사이트가 뜹니다. 그 사이트로 들어옵니다. 문의가 생기고, 수익이
          납니다. 인포씨에스가 만드는 사이트는 그 흐름을 위해 존재합니다.
        </p>
        <p>
          상위노출 자동화 프로그램을 사이트에 심고, 한 달에 1,000개 글을 웹문서로 노출합니다. 광고 대행사가 받아서
          넘기는 구조가 아닙니다. 국내 유일 실행사가 직접 돌립니다.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          ["프로그램 이식", "네이버 웹문서 상위노출이 되도록 시스템을 사이트에 직접 심습니다."],
          ["월 글 1,000개 발행 (1,000개 키워드)", "블로그 아이디가 죽어서 글이 날아가는 구조가 아닙니다. 사이트에 남습니다."],
          ["최저 금액으로 효과", "대행 마진이 없습니다. 자체 장비 300대로 실행하니 비용이 낮습니다."],
        ].map(([t, d]) => (
          <div key={t} className="card p-5">
            <h2 className="text-lg font-black">{t}</h2>
            <p className="mt-2 text-sm text-mute">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-black">이런 업종 사이트를 실행·임대하고 있습니다</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {MANAGED_INDUSTRIES.map((item) => (
            <span key={item} className="rounded-full border border-line bg-ink-2 px-3 py-1.5 text-sm font-bold">
              {item}
            </span>
          ))}
        </div>
      </div>
    </ServiceLayout>
  );
}
