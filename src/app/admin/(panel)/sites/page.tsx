import Link from "next/link";
import { formatMan } from "@/lib/format";
import { getSites } from "@/lib/store";
import { DeleteSiteButton } from "@/components/admin/DeleteSiteButton";

export const dynamic = "force-dynamic";

const STATUS: Record<string, string> = {
  available: "임대가능",
  rented: "임대중",
  hidden: "비공개",
};

export default async function AdminSitesPage() {
  const sites = await getSites();

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="display text-accent">SITES</p>
          <h1 className="mt-1 text-3xl font-black">임대 사이트</h1>
        </div>
        <Link href="/admin/sites/new" className="btn-accent">
          새로 등록
        </Link>
      </div>
      <div className="mt-8 overflow-x-auto border border-line">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-ink-2 text-mute">
            <tr>
              <th className="px-4 py-3">사이트</th>
              <th className="px-4 py-3">업종</th>
              <th className="px-4 py-3">월임대</th>
              <th className="px-4 py-3">셋팅</th>
              <th className="px-4 py-3">상태</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {sites.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-mute">
                  등록된 사이트가 없습니다.
                </td>
              </tr>
            ) : (
              sites.map((s) => (
                <tr key={s.id} className="border-t border-line">
                  <td className="px-4 py-3">
                    <p className="font-black">{s.name}</p>
                    <p className="font-mono text-xs text-mute">{s.url}</p>
                  </td>
                  <td className="px-4 py-3">{s.industry}</td>
                  <td className="px-4 py-3 font-bold">{formatMan(s.monthlyRent)}</td>
                  <td className="px-4 py-3 font-bold">{formatMan(s.setupCost)}</td>
                  <td className="px-4 py-3">{STATUS[s.status]}</td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/admin/sites/${s.id}`} className="mr-3 font-bold text-accent">
                      수정
                    </Link>
                    <DeleteSiteButton id={s.id} name={s.name} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
