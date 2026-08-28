import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = { title: "지식인" };

export default function KinPage() {
  return (
    <ServiceLayout
      en="NAVER KIN"
      title="네이버 지식인"
      lead="사람들이 실제로 던지는 질문에 답하며 노출됩니다. 검색 신뢰와 유입을 같이 가져옵니다."
    >
      <p className="max-w-2xl text-paper-dim">
        업종 질문 선정, 답변 톤, 랜딩 연결까지 월관리로 운영합니다. 지식인만 단독으로, 또는 블로그·웹문서와 묶어
        진행할 수 있습니다.
      </p>
      <p className="mt-8 text-sm text-mute">답변 건수와 업종 난이도에 따라 상담 후 안내합니다.</p>
    </ServiceLayout>
  );
}
