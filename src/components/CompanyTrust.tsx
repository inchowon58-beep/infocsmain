import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const FACTS = [
  { label: "상호", value: COMPANY.legal },
  { label: "대표", value: COMPANY.ceo },
  { label: "사업자등록번호", value: COMPANY.bizNo, accent: true },
  { label: "설립", value: `${COMPANY.founded}년` },
  { label: "주소", value: COMPANY.address },
  { label: "웹사이트", value: COMPANY.domain, href: `https://${COMPANY.domain}` },
] as const;

export function CompanyTrust() {
  return (
    <section className="bg-[#f4f5f4]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="trust-card grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-extrabold text-white">
              어떤회사?
            </span>
            <h2 className="mt-5 text-[1.85rem] font-black leading-tight tracking-tight md:text-5xl">
              어떤 회사인지,
              <br />
              <span className="text-accent">직접 확인</span>하세요.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper">
              2017년부터 웹문서 상위노출을 직접 실행하는 곳입니다. 광고를 받아서 넘기지 않습니다. 사업자등록번호와
              주소, 그리고 지금 돌아가고 있는 사이트를 그대로 확인하시면 됩니다.
            </p>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-paper-dim">
              네이버 아이디를 사서 돌리는 작업은 하지 않습니다. 사이트에 글을 남기는 방식입니다.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center rounded-full bg-black px-5 py-3 text-sm font-extrabold text-white"
            >
              + 사업자·회사 정보 자세히
            </Link>
          </div>
          <dl>
            {FACTS.map((item) => (
              <div key={item.label} className="trust-row">
                <dt className="trust-label">{item.label}</dt>
                <dd className={`trust-value ${"accent" in item && item.accent ? "text-accent" : ""}`}>
                  {"href" in item && item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
