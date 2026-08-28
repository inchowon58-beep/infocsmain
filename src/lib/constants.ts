export const COMPANY = {
  name: "인포씨에스",
  nameEn: "INFOCS",
  legal: "주식회사 인포씨에스",
  ceo: "조춘원",
  address: "경기 부천시 길주로 246",
  years: "2017 – 2026",
  domain: "www.infocs.co.kr",
  founded: 2017,
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

export const NAV = [
  { href: "/services", label: "서비스" },
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

export const CAREER = [
  { when: "현", title: "한국애견연맹 반려문화증진위원회 위원장", note: "현직. 2027년 위원장 임기" },
  { when: "전", title: "한국애견연맹 전람회 추진위원회 부위원장", note: "2025년부터 역임" },
  { when: "현", title: "주식회사 인포씨에스 대표", note: "2017년부터 웹문서 상위노출 실행" },
  { when: "전", title: "부천 소상공인 온라인 홍보 자문", note: "지역 업종 사이트 유입 자문. 활동 종료" },
  { when: "전", title: "반려동물 문화교실 운영 협력", note: "2019~2021 교육·홍보 협력. 프로그램 종료" },
  { when: "전", title: "지역 광고주 실무협의 위원", note: "검색·웹문서 실무 공유. 협의체 해산" },
] as const;
