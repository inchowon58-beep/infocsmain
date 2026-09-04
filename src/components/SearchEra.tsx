import { NowOnNaver } from "@/components/NowOnNaver";
import { SearchAsset } from "@/components/SearchAsset";
import { NaverReports } from "@/components/NaverReports";

export function SearchEra() {
  return (
    <div>
      <NowOnNaver />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "01",
              "검색엔진은 이미 변했습니다",
              "지금 네이버 상위에 홈페이지·랜딩페이지가 많이 보입니다. 예전에 먹히던 블로그 상위노출 감각으로는 따라가지 못합니다.",
            ],
            [
              "02",
              "방식도 같이 바꿔야 합니다",
              "검색이 바뀌었는데 광고만 예전 그대로면 결과는 점점 멀어집니다. 지금 엔진이 어떻게 바뀌는지 알고 따라가야 합니다.",
            ],
            [
              "03",
              "파도에 몸을 실어야 합니다",
              "유행에 몸을 맡겨야 함께 나아갈 수 있습니다. 혼자 예전을 고집하면 성공은 점점 멀어집니다.",
            ],
          ].map(([n, t, d]) => (
            <div key={n} className="card p-6">
              <p className="display text-2xl text-accent">{n}</p>
              <h3 className="mt-3 text-xl font-black">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <SearchAsset />
      <NaverReports />

      <section className="bg-ink-2">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="text-xs font-extrabold tracking-wide text-accent">NOT ONE KEYWORD</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-black md:text-4xl">키워드 하나 띄워 1등하던 시기도 아닙니다.</h2>
          <p className="mt-4 max-w-2xl text-paper-dim">
            웹문서 상위노출은 대량 키워드를 네이버 검색에 올리는 작업입니다. 다른 업체처럼 키워드 하나 월정액으로 수십만
            원 받지 않습니다.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-line bg-white p-7">
              <p className="text-xs font-extrabold tracking-wide text-mute">OTHERS</p>
              <h3 className="mt-2 text-2xl font-black">키워드 하나 · 월 수십만 원</h3>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                단일 키워드는 경쟁이 치열합니다. 비용 대비 효율이 떨어질 수밖에 없습니다. 트래픽·백링크는 계속 넣지
                않으면 노출이 떨어집니다.
              </p>
            </div>
            <div className="rounded-3xl border border-accent/30 bg-[#06140c] p-7 text-white">
              <p className="text-xs font-extrabold tracking-wide text-hot">INFOCS</p>
              <h3 className="mt-2 text-2xl font-black">대량 키워드 · 월 글 1,000개</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                메인 키워드만 노리지 않습니다. 메인 키워드와 세부 키워드를 함께 올려, 검색으로 들어오는 방문 고객을
                최대한 붙잡아 둡니다. 자연 유입으로 사이트 신뢰가 쌓이면, 이후에도 과도한 트래픽 없이 상위노출이
                유지됩니다.
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-paper-dim">
            메인 키워드도 같이 작업합니다. 경쟁이 센 만큼 자리 잡기까지 시간은 더 걸릴 수 있지만, 세부 키워드 노출과
            함께 돌아가며 방문이 끊기지 않게 만듭니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="trust-card grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-extrabold tracking-wide text-accent">FIRST MOVER</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">웹문서 영역은 선점이 중요합니다.</h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-paper-dim">
              <p>
                다른 업체보다 먼저 웹문서에 올라가 있으면, 뒤에서 누르고 올라오기가 쉽지 않습니다. 먼저 자리가 잡히면
                그만큼 안정적으로 그 키워드를 지킬 수 있습니다.
              </p>
              <p>
                그래서 사이트 웹문서 작업은 하루라도 빨리 시작하는 편이 유리합니다. 나중에 해도 됩니다. 다만 그만큼
                시간과 비용이 더 들어갑니다.
              </p>
            </div>
          </div>
          <ol className="space-y-4">
            {[
              ["먼저 노출", "이미 자리를 잡은 웹문서는 밀어내기가 어렵습니다."],
              ["신뢰가 쌓임", "자연 유입이 붙으면 트래픽을 계속 사지 않아도 유지됩니다."],
              ["하루라도 빠르게", "선점한 업체가 시간과 비용 모두에서 유리합니다."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-4 border-b border-dashed border-line pb-4 last:border-0 last:pb-0">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-black text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-black">{t}</p>
                  <p className="mt-1 text-sm text-mute">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
