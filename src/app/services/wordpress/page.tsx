import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = { title: "워드프레스 사이트 제작" };

export default function WordpressPage() {
  return (
    <ServiceLayout
      en="WORDPRESS"
      title="워드프레스 사이트 제작"
      lead="업종에 맞는 워드프레스 사이트를 만듭니다. 보여주기용이 아니라, 검색·전환·월관리가 붙는 구조로 제작합니다."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["업종 맞춤", "병원, 인테리어, 학원, 법률 등 업종 페이지 구성."],
          ["검색 연동", "웹문서 상위노출·블로그와 연결되는 정보 구조."],
          ["임대 가능", "제작 후 월 임대로 운영하는 형태도 가능합니다."],
        ].map(([t, d]) => (
          <div key={t} className="border border-line p-5">
            <h2 className="text-xl font-black">{t}</h2>
            <p className="mt-2 text-sm text-mute">{d}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-mute">제작 범위와 금액은 페이지 수·기능에 따라 상담 후 견적입니다.</p>
    </ServiceLayout>
  );
}
