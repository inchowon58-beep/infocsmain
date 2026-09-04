export function TrendChart() {
  return (
    <div className="trend-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold tracking-[0.16em] text-white/45">매출 추이</p>
          <p className="mt-1 text-lg font-black text-accent">▲ 꾸준한 우상향</p>
        </div>
        <div className="flex flex-col items-end gap-1.5 text-[11px] font-extrabold">
          <span className="flex items-center gap-1.5 text-accent">
            <span className="h-1.5 w-5 rounded-full bg-accent" />
            웹문서 사이트
          </span>
          <span className="flex items-center gap-1.5 text-white/40">
            <span className="h-1.5 w-5 rounded-full bg-[#ff5d5d]" />
            광고 의존
          </span>
        </div>
      </div>
      <svg viewBox="0 0 360 210" className="mt-5 h-auto w-full" role="img" aria-label="웹문서 사이트는 우상향, 광고는 끄면 하락">
        <defs>
          <linearGradient id="seoFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#03c75a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#03c75a" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="28" y1={y} x2="350" y2={y} stroke="rgba(255,255,255,0.06)" />
        ))}
        <path d="M28 168 C 90 150, 140 128, 190 70 C 230 28, 280 22, 350 18 L 350 190 L 28 190 Z" fill="url(#seoFill)" />
        <path
          d="M28 168 C 90 150, 140 128, 190 70 C 230 28, 280 22, 350 18"
          fill="none"
          stroke="#03c75a"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M28 150 C 80 92, 130 70, 175 62 C 210 56, 240 118, 280 168 C 310 188, 330 190, 350 190"
          fill="none"
          stroke="#ff5d5d"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />
        <circle cx="350" cy="18" r="5" fill="#03c75a" />
        <text x="28" y="206" fill="rgba(255,255,255,0.35)" fontSize="11" fontWeight="700">
          시작
        </text>
        <text x="300" y="206" fill="rgba(255,255,255,0.35)" fontSize="11" fontWeight="700">
          시간 경과
        </text>
      </svg>
    </div>
  );
}

export function SearchAsset() {
  return (
    <section id="asset" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
        <div>
          <p className="text-xs font-extrabold tracking-[0.16em] text-accent">SEARCH ASSET</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
            예쁜 페이지만 있으면
            <br />
            손님이 안 옵니다
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper-dim">
            홈페이지는 명함이 아닙니다. 네이버에서 검색되면 사이트가 뜨고, 그 유입이 쌓여 매출이 됩니다. 광고를 꺼도
            웹문서는 사이트에 남습니다.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "만들자마자 네이버에 잡히도록, 웹문서가 붙는 구조로 제작합니다",
              "메인·세부 키워드를 월 글 1,000개로 올려 검색 접점을 넓힙니다",
              "한 번 올리면 글이 사이트에 남아, 시간이 갈수록 그래프가 우상향합니다",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm font-bold leading-relaxed text-paper">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-xl text-base font-extrabold leading-relaxed text-paper">
            “광고는 끄면 그래프가 떨어지고, 웹문서는 끄지 않아도 계속 올라갑니다.”
          </p>
        </div>
        <TrendChart />
      </div>
    </section>
  );
}
