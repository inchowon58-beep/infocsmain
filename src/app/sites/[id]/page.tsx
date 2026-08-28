import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrowserFrame } from "@/components/BrowserFrame";
import { ContactForm } from "@/components/ContactForm";
import { displayHost, formatMan, formatWon } from "@/lib/format";
import { getSite } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const site = await getSite(id);
  return { title: site ? site.name : "사이트" };
}

export default async function SiteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const site = await getSite(id);
  if (!site || site.status !== "available") notFound();

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-8">
      <div>
        <p className="display text-sm text-accent">{site.industry}</p>
        <h1 className="mt-2 text-4xl font-black md:text-5xl">{site.name}</h1>
        <p className="mt-2 font-mono text-sm text-mute">{displayHost(site.url)}</p>
        {site.description ? <p className="mt-4 text-paper-dim">{site.description}</p> : null}

        <div className="mt-8">
          <BrowserFrame src={site.previewImage} alt={site.name} href={site.url} />
        </div>

        <div className="mt-6 overflow-hidden border border-line">
          <div className="border-b border-line bg-ink-2 px-4 py-2 text-xs font-bold text-mute">LIVE PREVIEW</div>
          <iframe
            title={`${site.name} 미리보기`}
            src={site.url}
            className="h-[480px] w-full bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
        <p className="mt-2 text-xs text-mute">
          일부 사이트는 보안 설정으로 미리보기가 비어 보일 수 있습니다. 그때는 새 창으로 확인하세요.
        </p>
      </div>

      <aside className="h-fit border border-line bg-ink-2 p-6">
        <p className="display text-sm text-mute">PRICE</p>
        <dl className="mt-4 space-y-4">
          <div>
            <dt className="text-sm text-mute">월 임대비용</dt>
            <dd className="text-3xl font-black">{formatMan(site.monthlyRent)}</dd>
            <dd className="text-xs text-mute">{formatWon(site.monthlyRent)}</dd>
          </div>
          <div>
            <dt className="text-sm text-mute">사이트 기본 셋팅비용</dt>
            <dd className="text-3xl font-black">{formatMan(site.setupCost)}</dd>
            <dd className="text-xs text-mute">{formatWon(site.setupCost)}</dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-col gap-2">
          <a href={site.url} target="_blank" rel="noreferrer" className="btn-accent text-center">
            실제 사이트 열기
          </a>
          <Link href="/sites" className="btn-ghost text-center">
            목록으로
          </Link>
        </div>
        <div className="mt-10 border-t border-line pt-6">
          <h2 className="font-black">이 사이트로 문의</h2>
          <div className="mt-4">
            <ContactForm defaultService="임대형 업종 사이트" defaultIndustry={site.industry} />
          </div>
        </div>
      </aside>
    </div>
  );
}
