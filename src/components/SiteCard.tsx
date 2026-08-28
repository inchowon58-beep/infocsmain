import Link from "next/link";
import type { RentalSite } from "@/lib/types";
import { displayHost, formatMan } from "@/lib/format";
import { BrowserFrame } from "./BrowserFrame";
import { KakaoButton } from "./KakaoButton";

export function SiteCard({ site }: { site: RentalSite }) {
  return (
    <article className="card group">
      <Link href={`/sites/${site.id}`} className="block">
        <BrowserFrame src={site.previewImage} alt={site.name} href={site.url} />
      </Link>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-extrabold text-white">{site.industry}</span>
          <span className="display text-sm text-mute">RENT</span>
        </div>
        <h3 className="text-xl font-black tracking-tight">{site.name}</h3>
        <p className="font-mono text-xs text-mute">{displayHost(site.url)}</p>
        <div className="grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
          <div>
            <p className="text-mute">월 임대</p>
            <p className="font-black">{formatMan(site.monthlyRent)}</p>
          </div>
          <div>
            <p className="text-mute">기본 셋팅</p>
            <p className="font-black">{formatMan(site.setupCost)}</p>
          </div>
        </div>
        <div className="flex gap-2 pt-1">
          <Link href={`/sites/${site.id}`} className="btn-ghost flex-1 py-2 text-center text-xs">
            미리보기
          </Link>
          <a
            href={site.url}
            target="_blank"
            rel="noreferrer"
            className="btn-accent flex-1 py-2 text-center text-xs"
          >
            사이트 열기
          </a>
        </div>
      </div>
    </article>
  );
}

export function EmptySites() {
  return (
    <div className="card border-dashed px-6 py-16 text-center">
      <p className="display text-4xl text-mute">NO LISTINGS</p>
      <p className="mt-3 text-paper-dim">
        현재 등록된 임대 사이트가 없습니다. 문의 주시면 업종에 맞게 안내합니다.
      </p>
      <KakaoButton className="mt-6">카카오톡 문의하기</KakaoButton>
    </div>
  );
}
