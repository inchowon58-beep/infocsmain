import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = { title: "카페" };

export default function CafePage() {
  return (
    <ServiceLayout
      en="CAFE"
      title="네이버 카페 바이럴"
      lead="지역·업종 카페에서 자연스럽게 노출되도록 운영합니다. 검색만으로 안 되는 입소문 자리를 채웁니다."
    >
      <ul className="grid gap-3 md:grid-cols-2">
        {[
          "업종·지역 카페 선정과 계정 운영",
          "후기·정보성 배포 톤 맞춤",
          "블로그·웹문서 상위노출과 동시 운영",
          "월 단위 발행량 협의",
        ].map((item) => (
          <li key={item} className="border border-line px-5 py-4 font-bold">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-mute">카페 운영 단가는 채널 수와 발행량에 따라 상담 후 안내합니다.</p>
    </ServiceLayout>
  );
}
