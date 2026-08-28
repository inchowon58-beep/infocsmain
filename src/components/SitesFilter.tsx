import Link from "next/link";

export function SitesFilter({ industries, current }: { industries: string[]; current?: string }) {
  const chip = (active: boolean) =>
    `px-3 py-1.5 text-sm font-bold rounded-full border ${active ? "border-accent bg-accent text-white" : "border-line bg-white text-paper-dim hover:border-accent"}`;

  return (
    <div className="flex flex-wrap gap-2">
      <Link href="/sites" className={chip(!current)}>
        전체
      </Link>
      {industries.map((ind) => (
        <Link key={ind} href={`/sites?industry=${encodeURIComponent(ind)}`} className={chip(current === ind)}>
          {ind}
        </Link>
      ))}
    </div>
  );
}
