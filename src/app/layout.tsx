import type { Metadata } from "next";
import { Bebas_Neue, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | 바이럴 · 상위노출 · 임대형 사이트`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "블로그·카페·워드프레스·웹문서 상위노출·자동화·인스타그램·유튜브·지식인 바이럴 전문. 네이버 상위노출과 브랜드블로그 월관리, 업종별 임대 사이트.",
  metadataBase: new URL("https://www.infocs.co.kr"),
  openGraph: {
    title: `${COMPANY.name} INFOCS`,
    description: "네이버가 찾는 자리를 만듭니다.",
    url: "https://www.infocs.co.kr",
    siteName: COMPANY.name,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${noto.variable} ${bebas.variable}`}>
      <body className={`${noto.className} min-h-screen antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
