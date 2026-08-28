import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = { title: "인스타그램 · 유튜브" };

export default function SnsPage() {
  return (
    <ServiceLayout
      en="INSTAGRAM / YOUTUBE"
      title="인스타그램 · 유튜브"
      lead="검색 바깥의 접점을 만듭니다. 숏폼·피드·영상 채널을 브랜드 자산으로 쌓고, 네이버 바이럴과 연결합니다."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-line p-6">
          <p className="display text-accent">INSTAGRAM</p>
          <p className="mt-4 text-sm text-mute">피드·릴스 운영, 업종 톤 유지, 랜딩(사이트·블로그)으로 연결.</p>
        </div>
        <div className="border border-line p-6">
          <p className="display text-accent">YOUTUBE</p>
          <p className="mt-4 text-sm text-mute">채널 세팅, 영상 발행 리듬, 검색 키워드와 맞춘 제목·설명.</p>
        </div>
      </div>
      <p className="mt-8 text-sm text-mute">채널 수와 발행 주기에 따라 상담 후 견적입니다.</p>
    </ServiceLayout>
  );
}
