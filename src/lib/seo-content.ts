import { COMPANY, NOW_ON_NAVER, PRICING } from "./constants";
import { eulReul, eunNeun, iGa } from "./korean";
import { buildPopFacts, POP_AS_OF, type SeoStat, type SeoTable } from "./population";
import { regionNote, type SeoPageRef } from "./seo-catalog";

function hash(s: string) {
  let n = 0;
  for (let i = 0; i < s.length; i += 1) n = (n * 31 + s.charCodeAt(i)) >>> 0;
  return n;
}

export type SeoDoc = {
  title: string;
  description: string;
  h1: string;
  lead: string;
  stats: SeoStat[];
  tables: SeoTable[];
  sections: { h2: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
};

export function buildSeoDoc(page: SeoPageRef): SeoDoc {
  const v = hash(page.slug) % 3;
  const place = page.place?.label || "전국";
  const ind = page.industry.label;
  const intent = page.intent.label;
  const key = page.keyword;
  const where = page.place ? `${place} ` : "";
  const man = `${Math.round(PRICING.rankingSetup / 10000)}만`;
  const monthly = `${Math.round(PRICING.rankingMonthly / 10000)}만`;
  const pop = buildPopFacts(page.place, hash(page.slug));
  const note = regionNote(page.place);
  const old = page.intent.family === "oldad";

  const title = `${key} | ${COMPANY.name} 네이버 웹문서 실행`;
  const description = `${where}${ind} ${intent}은 이제 블로그·카페가 아니라 사이트 웹문서입니다.${pop.level !== "national" ? ` ${pop.label} 주민등록 인구 ${pop.stats[0]?.value}.` : ""} ${COMPANY.name}가 프로그램을 이식하고 월 글 1,000개를 올립니다. 셋팅 ${man} · 월 ${monthly}.`;
  const h1 = page.place ? `${place} ${ind} ${intent}` : `${ind} ${intent}`;

  const leads = [
    `${NOW_ON_NAVER.hook} ${NOW_ON_NAVER.hookAsk} ${where}${ind} ${intent}${eulReul(intent)} 찾는 대표님도 같은 자리를 보고 계십니다.`,
    `네이버에서 ${key}로 검색하면, 이제는 블로그보다 홈페이지·랜딩이 먼저 보입니다. ${COMPANY.name}는 그 웹문서를 대량으로 올리는 실행사입니다.`,
    `${ind} 사장님이 ${intent}${eulReul(intent)} 알아보시는 이유는 하나입니다. 검색되면 손님이 와야 합니다. 예쁜 페이지만으로는 부족합니다.`,
  ];

  const era = old
    ? [
        `${ind} ${page.intent.label}${eulReul(page.intent.label)} 찾으셨을 겁니다. 예전에는 블로그·카페·지식인이 메인이었습니다. 지금은 그 키워드로 들어와도, 실제 노출은 사이트 웹문서로 바뀌었습니다.`,
        `아이디가 죽으면 글이 사라집니다. ${ind} 홍보를 블로그에만 맡기면 계정이 막히는 순간 그동안의 노출이 같이 날아갑니다. 웹문서는 사이트에 남습니다.`,
      ]
    : [
        `지금 네이버 검색 메인은 사이트 웹문서의 시대입니다. ${ind}도 예외가 아닙니다. 블로그·카페 바이럴은 예전처럼 메인에서 잘 보이지 않습니다.`,
        `${NOW_ON_NAVER.pain} ${ind}도 마찬가지입니다. 노출이 줄면 유입이 줄고, 전환을 만들 수가 없습니다.`,
      ];

  const work = [
    `${COMPANY.name}는 광고 대행사가 아닙니다. ${where}${ind} 사이트에 상위노출 프로그램을 이식하고, 한 달에 글 1,000개(1,000개 키워드)를 웹문서로 발행합니다.`,
    `셋팅 ${man}원, 월 ${monthly}원입니다. 키워드 하나 수십만이 아닙니다. 2017년부터 웹문서를 직접 실행해 온 회사입니다. 사업자번호 ${COMPANY.bizNo}, ${COMPANY.address}.`,
  ];

  const local = note
    ? [`${note} ${where}${ind} ${intent} 자리를 먼저 선점하면, 뒤에서 밀어내기가 어렵습니다.`]
    : [`웹문서 영역은 선점이 중요합니다. ${ind} 키워드도 하루라도 빨리 올리는 편이 유리합니다.`];

  const sections = [
    {
      h2: `${pop.label} 주민등록으로 보는 상권`,
      paragraphs: [
        ...pop.paragraphs,
        `${pop.label} ${ind} ${intent}도 이 인구·세대 숫자를 바탕으로 키워드를 나눠 올립니다. 사람 수가 있는 동·구부터 웹문서를 심는 편이 유리합니다.`,
      ],
    },
    {
      h2: v === 0 ? `지금 ${ind} 검색에는 홈페이지가 뜹니다` : `${key}, 왜 웹문서인가`,
      paragraphs: [leads[v], era[0]],
    },
    {
      h2: old ? `블로그·카페 ${intent}로는 한계가 있습니다` : `${ind}도 사이트에 글을 남겨야 합니다`,
      paragraphs: [era[1], `${ind}${eunNeun(ind)} 메인 키워드만 노리지 않습니다. 세부 검색어까지 같이 올려 방문 고객을 붙잡습니다.`],
    },
    {
      h2: `${COMPANY.name}가 직접 실행합니다`,
      paragraphs: work,
    },
    {
      h2: `${where}${ind} 자리를 먼저 잡으십시오`,
      paragraphs: [...local, `광고는 끄면 그래프가 떨어집니다. 웹문서는 사이트에 남아 우상향합니다. 레퍼런스의 네이버 서치어드바이저 화면을 그대로 확인해 보십시오.`],
    },
  ];

  const faqs = [
    {
      q: `${key}도 인포씨에스가 하나요?`,
      a: `합니다. 업종이 ${ind}${iGa(ind)} 달라도 하는 일은 같습니다. 사이트를 만들고 웹문서를 올립니다. ${intent}라는 검색어로 들어오셔도, 실행은 웹문서 상위노출입니다.`,
    },
    {
      q: `블로그 광고와 무엇이 다릅니까?`,
      a: `블로그·카페는 아이디가 죽으면 글이 사라집니다. 웹문서는 사이트에 심습니다. 자체 컴퓨터 300대로 월 1,000개 글을 발행합니다.`,
    },
    {
      q: `비용은 얼마입니까?`,
      a: `셋팅 ${man}원, 월 ${monthly}원입니다. 키워드마다 견적을 바꾸지 않습니다.`,
    },
    {
      q: `인구·세대 숫자는 어디서 왔습니까?`,
      a: `행정안전부 주민등록 인구통계입니다. ${POP_AS_OF} 기준 행정동 성별·연령별 인구와 법정동 세대수입니다. 추정 숫자가 아닙니다.`,
    },
  ];

  return {
    title,
    description,
    h1,
    lead: leads[v],
    stats: pop.stats,
    tables: pop.tables,
    sections,
    faqs,
  };
}
