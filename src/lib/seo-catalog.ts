import {
  KOREA_REGIONS,
  POPULAR_REGION_KEYS,
  SIDO_SHORT,
  SIDO_SHORT_NAMES,
  SIDOS,
  getSigunguByKey,
  neighborSigungus,
  shortSigunguName,
} from "./korea-regions";

export type SeoIntent = {
  slug: string;
  label: string;
  family: "make" | "rank" | "oldad";
};

export type SeoIndustry = {
  slug: string;
  label: string;
  group: string;
};

export type SeoPlace = {
  slug: string;
  label: string;
  sido?: string;
  sigungu?: string;
  level: "sido" | "sigungu";
};

export type SeoPageRef = {
  slug: string;
  keyword: string;
  industry: SeoIndustry;
  intent: SeoIntent;
  place?: SeoPlace;
};

export const SEO_INTENTS: SeoIntent[] = [
  { slug: "홈페이지제작", label: "홈페이지 제작", family: "make" },
  { slug: "사이트제작", label: "사이트 제작", family: "make" },
  { slug: "홈페이지광고", label: "홈페이지 광고", family: "rank" },
  { slug: "웹문서상위노출", label: "웹문서 상위노출", family: "rank" },
  { slug: "웹사이트상위노출", label: "웹사이트 상위노출", family: "rank" },
  { slug: "홈페이지상위노출", label: "홈페이지 상위노출", family: "rank" },
  { slug: "네이버사이트등록", label: "네이버 사이트 등록", family: "rank" },
  { slug: "네이버사이트노출", label: "네이버 사이트 노출", family: "rank" },
  { slug: "마케팅", label: "마케팅", family: "rank" },
  { slug: "광고", label: "광고", family: "rank" },
  { slug: "블로그광고", label: "블로그 광고", family: "oldad" },
  { slug: "블로그마케팅", label: "블로그 마케팅", family: "oldad" },
  { slug: "카페광고", label: "카페 광고", family: "oldad" },
  { slug: "카페마케팅", label: "카페 마케팅", family: "oldad" },
  { slug: "지식인광고", label: "지식인 광고", family: "oldad" },
  { slug: "블로그홍보", label: "블로그 홍보", family: "oldad" },
];

export const CORE_INTENTS = ["홈페이지제작", "웹문서상위노출", "마케팅", "광고"] as const;
export const LOCAL_INTENTS = ["홈페이지제작", "웹문서상위노출"] as const;

export const SEO_INDUSTRIES: SeoIndustry[] = [
  { slug: "맛집", label: "맛집", group: "음식" },
  { slug: "음식점", label: "음식점", group: "음식" },
  { slug: "삼겹살집", label: "삼겹살집", group: "음식" },
  { slug: "한식당", label: "한식당", group: "음식" },
  { slug: "고깃집", label: "고깃집", group: "음식" },
  { slug: "횟집", label: "횟집", group: "음식" },
  { slug: "치킨집", label: "치킨집", group: "음식" },
  { slug: "카페", label: "카페", group: "음식" },
  { slug: "베이커리", label: "베이커리", group: "음식" },
  { slug: "술집", label: "술집", group: "음식" },
  { slug: "병원", label: "병원", group: "의료" },
  { slug: "성형외과", label: "성형외과", group: "의료" },
  { slug: "피부과", label: "피부과", group: "의료" },
  { slug: "치과", label: "치과", group: "의료" },
  { slug: "안과", label: "안과", group: "의료" },
  { slug: "한의원", label: "한의원", group: "의료" },
  { slug: "산부인과", label: "산부인과", group: "의료" },
  { slug: "정형외과", label: "정형외과", group: "의료" },
  { slug: "이비인후과", label: "이비인후과", group: "의료" },
  { slug: "내과", label: "내과", group: "의료" },
  { slug: "소아과", label: "소아과", group: "의료" },
  { slug: "동물병원", label: "동물병원", group: "의료" },
  { slug: "약국", label: "약국", group: "의료" },
  { slug: "안경원", label: "안경원", group: "의료" },
  { slug: "뷰티", label: "뷰티", group: "뷰티" },
  { slug: "미용실", label: "미용실", group: "뷰티" },
  { slug: "네일샵", label: "네일샵", group: "뷰티" },
  { slug: "피부관리", label: "피부관리", group: "뷰티" },
  { slug: "두피문신", label: "두피문신", group: "뷰티" },
  { slug: "마사지", label: "마사지", group: "뷰티" },
  { slug: "학원", label: "학원", group: "교육" },
  { slug: "영어학원", label: "영어학원", group: "교육" },
  { slug: "수학학원", label: "수학학원", group: "교육" },
  { slug: "태권도장", label: "태권도장", group: "교육" },
  { slug: "피아노학원", label: "피아노학원", group: "교육" },
  { slug: "인테리어", label: "인테리어", group: "생활" },
  { slug: "청소", label: "청소", group: "생활" },
  { slug: "이사", label: "이사", group: "생활" },
  { slug: "철거", label: "철거", group: "생활" },
  { slug: "도배", label: "도배", group: "생활" },
  { slug: "설비", label: "설비", group: "생활" },
  { slug: "시공", label: "시공", group: "생활" },
  { slug: "건축", label: "건축", group: "생활" },
  { slug: "변호사", label: "변호사", group: "전문" },
  { slug: "법무사", label: "법무사", group: "전문" },
  { slug: "세무사", label: "세무사", group: "전문" },
  { slug: "개인회생", label: "개인회생", group: "전문" },
  { slug: "부동산", label: "부동산", group: "전문" },
  { slug: "공인중개사", label: "공인중개사", group: "전문" },
  { slug: "강아지분양", label: "강아지분양", group: "반려동물" },
  { slug: "고양이분양", label: "고양이분양", group: "반려동물" },
  { slug: "애견미용", label: "애견미용", group: "반려동물" },
  { slug: "애견카페", label: "애견카페", group: "반려동물" },
  { slug: "프랜차이즈", label: "프랜차이즈", group: "사업" },
  { slug: "웨딩", label: "웨딩", group: "사업" },
  { slug: "헬스장", label: "헬스장", group: "운동" },
  { slug: "필라테스", label: "필라테스", group: "운동" },
  { slug: "요가", label: "요가", group: "운동" },
  { slug: "자동차정비", label: "자동차정비", group: "자동차" },
  { slug: "중고차", label: "중고차", group: "자동차" },
  { slug: "국제결혼", label: "국제결혼", group: "기타" },
  { slug: "보험", label: "보험", group: "기타" },
  { slug: "대출", label: "대출", group: "기타" },
  { slug: "간판", label: "간판", group: "기타" },
  { slug: "인쇄", label: "인쇄", group: "기타" },
  { slug: "어린이집", label: "어린이집", group: "육아" },
  { slug: "키즈카페", label: "키즈카페", group: "육아" },
  { slug: "산후조리원", label: "산후조리원", group: "육아" },
  { slug: "세탁소", label: "세탁소", group: "생활" },
  { slug: "꽃집", label: "꽃집", group: "생활" },
  { slug: "사진관", label: "사진관", group: "생활" },
  { slug: "여행사", label: "여행사", group: "기타" },
  { slug: "유학", label: "유학", group: "교육" },
  { slug: "렌터카", label: "렌터카", group: "자동차" },
  { slug: "세차장", label: "세차장", group: "자동차" },
  { slug: "조경", label: "조경", group: "생활" },
  { slug: "보일러", label: "보일러", group: "생활" },
  { slug: "에어컨", label: "에어컨", group: "생활" },
  { slug: "네일", label: "네일", group: "뷰티" },
  { slug: "에스테틱", label: "에스테틱", group: "뷰티" },
];

const INTENT_BY_SLUG = new Map(SEO_INTENTS.map((i) => [i.slug, i]));
const INDUSTRY_BY_SLUG = new Map(SEO_INDUSTRIES.map((i) => [i.slug, i]));
const INTENTS_DESC = [...SEO_INTENTS].sort((a, b) => b.slug.length - a.slug.length);
const INDUSTRIES_DESC = [...SEO_INDUSTRIES].sort((a, b) => b.slug.length - a.slug.length);

function buildPlaces(): Map<string, SeoPlace> {
  const map = new Map<string, SeoPlace>();
  const add = (slug: string, place: SeoPlace) => {
    if (!slug || map.has(slug)) return;
    map.set(slug, { ...place, slug });
  };
  for (const sido of SIDOS) {
    const short = SIDO_SHORT[sido];
    add(sido, { slug: sido, label: short || sido, sido, level: "sido" });
    if (short) add(short, { slug: short, label: short, sido, level: "sido" });
  }
  for (const row of KOREA_REGIONS) {
    const shortSido = SIDO_SHORT[row.sido] || row.sido;
    const shortGu = shortSigunguName(row.sigungu);
    add(row.sigungu, {
      slug: row.sigungu,
      label: shortGu || row.sigungu,
      sido: row.sido,
      sigungu: row.sigungu,
      level: "sigungu",
    });
    if (shortGu) {
      add(shortGu, {
        slug: shortGu,
        label: shortGu,
        sido: row.sido,
        sigungu: row.sigungu,
        level: "sigungu",
      });
    }
    add(`${shortSido}${shortGu || row.sigungu}`, {
      slug: `${shortSido}${shortGu || row.sigungu}`,
      label: `${shortSido} ${shortGu || row.sigungu}`,
      sido: row.sido,
      sigungu: row.sigungu,
      level: "sigungu",
    });
  }
  return map;
}

const PLACES = buildPlaces();

export function seoPath(slug: string) {
  return `/kw/${encodeURIComponent(slug)}`;
}

export function makeSeoSlug(industry: string, intent: string, place?: string) {
  return place ? `${place}-${industry}-${intent}` : `${industry}-${intent}`;
}

function pageRef(industry: SeoIndustry, intent: SeoIntent, place?: SeoPlace): SeoPageRef {
  const slug = makeSeoSlug(industry.slug, intent.slug, place?.slug);
  const keyword = place ? `${place.label}${industry.label}${intent.label.replace(/\s/g, "")}` : `${industry.label}${intent.label.replace(/\s/g, "")}`;
  return { slug, keyword, industry, intent, place };
}

export function parseSeoSlug(raw: string): SeoPageRef | null {
  const slug = decodeURIComponent(raw || "").trim();
  if (!slug) return null;
  const intent = INTENTS_DESC.find((i) => slug === i.slug || slug.endsWith(`-${i.slug}`));
  if (!intent) return null;
  const head = slug === intent.slug ? "" : slug.slice(0, -(intent.slug.length + 1));
  if (!head) return null;
  const industry = INDUSTRIES_DESC.find((i) => head === i.slug || head.endsWith(`-${i.slug}`));
  if (!industry) return null;
  const placeRaw = head === industry.slug ? "" : head.slice(0, -(industry.slug.length + 1));
  const place = placeRaw ? PLACES.get(placeRaw) : undefined;
  if (placeRaw && !place) return null;
  return pageRef(industry, intent, place);
}

export function listStaticSeoPages(): SeoPageRef[] {
  const out: SeoPageRef[] = [];
  const seen = new Set<string>();
  const push = (ref: SeoPageRef) => {
    if (seen.has(ref.slug)) return;
    seen.add(ref.slug);
    out.push(ref);
  };

  for (const industry of SEO_INDUSTRIES) {
    for (const intent of SEO_INTENTS) push(pageRef(industry, intent));
  }

  const core = LOCAL_INTENTS.map((s) => INTENT_BY_SLUG.get(s)!).filter(Boolean);
  for (const short of SIDO_SHORT_NAMES) {
    const place = PLACES.get(short);
    if (!place) continue;
    for (const industry of SEO_INDUSTRIES) {
      for (const intent of core) push(pageRef(industry, intent, place));
    }
  }

  const local = LOCAL_INTENTS.map((s) => INTENT_BY_SLUG.get(s)!).filter(Boolean);
  for (const key of POPULAR_REGION_KEYS) {
    const row = getSigunguByKey(key);
    if (!row) continue;
    const shortGu = shortSigunguName(row.sigungu) || row.sigungu;
    const place = PLACES.get(shortGu) || PLACES.get(row.sigungu);
    if (!place) continue;
    for (const industry of SEO_INDUSTRIES) {
      for (const intent of local) push(pageRef(industry, intent, place));
    }
  }

  return out;
}

export function relatedSeoLinks(page: SeoPageRef, limit = 12) {
  const links: { href: string; label: string }[] = [];
  const seen = new Set<string>([page.slug]);
  const add = (ref: SeoPageRef) => {
    if (seen.has(ref.slug)) return;
    seen.add(ref.slug);
    links.push({ href: seoPath(ref.slug), label: ref.keyword });
  };

  for (const intent of SEO_INTENTS) {
    if (intent.slug === page.intent.slug) continue;
    add(pageRef(page.industry, intent, page.place));
    if (links.length >= 6) break;
  }

  if (page.place?.sigungu) {
    for (const n of neighborSigungus(page.place.sido || "", page.place.sigungu, 6)) {
      const short = shortSigunguName(n.sigungu) || n.sigungu;
      const place = PLACES.get(short);
      if (place) add(pageRef(page.industry, page.intent, place));
    }
  } else if (page.place?.sido) {
    for (const short of SIDO_SHORT_NAMES.slice(0, 8)) {
      const place = PLACES.get(short);
      if (place) add(pageRef(page.industry, page.intent, place));
    }
  } else {
    for (const short of ["서울", "부산", "대구", "인천", "경기", "부천"]) {
      const place = PLACES.get(short);
      if (place) add(pageRef(page.industry, page.intent, place));
    }
  }

  const sameGroup = SEO_INDUSTRIES.filter((i) => i.group === page.industry.group && i.slug !== page.industry.slug);
  for (const ind of sameGroup.slice(0, 4)) add(pageRef(ind, page.intent, page.place));

  return links.slice(0, limit);
}

export function industryHubs() {
  const groups = new Map<string, SeoIndustry[]>();
  for (const item of SEO_INDUSTRIES) {
    const list = groups.get(item.group) || [];
    list.push(item);
    groups.set(item.group, list);
  }
  return [...groups.entries()];
}

export function getIndustry(slug: string) {
  return INDUSTRY_BY_SLUG.get(slug);
}

export function getIntent(slug: string) {
  return INTENT_BY_SLUG.get(slug);
}

export function regionNote(place?: SeoPlace) {
  if (!place) return "";
  if (place.sigungu && place.sido) {
    const neighbors = neighborSigungus(place.sido, place.sigungu, 4)
      .map((n) => shortSigunguName(n.sigungu) || n.sigungu)
      .join(", ");
    const dongs = KOREA_REGIONS.find((r) => r.sigungu === place.sigungu && r.sido === place.sido)
      ?.dongs.slice(0, 4)
      .join(", ");
    return `${place.label}은 ${SIDO_SHORT[place.sido] || place.sido} 상권입니다.${dongs ? ` ${dongs} 일대 검색이 붙습니다.` : ""}${neighbors ? ` 인근 ${neighbors} 사장님도 같은 웹문서 자리 싸움을 합니다.` : ""}`;
  }
  if (place.sido) {
    return `${place.label} 전역에서 네이버 검색이 이뤄집니다. 시·군·구마다 키워드를 나눠 올리는 편이 유리합니다.`;
  }
  return "";
}
