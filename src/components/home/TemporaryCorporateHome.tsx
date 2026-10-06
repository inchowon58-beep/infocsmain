import { KakaoButton } from "@/components/KakaoButton";
import { COMPANY } from "@/lib/constants";

const SERVICES = [
  {
    title: "홈페이지 제작",
    body: "기업, 브랜드, 매장 및 서비스에 맞는 반응형 홈페이지를 제작합니다. PC와 모바일 환경을 고려하여 사용자가 편리하게 이용할 수 있는 웹사이트를 구축합니다.",
  },
  {
    title: "웹 운영 솔루션",
    body: "웹사이트 운영에 필요한 콘텐츠 관리 및 다양한 기능을 비즈니스 환경에 맞게 제공합니다.",
  },
  {
    title: "디지털 콘텐츠",
    body: "온라인 환경에 필요한 콘텐츠 제작과 운영을 지원합니다.",
  },
  {
    title: "유지관리",
    body: "제작된 홈페이지가 안정적으로 운영될 수 있도록 유지관리 서비스를 제공합니다.",
  },
] as const;

export function TemporaryCorporateHome() {
  return (
    <div className="bg-white">
      <section className="border-b border-line bg-[#f7f8f7]">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-sm font-bold tracking-wide text-mute">{COMPANY.legal}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-paper md:text-6xl">
            웹사이트 제작과
            <br />
            디지털 비즈니스 솔루션을 제공합니다.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper-dim md:text-lg">
            기업과 브랜드에 필요한 홈페이지 제작부터
            <br className="hidden md:block" />
            콘텐츠 관리 및 웹 운영 시스템까지
            <br className="hidden md:block" />
            비즈니스 환경에 맞는 디지털 서비스를 제공합니다.
          </p>
          <div className="mt-10">
            <KakaoButton>상담문의</KakaoButton>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="text-2xl font-black md:text-4xl">서비스</h2>
        <p className="mt-3 text-paper-dim">필요한 범위에 맞춰 제작과 운영을 지원합니다.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SERVICES.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-t border-line bg-[#f7f8f7]">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-2xl font-black md:text-4xl">회사소개</h2>
          <p className="mt-6 text-2xl font-black">{COMPANY.legal}</p>
          <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-mute">상호</dt>
              <dd className="mt-1 font-bold">{COMPANY.legal}</dd>
            </div>
            <div>
              <dt className="text-mute">사업자등록번호</dt>
              <dd className="mt-1 font-bold">{COMPANY.bizNo}</dd>
            </div>
            <div>
              <dt className="text-mute">주소</dt>
              <dd className="mt-1 font-bold">{COMPANY.address}</dd>
            </div>
            <div>
              <dt className="text-mute">운영</dt>
              <dd className="mt-1 font-bold">{COMPANY.years}</dd>
            </div>
            <div>
              <dt className="text-mute">웹사이트</dt>
              <dd className="mt-1 font-bold">{COMPANY.domain}</dd>
            </div>
          </dl>
          <div className="mt-10">
            <KakaoButton>상담문의</KakaoButton>
          </div>
        </div>
      </section>
    </div>
  );
}
