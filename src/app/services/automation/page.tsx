import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = { title: "자동화" };

export default function AutomationPage() {
  return (
    <ServiceLayout
      en="AUTOMATION"
      title="발행 · 운영 자동화"
      lead="사람이 매번 눌러야 하는 발행을 줄입니다. 월관리가 끊기지 않도록 발행·배포 흐름을 붙입니다."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {["키워드 발행 스케줄", "채널별 배포 루틴", "월 리포트 흐름"].map((t) => (
          <div key={t} className="border border-line p-5 font-black">
            {t}
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-mute">기존 상위노출·블로그 월관리와 함께 설계합니다. 범위는 상담 후 확정.</p>
    </ServiceLayout>
  );
}
