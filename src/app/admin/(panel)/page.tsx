import Link from "next/link";
import { getInquiries, getSites } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const sites = await getSites();
  const inquiries = await getInquiries();
  const available = sites.filter((s) => s.status === "available").length;
  const unread = inquiries.filter((i) => !i.read).length;

  return (
    <div>
      <p className="display text-accent">DASHBOARD</p>
      <h1 className="mt-2 text-3xl font-black">관리자</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Stat label="등록 사이트" value={sites.length} href="/admin/sites" />
        <Stat label="임대 가능" value={available} href="/admin/sites" />
        <Stat label="새 문의" value={unread} href="/admin/inquiries" />
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/admin/sites/new" className="btn-accent">
          사이트 등록
        </Link>
        <Link href="/admin/inquiries" className="btn-ghost">
          문의 확인
        </Link>
      </div>
    </div>
  );
}

function Stat({ label, value, href }: { label: string; value: number; href: string }) {
  return (
    <Link href={href} className="border border-line bg-ink-2 p-6 hover:border-accent">
      <p className="text-sm text-mute">{label}</p>
      <p className="mt-2 text-5xl font-black">{value}</p>
    </Link>
  );
}
