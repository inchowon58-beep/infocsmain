import type { RentalSite } from "@/lib/types";
import { displayHost } from "@/lib/format";

const FALLBACK = [
  { query: "강아지분양", title: "업종 사이트 · 웹문서 노출", host: "실행 중인 사이트", href: "/sites" },
  { query: "동물병원", title: "업종 사이트 · 웹문서 노출", host: "실행 중인 사이트", href: "/sites" },
  { query: "개인회생", title: "업종 사이트 · 웹문서 노출", host: "실행 중인 사이트", href: "/sites" },
];

export function SearchProof({ sites }: { sites: RentalSite[] }) {
  const examples =
    sites.length > 0
      ? sites.slice(0, 3).map((site) => ({
          query: site.industry,
          title: site.name,
          host: displayHost(site.url),
          href: site.url,
        }))
      : FALLBACK;

  return (
    <div>
        <p className="text-xs font-extrabold tracking-wide text-accent">SEARCH</p>
        <p className="mt-3 max-w-2xl text-sm text-paper-dim">
          블로그·카페 글이 아닙니다. 홈페이지·랜딩 웹문서를 대량으로 올려 뷰탭에 붙입니다. 사이트를 직접 열어보시면 됩니다.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {examples.map((item) => (
            <article key={`${item.query}-${item.host}`} className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
              <div className="border-b border-line bg-[#f5f6f5] px-4 py-3">
                <p className="rounded-full bg-white px-3 py-2 text-sm font-bold text-paper shadow-sm">
                  {item.query}
                </p>
                <div className="mt-3 flex gap-4 text-xs font-extrabold">
                  <span className="text-mute">통합</span>
                  <span className="border-b-2 border-accent pb-1 text-accent">VIEW</span>
                  <span className="text-mute">이미지</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[11px] font-extrabold tracking-wide text-mute">웹문서</p>
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-1 block text-lg font-black text-[#1a73e8]">
                  {item.title}
                </a>
                <p className="mt-1 font-mono text-xs text-accent">{item.host}</p>
                <p className="mt-2 text-sm leading-relaxed text-mute">
                  {item.query} 검색 시 웹문서로 노출되도록 실행 중인 사이트입니다. 아이디가 죽어 글이 사라지지 않습니다.
                </p>
              </div>
            </article>
          ))}
        </div>
    </div>
  );
}
