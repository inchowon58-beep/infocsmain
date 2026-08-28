export function BrowserFrame({
  src,
  alt,
  href,
}: {
  src?: string;
  alt: string;
  href?: string;
}) {
  const inner = src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
  ) : (
    <div className="flex h-full w-full items-end bg-[linear-gradient(160deg,#e7f2ef,#f4f1ea_55%,#efe6d4)] p-5">
      <div>
        <p className="display text-4xl text-accent">PREVIEW</p>
        <p className="text-sm text-mute">미리보기 이미지를 등록하면 여기에 표시됩니다.</p>
      </div>
    </div>
  );

  return (
    <div className="overflow-hidden border border-line bg-ink-2">
      <div className="flex items-center gap-1.5 border-b border-line bg-navy px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        {href ? (
          <span className="ml-2 truncate font-mono text-[11px] text-white/60">{href.replace(/^https?:\/\//, "")}</span>
        ) : null}
      </div>
      <div className="aspect-[16/10]">{inner}</div>
    </div>
  );
}
