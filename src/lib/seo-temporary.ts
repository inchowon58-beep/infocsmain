import type { Metadata } from "next";
import { COMPANY } from "./constants";

export const TEMPORARY_METADATA: Metadata = {
  applicationName: COMPANY.legal,
  title: {
    default: `${COMPANY.legal} | 웹사이트 제작 및 디지털 솔루션`,
    template: `%s | ${COMPANY.legal}`,
  },
  description: `${COMPANY.legal}는 기업과 브랜드를 위한 홈페이지 제작 및 웹 운영 솔루션을 제공합니다.`,
  keywords: ["홈페이지 제작", "웹사이트 제작", "웹 운영", "디지털 솔루션", "인포씨에스"],
  metadataBase: new URL("https://www.infocs.co.kr"),
  verification: {
    other: {
      "naver-site-verification": "2a977aae9d47e50e0124cab07c569a96fa2ca426",
    },
  },
  openGraph: {
    title: `${COMPANY.legal} | 웹사이트 제작 및 디지털 솔루션`,
    description: `${COMPANY.legal}는 기업과 브랜드를 위한 홈페이지 제작 및 웹 운영 솔루션을 제공합니다.`,
    url: "https://www.infocs.co.kr",
    siteName: COMPANY.legal,
    locale: "ko_KR",
    type: "website",
  },
};
