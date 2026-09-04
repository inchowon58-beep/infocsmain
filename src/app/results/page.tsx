import type { Metadata } from "next";
import { KakaoButton } from "@/components/KakaoButton";
import { NaverReports } from "@/components/NaverReports";
import { SearchAsset } from "@/components/SearchAsset";

export const metadata: Metadata = { title: "실측 레퍼런스" };

export default function ResultsPage() {
  return (
    <div>
      <section className="stage-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs font-extrabold tracking-[0.18em] text-hot">60일 실측 · 서치어드바이저</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">숫자로 먼저 보여드립니다</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            말보다 그래프입니다. 실행 중인 사이트의 네이버 서치어드바이저 화면을 그대로 올렸습니다. 광고를 끊으면
            멈추지만, 웹문서는 사이트에 남아 노출이 쌓입니다.
          </p>
          <div className="mt-8">
            <KakaoButton>카톡 상담</KakaoButton>
          </div>
        </div>
      </section>

      <NaverReports />
      <SearchAsset />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="text-3xl font-black md:text-5xl">왜 지금 서둘러야 할까요?</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="card p-7">
            <p className="display text-2xl text-accent">01</p>
            <h3 className="mt-3 text-2xl font-black">검색 자리는 하루라도 빨리 선점해야 합니다</h3>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              웹문서는 네이버에 붙기까지 시간이 걸립니다. 경쟁사보다 먼저 자리를 잡으면 뒤에서 밀어내기가 어렵습니다.
              늦어질수록 상위 자리를 내주게 됩니다.
            </p>
          </article>
          <article className="card p-7">
            <p className="display text-2xl text-accent">02</p>
            <h3 className="mt-3 text-2xl font-black">매달 쓰던 광고비를, 사이트 실행으로 바꿉니다</h3>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              키워드 하나 수십만 원짜리 광고를 끊으면 노출이 같이 끊깁니다. 위 실측처럼 웹문서는 사이트에 남아 검색
              유입이 계속 쌓입니다. 셋팅 50만 · 월 30만입니다.
            </p>
          </article>
        </div>
      </section>

      <section className="cta-band text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div>
            <p className="text-sm font-extrabold text-white/80">실측을 확인하셨으면</p>
            <h2 className="mt-2 text-3xl font-black md:text-5xl">업종과 키워드를 알려주세요.</h2>
          </div>
          <KakaoButton>카톡 상담</KakaoButton>
        </div>
      </section>
    </div>
  );
}
