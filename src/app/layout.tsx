import type { Metadata } from "next";
import { Bebas_Neue, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KakaoDock } from "@/components/KakaoDock";
import { isTemporaryHome } from "@/lib/home-mode";
import { ORIGINAL_METADATA } from "@/lib/seo-original";
import { TEMPORARY_METADATA } from "@/lib/seo-temporary";

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

export function generateMetadata(): Metadata {
  return isTemporaryHome() ? TEMPORARY_METADATA : ORIGINAL_METADATA;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${noto.variable} ${bebas.variable}`}>
      <body className={`${noto.className} min-h-screen antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <KakaoDock />
      </body>
    </html>
  );
}
