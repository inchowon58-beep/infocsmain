export const COMPANY = {
  name: "인포씨에스",
  nameEn: "INFOCS",
  legal: "주식회사 인포씨에스",
  ceo: "조춘원",
  address: "경기 부천시 길주로 246",
  years: "2017 – 2026",
  domain: "www.infocs.co.kr",
  founded: 2017,
  bizNo: "224-87-00683",
  kakao: "https://open.kakao.com/o/sxelLqJi",
  ceoImage: "/images/ceo.png",
} as const;

export const PRICING = {
  rankingSetup: 500_000,
  rankingMonthly: 300_000,
  rankingMonthlyCompare: 4_800_000,
  rankingKeywords: 1000,
} as const;

export const SERVICES = [
  {
    slug: "ranking",
    name: "네이버 웹문서 상위노출 자동화",
    en: "AUTO RANK",
    href: "/services/ranking",
    tag: "실행",
    desc: "사이트에 상위노출 프로그램을 이식하고, 한 달에 1,000개 글을 웹문서로 발행합니다. 네이버에서 검색하면 뜨게 만드는 작업입니다.",
    icon: "ranking",
  },
  {
    slug: "sites",
    name: "99% 상위노출 사이트 제작",
    en: "RANK SITE",
    href: "/services/sites",
    tag: "제작",
    desc: "단순 사이트 제작이 아닙니다. 네이버에서 검색하면 상위노출되도록 프로그램을 이식한 사이트를 만듭니다.",
    icon: "wordpress",
  },
] as const;

export const NOW_ON_NAVER = {
  hook: "지금 네이버에 홈페이지나 랜딩페이지가 상위에 뜨고 있습니다.",
  hookAsk: "많이 보이시죠?",
  mass: "그 자리를 대량으로 올리는 실행이 인포씨에스입니다. 한 달에 글 1,000개, 웹문서로 올립니다.",
  pain: "블로그로 홍보를 열심히 하시던 대표님들, 블로그 노출이 줄었습니다.",
  result: "노출이 줄면 고객 유입이 줄고, 전환을 만들 수가 없습니다. 그래서 홈페이지·랜딩으로 바꿔 대량 노출합니다.",
} as const;

export const BLOG_SHIFT_INDUSTRIES = [
  "뷰티",
  "병의원",
  "인테리어",
  "청소",
  "학원",
  "프랜차이즈",
  "시공",
  "서비스업",
] as const;

export const MANAGED_INDUSTRIES = [
  "강아지분양",
  "고양이분양",
  "애견포털",
  "강아지장례식장",
  "국제결혼",
  "철거",
  "두피문신",
  "과일판매",
  "개인회생",
  "강아지교배",
  "애견미용학원",
  "동물병원",
  "애견카페",
] as const;

export const NAVER_REPORTS = [
  {
    src: "/images/naver-report-1.jpg",
    exposure: "81.0만",
    clicks: "1.0만",
    exposureUp: "18,954%",
    clicksUp: "15,202%",
  },
  {
    src: "/images/naver-report-2.jpg",
    exposure: "48.4만",
    clicks: "9.1천",
    exposureUp: "677%",
    clicksUp: "493%",
  },
  {
    src: "/images/naver-report-3.jpg",
    exposure: "42.1만",
    clicks: "8.3천",
    exposureUp: "483%",
    clicksUp: "297%",
  },
] as const;

export const NAV = [
  { href: "/services", label: "서비스" },
  { href: "/results", label: "레퍼런스" },
  { href: "/sites", label: "임대사이트" },
  { href: "/pricing", label: "요금" },
  { href: "/about", label: "회사소개" },
] as const;

export const PROCESS = [
  { step: "01", title: "상담", body: "업종과 키워드를 확인합니다. 네이버에서 고객이 검색하면 뜰 자리를 잡습니다." },
  { step: "02", title: "이식", body: "상위노출 프로그램을 사이트에 직접 심고 셋팅합니다. 대행이 아닙니다." },
  { step: "03", title: "발행", body: "한 달 1,000개 글을 웹문서로 발행합니다. 자체 컴퓨터 300대로 실행합니다." },
  { step: "04", title: "유지", body: "사이트에 글이 남습니다. 아이디가 죽어 글이 사라지는 방식이 아닙니다." },
] as const;

export const COMPARE = [
  { item: "방식", others: "블로그·카페 대행, 받아서 넘김", us: "사이트에 심고 직접 실행" },
  { item: "키워드", others: "키워드 하나 · 월 수십만 원", us: "월 글 1,000개 (1,000개 키워드)" },
  { item: "비용", others: "견적마다 다름, 키워드마다 과금", us: "셋팅 50만 · 월 30만 정찰" },
  { item: "유지", others: "트래픽 끊기면 노출이 떨어짐", us: "자연 유입으로 신뢰가 쌓여 유지" },
  { item: "리스크", others: "아이디 구매 시 광고주도 처벌 위험", us: "합법 웹문서. 글이 사이트에 남음" },
] as const;

export const REVIEWS = [
  {
    industry: "강아지분양",
    role: "대표",
    quote:
      "블로그로 올리던 때는 아이디가 죽으면 글이 같이 사라졌습니다. 사이트로 옮기고 나서는 검색이 끊기지 않습니다.",
  },
  {
    industry: "철거",
    role: "대표",
    quote:
      "키워드 하나에 수십만 원 쓰던 게 아까웠습니다. 세부 검색어까지 같이 돌아가니까 문의가 한 곳으로만 안 몰립니다.",
  },
  {
    industry: "개인회생",
    role: "사무장",
    quote:
      "카페 바이럴은 메인에서 잘 안 보이더군요. 웹문서로 바꾸니 검색하는 손님이 사이트로 바로 들어옵니다.",
  },
  {
    industry: "동물병원",
    role: "원장",
    quote: "예쁜 홈페이지만 만들어 놓고 손님이 안 왔습니다. 지금은 검색되면 뜨는 사이트로 운영합니다.",
  },
] as const;

export const STRENGTHS = [
  { title: "직접 실행", body: "광고를 받아서 넘기지 않습니다. 프로그램 이식부터 발행까지 우리가 돌립니다." },
  { title: "장비 300대", body: "상위노출을 위한 기술력, 정보력, 장비를 직접 가진 실행사입니다." },
  { title: "2017년부터", body: "웹문서 작업을 오래 해 왔습니다. 사업자번호와 주소를 그대로 확인하시면 됩니다." },
  { title: "제작 + 노출", body: "디자인만 하는 곳이 아닙니다. 사이트를 만들고, 네이버에서 뜨게 만듭니다." },
] as const;

export const CAREER = [
  { when: "현", title: "한국애견연맹 반려문화증진위원회 위원장", note: "현직. 2027년 위원장 임기" },
  { when: "전", title: "한국애견연맹 전람회 추진위원회 부위원장", note: "2025년부터 역임" },
  { when: "현", title: "주식회사 인포씨에스 대표", note: "2017년부터 웹문서 상위노출 실행" },
  { when: "전", title: "부천 소상공인 온라인 홍보 자문", note: "지역 업종 사이트 유입 자문. 활동 종료" },
  { when: "전", title: "반려동물 문화교실 운영 협력", note: "2019~2021 교육·홍보 협력. 프로그램 종료" },
  { when: "전", title: "지역 광고주 실무협의 위원", note: "검색·웹문서 실무 공유. 협의체 해산" },
] as const;
