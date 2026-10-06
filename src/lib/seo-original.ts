import type { Metadata } from "next";
import { COMPANY } from "./constants";

/** 기존 운영 홈 SEO. original 모드에서 그대로 사용합니다. */
export const ORIGINAL_METADATA: Metadata = {
  applicationName: COMPANY.name,
  title: {
    default: `${COMPANY.name} | 네이버 99% 상위노출 사이트 제작`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "국내 유일 네이버 웹문서 상위노출 실행사. 광고 대행사가 아닙니다. 사이트에 프로그램을 이식하고 한 달에 1,000개 글을 웹문서로 노출합니다. 이 방식으로 하는 곳은 지금 오직 인포씨에스가 유일합니다.",
  keywords: [
    "네이버 상위노출",
    "웹문서 상위노출",
    "네이버 뷰탭",
    "사이트 제작",
    "인포씨에스",
    "웹문서 실행사",
  ],
  metadataBase: new URL("https://www.infocs.co.kr"),
  verification: {
    other: {
      "naver-site-verification": "2a977aae9d47e50e0124cab07c569a96fa2ca426",
    },
  },
  openGraph: {
    title: `${COMPANY.name} | 네이버 99% 상위노출 사이트 제작의 비밀`,
    description: "이 방식으로 네이버 상위노출을 하는 곳은 지금 오직 인포씨에스가 유일합니다.",
    url: "https://www.infocs.co.kr",
    siteName: COMPANY.name,
    locale: "ko_KR",
    type: "website",
  },
};
