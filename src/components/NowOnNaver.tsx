import { BLOG_SHIFT_INDUSTRIES, NOW_ON_NAVER } from "@/lib/constants";

export function NowOnNaver() {
  return (
    <section className="stage-dark">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-xs font-extrabold tracking-[0.18em] text-hot">NOW ON NAVER</p>
        <h2 className="mt-4 max-w-5xl text-[1.85rem] font-black leading-tight md:text-5xl">
          {NOW_ON_NAVER.hook}
          <br />
          <span className="text-accent">{NOW_ON_NAVER.hookAsk}</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg font-bold text-white">{NOW_ON_NAVER.mass}</p>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">{NOW_ON_NAVER.pain}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {BLOG_SHIFT_INDUSTRIES.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-bold text-white/85"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70">{NOW_ON_NAVER.result}</p>
      </div>
    </section>
  );
}
