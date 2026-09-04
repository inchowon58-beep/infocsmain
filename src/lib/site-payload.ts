import type { RentalSite, SiteStatus } from "./types";
import { assertPublicHttpUrl } from "./screenshot";

const STATUSES: SiteStatus[] = ["available", "rented", "hidden"];

export function parseSitePayload(body: Record<string, unknown>, existingId?: string): Omit<RentalSite, "id" | "createdAt"> & { id?: string } {
  const name = String(body.name || "").trim();
  const url = String(body.url || "").trim();
  const industry = String(body.industry || "").trim();
  if (!name) throw new Error("사이트명을 입력하세요.");
  if (!url) throw new Error("사이트 주소를 입력하세요.");
  if (!industry) throw new Error("업종을 입력하세요.");

  let normalizedUrl = url;
  if (!/^https?:\/\//i.test(normalizedUrl)) {
    normalizedUrl = `https://${normalizedUrl}`;
  }
  normalizedUrl = assertPublicHttpUrl(normalizedUrl);

  const monthlyRent = Number(body.monthlyRent);
  const setupCost = Number(body.setupCost);
  if (!Number.isFinite(monthlyRent) || monthlyRent < 0) throw new Error("월 임대비용을 확인하세요.");
  if (!Number.isFinite(setupCost) || setupCost < 0) throw new Error("셋팅비용을 확인하세요.");

  const status = STATUSES.includes(body.status as SiteStatus) ? (body.status as SiteStatus) : "available";
  const sortOrder = Number(body.sortOrder ?? 0);

  return {
    id: existingId,
    name,
    url: normalizedUrl,
    industry,
    monthlyRent,
    setupCost,
    previewImage: String(body.previewImage || "").trim(),
    description: String(body.description || "").trim(),
    status,
    sortOrder: Number.isFinite(sortOrder) ? sortOrder : 0,
  };
}
