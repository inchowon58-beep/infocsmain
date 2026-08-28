import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = { title: "서비스" };

export default function ServicesPage() {
  return (
    <div>
      <section className="stage-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="text-xs font-extrabold tracking-[0.18em] text-hot">국내 유일 실행사</p>
          <h1 className="mt-3 text-3xl font-black md:text-6xl">광고 대행사가 아닙니다. 직접 실행합니다.</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            사이트에 상위노출 프로그램을 이식하고, 한 달에 1,000개 글을 웹문서로 올립니다. 네이버에서 검색하면 뜨게
            만드는 곳이 인포씨에스입니다. 이 방식으로 하는 곳은 지금 오직 인포씨에스가 유일합니다.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            ["프로그램 이식", "단순 사이트 제작이 아닙니다. 네이버에서 검색하면 상위노출되도록 시스템에 심습니다."],
            ["월 1,000개 글", "웹문서로 발행합니다. 블로그·카페처럼 아이디가 죽어 글이 사라지지 않습니다."],
            ["자체 300대", "기술력·정보력·장비를 직접 가진 유일한 웹문서 상위노출 실행사입니다."],
          ].map(([t, d]) => (
            <div key={t} className="card p-5">
              <h2 className="text-lg font-black">{t}</h2>
              <p className="mt-2 text-sm text-mute">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
