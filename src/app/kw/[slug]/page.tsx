import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoDocView } from "@/components/SeoDocView";
import { COMPANY } from "@/lib/constants";
import { listStaticSeoPages, parseSeoSlug, seoPath } from "@/lib/seo-catalog";
import { buildSeoDoc } from "@/lib/seo-content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return listStaticSeoPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = parseSeoSlug(slug);
  if (!page) return { title: "페이지 없음" };
  const doc = buildSeoDoc(page);
  const url = `https://www.infocs.co.kr${seoPath(page.slug)}`;
  return {
    title: { absolute: doc.title },
    description: doc.description,
    keywords: [page.keyword, page.industry.label, page.intent.label, "웹문서 상위노출", COMPANY.name],
    alternates: { canonical: url },
    openGraph: {
      title: doc.title,
      description: doc.description,
      url,
      locale: "ko_KR",
      siteName: COMPANY.name,
    },
  };
}

export default async function KeywordPage({ params }: Props) {
  const { slug } = await params;
  const page = parseSeoSlug(slug);
  if (!page) notFound();
  const doc = buildSeoDoc(page);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: doc.h1,
    description: doc.description,
    author: { "@type": "Organization", name: COMPANY.legal },
    publisher: { "@type": "Organization", name: COMPANY.legal },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: doc.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SeoDocView page={page} doc={doc} />
    </>
  );
}
