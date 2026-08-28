import { promises as fs } from "fs";
import path from "path";
import type { Inquiry, RentalSite } from "./types";

const dataDir = path.join(process.cwd(), "data");
const sitesFile = path.join(dataDir, "sites.json");
const inquiriesFile = path.join(dataDir, "inquiries.json");

async function ensureDir() {
  await fs.mkdir(dataDir, { recursive: true });
}

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(file, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson(file: string, value: unknown) {
  await ensureDir();
  await fs.writeFile(file, JSON.stringify(value, null, 2), "utf8");
}

export async function getSites(): Promise<RentalSite[]> {
  const sites = await readJson<RentalSite[]>(sitesFile, []);
  return [...sites].sort((a, b) => a.sortOrder - b.sortOrder || a.createdAt.localeCompare(b.createdAt));
}

export async function getPublicSites(): Promise<RentalSite[]> {
  const sites = await getSites();
  return sites.filter((s) => s.status === "available");
}

export async function getSite(id: string): Promise<RentalSite | undefined> {
  const sites = await getSites();
  return sites.find((s) => s.id === id);
}

export async function saveSites(sites: RentalSite[]) {
  await writeJson(sitesFile, sites);
}

export async function upsertSite(input: Omit<RentalSite, "id" | "createdAt"> & { id?: string }): Promise<RentalSite> {
  const sites = await getSites();
  if (input.id) {
    const idx = sites.findIndex((s) => s.id === input.id);
    if (idx < 0) throw new Error("사이트를 찾을 수 없습니다.");
    const next: RentalSite = { ...sites[idx], ...input, id: sites[idx].id, createdAt: sites[idx].createdAt };
    sites[idx] = next;
    await saveSites(sites);
    return next;
  }
  const site: RentalSite = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  sites.push(site);
  await saveSites(sites);
  return site;
}

export async function deleteSite(id: string) {
  const sites = await getSites();
  await saveSites(sites.filter((s) => s.id !== id));
}

export async function getInquiries(): Promise<Inquiry[]> {
  const items = await readJson<Inquiry[]>(inquiriesFile, []);
  return [...items].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function addInquiry(input: Omit<Inquiry, "id" | "createdAt" | "read">): Promise<Inquiry> {
  const items = await getInquiries();
  const inquiry: Inquiry = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    read: false,
  };
  items.unshift(inquiry);
  await writeJson(inquiriesFile, items);
  return inquiry;
}

export async function markInquiryRead(id: string, read: boolean) {
  const items = await getInquiries();
  const idx = items.findIndex((i) => i.id === id);
  if (idx < 0) return;
  items[idx] = { ...items[idx], read };
  await writeJson(inquiriesFile, items);
}

export async function deleteInquiry(id: string) {
  const items = await getInquiries();
  await writeJson(inquiriesFile, items.filter((i) => i.id !== id));
}

export async function unreadInquiryCount(): Promise<number> {
  const items = await getInquiries();
  return items.filter((i) => !i.read).length;
}
