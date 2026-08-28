import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  body,
  dark = false,
}: {
  kicker: string;
  title: ReactNode;
  body?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`display text-[0.95rem] tracking-[0.18em] ${dark ? "text-hot" : "text-accent"}`}>{kicker}</p>
      <h2 className={`mt-2 text-3xl font-black tracking-tight md:text-5xl ${dark ? "text-white" : ""}`}>{title}</h2>
      {body ? <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/65" : "text-paper-dim"}`}>{body}</p> : null}
    </div>
  );
}
