import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = { title: "문의" };

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="display text-accent">CONTACT</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">업종과 키워드를 알려주세요.</h1>
          <p className="mt-4 max-w-xl text-paper-dim">
            웹문서 상위노출, 브랜드블로그, 임대 사이트 모두 상담으로 시작합니다. 확인 후 연락드립니다.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8">
        <ContactForm />
        <div className="h-fit border border-line bg-ink-2 p-6 text-sm leading-7">
          <p className="display text-sm text-mute">OFFICE</p>
          <p className="mt-4 text-lg font-black">{COMPANY.legal}</p>
          <p>대표 {COMPANY.ceo}</p>
          <p>{COMPANY.address}</p>
          <p>{COMPANY.years}</p>
          <p>{COMPANY.domain}</p>
        </div>
      </section>
    </div>
  );
}
