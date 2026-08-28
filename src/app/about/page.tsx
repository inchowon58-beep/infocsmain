import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = { title: "회사소개" };

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="display text-accent">ABOUT</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            {COMPANY.name}
            <span className="display ml-3 text-accent">{COMPANY.nameEn}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-paper-dim">
            {COMPANY.founded}년부터 검색과 바이럴을 다뤄 온 광고회사입니다. 블로그, 카페, 워드프레스, 웹문서
            상위노출, 자동화, 인스타그램, 유튜브, 지식인 — 채널을 쪼개지 않고 한 회사에서 굴립니다.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 md:grid-cols-2 md:px-8">
        <div className="border border-line p-6">
          <p className="display text-sm text-mute">COMPANY</p>
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
        <div className="border border-line p-6">
          <p className="display text-sm text-mute">WHAT WE DO</p>
          <ul className="mt-4 space-y-2 font-bold">
            <li>네이버 웹문서 상위노출</li>
            <li>네이버 블로그 상위노출 · 브랜드블로그 월관리</li>
            <li>업종별 임대형 사이트</li>
            <li>워드프레스 제작</li>
            <li>카페 · 지식인 · 인스타 · 유튜브 · 자동화</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
