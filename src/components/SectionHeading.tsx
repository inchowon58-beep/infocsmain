import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: ReactNode;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="display text-sm text-accent">{kicker}</p>
      <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-paper-dim">{body}</p> : null}
    </div>
  );
}
