import population from "@/data/population.json";
import { eunNeun } from "./korean";
import { neighborSigungus, shortSigunguName, SIDO_SHORT } from "./korea-regions";
import type { SeoPlace } from "./seo-catalog";

export type PopRow = {
  p: number;
  m: number;
  f: number;
  a0: number;
  a20: number;
  a40: number;
  a60: number;
  h: number;
  h1: number;
  d?: [string, number][];
};

export type SeoStat = { label: string; value: string; note: string };

export type SeoTable = {
  caption: string;
  headers: string[];
  rows: string[][];
  source: string;
};

export type PopFacts = {
  level: "national" | "sido" | "sigungu";
  label: string;
  row: PopRow;
  stats: SeoStat[];
  paragraphs: string[];
  tables: SeoTable[];
};

type PopFile = {
  asOf: string;
  asOfLabel: string;
  source: string;
  nat: PopRow;
  sido: Record<string, PopRow>;
  sg: Record<string, PopRow>;
};

const DATA = population as unknown as PopFile;

export const POP_AS_OF = DATA.asOfLabel;
export const POP_SOURCE = `${DATA.source} · ${DATA.asOfLabel} 기준`;

function people(n: number) {
  if (n >= 10000) {
    const man = Math.floor(n / 10000);
    const rest = n % 10000;
    return rest ? `${man.toLocaleString("ko-KR")}만 ${rest.toLocaleString("ko-KR")}명` : `${man.toLocaleString("ko-KR")}만 명`;
  }
  return `${n.toLocaleString("ko-KR")}명`;
}

function houses(n: number) {
  if (n >= 10000) {
    const man = Math.floor(n / 10000);
    const rest = n % 10000;
    return rest ? `${man.toLocaleString("ko-KR")}만 ${rest.toLocaleString("ko-KR")}가구` : `${man.toLocaleString("ko-KR")}만 가구`;
  }
  return `${n.toLocaleString("ko-KR")}가구`;
}

function pct(part: number, total: number) {
  if (!total) return "0%";
  return `${Math.round((part / total) * 100)}%`;
}

function cleanDong(name: string) {
  return name.replace(/제(\d)동/g, "$1동").replace(/출장소/g, "");
}

function isParentKey(key: string) {
  const gu = key.split("_")[1] || "";
  return Boolean(gu) && !gu.includes(" ");
}

function sgEntries(sido?: string) {
  return Object.entries(DATA.sg)
    .filter(([key]) => isParentKey(key) && (!sido || key.startsWith(`${sido}_`)))
    .sort((a, b) => b[1].p - a[1].p);
}

function lookup(place?: SeoPlace): { level: PopFacts["level"]; label: string; sido?: string; sigungu?: string; row: PopRow } {
  if (place?.sigungu && place.sido) {
    const row = DATA.sg[`${place.sido}_${place.sigungu}`];
    if (row) return { level: "sigungu", label: place.label, sido: place.sido, sigungu: place.sigungu, row };
  }
  if (place?.sido) {
    const row = DATA.sido[place.sido];
    if (row) return { level: "sido", label: place.label, sido: place.sido, row };
  }
  return { level: "national", label: "전국", row: DATA.nat };
}

function statsFrom(row: PopRow, label: string): SeoStat[] {
  const working = row.a20 + row.a40;
  return [
    { label: "주민등록 인구", value: people(row.p), note: `${label} · ${POP_AS_OF}` },
    { label: "세대 수", value: houses(row.h), note: `1인 세대 ${houses(row.h1)} (${pct(row.h1, row.h)})` },
    { label: "20~50대", value: people(working), note: `전체의 ${pct(working, row.p)}` },
    { label: "60세 이상", value: people(row.a60), note: `전체의 ${pct(row.a60, row.p)}` },
  ];
}

function sidoTable(): SeoTable {
  const rows = Object.entries(DATA.sido)
    .sort((a, b) => b[1].p - a[1].p)
    .map(([name, row]) => [SIDO_SHORT[name] || name, people(row.p), houses(row.h), pct(row.h1, row.h)]);
  return {
    caption: "시·도별 주민등록 인구",
    headers: ["지역", "인구", "세대", "1인 세대"],
    rows,
    source: POP_SOURCE,
  };
}

function sgTable(entries: [string, PopRow][], caption: string): SeoTable {
  return {
    caption,
    headers: ["지역", "인구", "세대", "1인 세대"],
    rows: entries.map(([key, row]) => {
      const gu = key.split("_")[1] || key;
      return [shortSigunguName(gu) || gu, people(row.p), houses(row.h), pct(row.h1, row.h)];
    }),
    source: POP_SOURCE,
  };
}

function dongTable(row: PopRow, label: string): SeoTable | null {
  if (!row.d?.length) return null;
  return {
    caption: `${label} 인구 많은 행정동`,
    headers: ["행정동", "인구"],
    rows: row.d.map(([name, n]) => [cleanDong(name), people(n)]),
    source: POP_SOURCE,
  };
}

export function buildPopFacts(place?: SeoPlace, seed = 0): PopFacts {
  const found = lookup(place);
  const row = found.row;
  const label = found.label;
  const working = row.a20 + row.a40;
  const topDongs = (row.d || []).slice(0, 4).map(([name]) => cleanDong(name));

  const paragraphs: string[] = [];
  if (found.level === "national") {
    paragraphs.push(
      `전국 주민등록 인구는 ${people(DATA.nat.p)}입니다. 세대는 ${houses(DATA.nat.h)}이고, 1인 세대가 ${houses(DATA.nat.h1)}(${pct(DATA.nat.h1, DATA.nat.h)})입니다. ${POP_AS_OF} 행정안전부 주민등록 통계입니다.`,
      `20~50대는 ${people(DATA.nat.a20 + DATA.nat.a40)}(${pct(DATA.nat.a20 + DATA.nat.a40, DATA.nat.p)})입니다. 이 층이 네이버에서 업체를 검색하는 손님입니다. 블로그보다 사이트 웹문서가 먼저 보이는 자리를 선점해야 합니다.`
    );
  } else {
    paragraphs.push(
      `${label} 주민등록 인구는 ${people(row.p)}입니다. 남자 ${people(row.m)}, 여자 ${people(row.f)}이고 세대는 ${houses(row.h)}입니다. 1인 세대는 ${houses(row.h1)}로 전체 세대의 ${pct(row.h1, row.h)}입니다.`,
      `0~19세 ${people(row.a0)}(${pct(row.a0, row.p)}), 20~30대 ${people(row.a20)}(${pct(row.a20, row.p)}), 40~50대 ${people(row.a40)}(${pct(row.a40, row.p)}), 60세 이상 ${people(row.a60)}(${pct(row.a60, row.p)})입니다. 20~50대는 ${people(working)}입니다. 네이버에서 업체를 찾는 손님이 이 구간에 많습니다.`
    );
    if (topDongs.length) {
      paragraphs.push(
        `${label}에서 인구가 많은 행정동은 ${topDongs.join(", ")}입니다. 이 일대 키워드를 웹문서로 먼저 올리면, 뒤에서 밀어내기가 어렵습니다.`
      );
    }
  }

  const tables: SeoTable[] = [];
  if (found.level === "sigungu") {
    const dong = dongTable(row, label);
    if (dong) tables.push(dong);
    const near: [string, PopRow][] = [];
    if (found.sido && found.sigungu) {
      for (const n of neighborSigungus(found.sido, found.sigungu, 8)) {
        const item = DATA.sg[`${n.sido}_${n.sigungu}`];
        if (item) near.push([`${n.sido}_${n.sigungu}`, item]);
      }
    }
    if (near.length) tables.push(sgTable(near, `${label} 인근 시·군·구 인구`));
  } else if (found.level === "sido" && found.sido) {
    tables.push(sgTable(sgEntries(found.sido).slice(0, 12), `${label} 시·군·구 주민등록 인구`));
  } else {
    tables.push(sidoTable());
    const all = sgEntries();
    const stride = 19;
    const offset = Math.abs(seed) % Math.max(all.length, 1);
    const picked: [string, PopRow][] = [];
    for (let i = 0; i < 8 && all.length; i += 1) {
      picked.push(all[(offset + i * stride) % all.length]);
    }
    tables.push({
      caption: "전국 주요 시·군·구 주민등록 인구",
      headers: ["지역", "인구", "세대", "1인 세대"],
      rows: picked.map(([key, item]) => {
        const [sidoName, gu] = key.split("_");
        return [`${SIDO_SHORT[sidoName] || sidoName} ${shortSigunguName(gu) || gu}`, people(item.p), houses(item.h), pct(item.h1, item.h)];
      }),
      source: POP_SOURCE,
    });
  }

  return {
    level: found.level,
    label,
    row,
    stats: statsFrom(row, label),
    paragraphs,
    tables,
  };
}

export function popRegionSentence(place?: SeoPlace) {
  const facts = buildPopFacts(place);
  if (facts.level === "national") return "";
  return `${facts.label}${eunNeun(facts.label)} 주민등록 인구 ${people(facts.row.p)}, 세대 ${houses(facts.row.h)}입니다(${POP_AS_OF}).`;
}
