import type { MetadataRoute } from "next";
import { listStaticSeoPages, seoPath } from "@/lib/seo-catalog";

const ORIGIN = "https://www.infocs.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/services/ranking", "/services/sites", "/results", "/sites", "/pricing", "/about", "/kw"].map(
    (path) => ({
      url: `${ORIGIN}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    }),
  );

  const keywords = listStaticSeoPages().map((p) => ({
    url: `${ORIGIN}${seoPath(p.slug)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...keywords];
}
