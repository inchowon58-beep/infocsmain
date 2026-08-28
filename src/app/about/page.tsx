import type { Metadata } from "next";
import { KakaoButton } from "@/components/KakaoButton";
import { CAREER, COMPANY, MANAGED_INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = { title: "회사소개" };

export default function AboutPage() {
  return (
    <div>
      <section className="stage-dark">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-20">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={COMPANY.ceoImage}
              alt={`${COMPANY.ceo} 대표`}
              className="mx-auto h-auto w-full max-w-md object-contain object-bottom"
            />
          </div>
          <div>
            <p className="display text-[0.95rem] tracking-[0.18em] text-hot">CEO</p>
            <h1 className="mt-2 text-4xl font-black md:text-6xl">{COMPANY.ceo}</h1>
            <p className="mt-2 text-lg font-bold text-accent">
              {COMPANY.legal} 대표 · 국내 유일 웹문서 상위노출 실행사
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              광고 대행사가 아닙니다. 2017년부터 웹문서 상위노출을 직접 실행해 온 {COMPANY.name} 대표입니다. 네이버에서
              검색하면 뜨는 사이트를 만들고, 한 달에 1,000개 글을 웹문서로 올립니다. 고객은 최저 금액으로 효과를 보게
              만드는 것이 일입니다.
            </p>
            <KakaoButton className="mt-6">카카오톡 문의하기</KakaoButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <h2 className="text-2xl font-black">경력</h2>
        <ul className="mt-6 space-y-3">
          {CAREER.map((item) => (
            <li key={item.title} className="card flex flex-col gap-1 p-5 md:flex-row md:items-baseline md:gap-4">
              <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-extrabold text-accent">
                {item.when}
              </span>
              <div>
                <p className="font-black">{item.title}</p>
                <p className="mt-1 text-sm text-mute">{item.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink-2">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 md:grid-cols-2 md:px-8">
          <div className="card p-6">
            <p className="text-xs font-extrabold tracking-wide text-mute">COMPANY</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-mute">상호</dt>
                <dd className="text-lg font-black">{COMPANY.legal}</dd>
              </div>
              <div>
                <dt className="text-mute">대표</dt>
                <dd className="font-bold">{COMPANY.ceo}</dd>
              </div>
              <div>
                <dt className="text-mute">주소</dt>
                <dd className="font-bold">{COMPANY.address}</dd>
              </div>
              <div>
                <dt className="text-mute">운영</dt>
                <dd className="font-bold">{COMPANY.years}</dd>
              </div>
              <div>
                <dt className="text-mute">웹사이트</dt>
                <dd className="font-bold">{COMPANY.domain}</dd>
              </div>
            </dl>
          </div>
          <div className="card p-6">
            <p className="text-xs font-extrabold tracking-wide text-mute">WHAT WE DO</p>
            <ul className="mt-4 space-y-2 font-bold">
              <li>국내 유일 네이버 웹문서 상위노출 실행사</li>
              <li>광고 대행사 아님 · 직접 실행</li>
              <li>프로그램 이식 + 월 1,000개 웹문서 발행</li>
              <li>자체 컴퓨터 300대 보유</li>
              <li>업종 사이트 임대·월관리</li>
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-mute">
              기술력, 정보력, 장비를 직접 가지고 있습니다. 대행 마진 없이 최저 금액으로 효과가 나게 만듭니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <h2 className="text-2xl font-black">우리가 하는 일</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-paper-dim">
          <p>
            인포씨에스는 광고를 받아서 다른 곳에 넘기지 않습니다. 사이트에 상위노출 프로그램을 이식하고, 한 달에
            1,000개 글을 웹문서로 올립니다. 자체 컴퓨터 300대로 실행합니다.
          </p>
          <p>
            네이버 아이디를 사서 돌리는 방식은 정보통신망법 위반입니다. 광고주까지 처벌 대상이 될 수 있습니다. 합법적인
            웹문서 방식으로, 마음 편하게 진행하십시오.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <h2 className="text-2xl font-black">현재 임대·관리 업종</h2>
        <p className="mt-3 text-sm text-mute">아래 업종 사이트를 포함해 웹문서 상위노출 기준으로 운영하고 있습니다.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {MANAGED_INDUSTRIES.map((item) => (
            <span key={item} className="rounded-full border border-line bg-ink-2 px-3 py-1.5 text-sm font-bold">
              {item}
            </span>
          ))}
          <span className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-bold text-accent">외 다수</span>
        </div>
      </section>
    </div>
  );
}
