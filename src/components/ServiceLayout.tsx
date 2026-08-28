import type { ReactNode } from "react";
import { KakaoButton } from "@/components/KakaoButton";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/constants";

export function ServiceLayout({
  slug,
  en,
  title,
  lead,
  children,
}: {
  slug: string;
  en: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  const service = SERVICES.find((s) => s.slug === slug);

  return (
    <div>
      <section className="stage-dark">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <span className="icon-wrap">
            <ServiceIcon name={service?.icon ?? slug} />
          </span>
          <p className="mt-4 display text-[0.95rem] tracking-[0.18em] text-hot">{en}</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-black tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{lead}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">{children}</section>
      <section className="cta-band text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-2xl font-black md:text-3xl">대행이 아닙니다. 직접 실행합니다. 카카오로 문의하세요.</p>
          <KakaoButton>카카오톡 문의하기</KakaoButton>
        </div>
      </section>
    </div>
  );
}
