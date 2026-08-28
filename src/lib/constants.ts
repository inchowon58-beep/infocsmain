export const COMPANY = {
  name: "인포씨에스",
  nameEn: "INFOCS",
  legal: "주식회사 인포씨에스",
  ceo: "조춘원",
  address: "경기 부천시 길주로 246",
  years: "2017 – 2026",
  domain: "www.infocs.co.kr",
  founded: 2017,
} as const;

export const PRICING = {
  rankingSetup: 500_000,
  rankingMonthly: 300_000,
  rankingKeywords: 1000,
  brandBlogMonthly: 300_000,
  brandBlogPosts: 20,
} as const;

export const SERVICES = [
  {
    slug: "blog",
    name: "블로그",
    en: "BLOG",
    href: "/services/blog",
    tag: "월관리",
    desc: "네이버 상위노출 블로그와 브랜드블로그 월관리. 키워드를 심고, 검색이 회사를 찾게 만듭니다.",
  },
  {
    slug: "cafe",
    name: "카페",
    en: "CAFE",
    href: "/services/cafe",
    tag: "바이럴",
    desc: "네이버 카페 운영·배포로 지역·업종 커뮤니티 안에서 자연스럽게 노출됩니다.",
  },
  {
    slug: "wordpress",
    name: "워드프레스",
    en: "WORDPRESS",
    href: "/services/wordpress",
    tag: "제작",
    desc: "업종에 맞는 워드프레스 사이트 제작. 검색과 전환을 같이 보는 구조로 만듭니다.",
  },
  {
    slug: "ranking",
    name: "웹문서 상위노출",
    en: "RANK",
    href: "/services/ranking",
    tag: "핵심",
    desc: "네이버 웹문서 상위노출. 사이트 셋팅 후 키워드 발행으로 검색 상단을 노립니다.",
  },
  {
    slug: "automation",
    name: "자동화",
    en: "AUTO",
    href: "/services/automation",
    tag: "운영",
    desc: "발행·배포 자동화를 붙여 월관리가 끊기지 않게 돌립니다.",
  },
  {
    slug: "sns",
    name: "인스타·유튜브",
    en: "SNS",
    href: "/services/sns",
    tag: "채널",
    desc: "인스타그램·유튜브 채널을 브랜드 접점으로 키우고, 검색·바이럴과 연결합니다.",
  },
  {
    slug: "kin",
    name: "지식인",
    en: "KIN",
    href: "/services/kin",
    tag: "신뢰",
    desc: "네이버 지식인 답변 운영으로 질문 검색 트래픽과 신뢰를 가져옵니다.",
  },
  {
    slug: "viral",
    name: "바이럴",
    en: "VIRAL",
    href: "/services",
    tag: "전문",
    desc: "블로그부터 SNS·지식인까지, 한 회사에서 채널을 묶어 운영합니다.",
  },
] as const;

export const SERVICE_OPTIONS = [
  "네이버 웹문서 상위노출",
  "브랜드블로그 월관리",
  "임대형 업종 사이트",
  "워드프레스 제작",
  "카페",
  "인스타그램·유튜브",
  "지식인",
  "자동화",
  "기타 상담",
] as const;

export const NAV = [
  { href: "/services", label: "서비스" },
  { href: "/sites", label: "임대사이트" },
  { href: "/pricing", label: "요금" },
  { href: "/about", label: "회사소개" },
  { href: "/contact", label: "문의" },
] as const;

export const PROCESS = [
  { step: "01", title: "상담", body: "업종, 지역, 원하는 키워드와 채널을 확인합니다." },
  { step: "02", title: "확정", body: "사이트 셋팅 범위, 월 발행량, 임대 여부를 확정합니다." },
  { step: "03", title: "셋팅", body: "웹문서·블로그 기본 세팅과 업종 페이지를 올립니다." },
  { step: "04", title: "월관리", body: "키워드 발행, 포스팅, 채널 운영을 매달 이어갑니다." },
] as const;
