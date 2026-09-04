export function SectionLabel({
  num,
  label,
  dark = false,
}: {
  num: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`display text-xl ${dark ? "text-hot" : "text-accent"}`}
      >
        {num}
      </span>
      <span className={`text-xs font-extrabold tracking-[0.16em] ${dark ? "text-white/60" : "text-mute"}`}>
        {label}
      </span>
    </div>
  );
}
