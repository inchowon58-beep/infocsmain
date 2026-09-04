import { saveUpload } from "./persist";

const MIN_BYTES = 8_000;
const MAX_BYTES = 5 * 1024 * 1024;

export function assertPublicHttpUrl(raw: string) {
  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    throw new Error("사이트 주소를 확인하세요.");
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("http(s) 주소만 등록할 수 있습니다.");
  }
  const host = parsed.hostname.toLowerCase();
  if (
    host === "localhost" ||
    host.endsWith(".localhost") ||
    host === "0.0.0.0" ||
    host === "::1" ||
    host.endsWith(".local") ||
    host.endsWith(".internal")
  ) {
    throw new Error("사이트 주소를 확인하세요.");
  }
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) {
    const [a, b] = host.split(".").map(Number);
    if (a === 10 || a === 127 || a === 0 || a === 169 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168)) {
      throw new Error("사이트 주소를 확인하세요.");
    }
  }
  return parsed.toString();
}

function sniffImage(buf: Buffer): { contentType: string; ext: string } | null {
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
    return { contentType: "image/jpeg", ext: "jpg" };
  }
  if (buf.length >= 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
    return { contentType: "image/png", ext: "png" };
  }
  if (buf.length >= 12 && buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    return { contentType: "image/webp", ext: "webp" };
  }
  return null;
}

async function fetchOk(url: string, timeoutMs: number): Promise<Response | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: "follow",
      headers: {
        Accept: "application/json,image/*,*/*",
        "User-Agent": "InfoCS-PreviewBot/1.0",
      },
      cache: "no-store",
    });
    return res.ok ? res : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function bufferFromResponse(res: Response): Promise<Buffer | null> {
  const raw = Buffer.from(await res.arrayBuffer());
  if (raw.length < MIN_BYTES || raw.length > MAX_BYTES) return null;
  return sniffImage(raw) ? raw : null;
}

async function fromMicrolink(target: string): Promise<Buffer | null> {
  const api = new URL("https://api.microlink.io/");
  api.searchParams.set("url", target);
  api.searchParams.set("screenshot", "true");
  api.searchParams.set("meta", "false");
  api.searchParams.set("viewport.width", "1440");
  api.searchParams.set("viewport.height", "900");
  const res = await fetchOk(api.toString(), 25_000);
  if (!res) return null;
  const json = (await res.json().catch(() => null)) as {
    status?: string;
    data?: { screenshot?: { url?: string } };
  } | null;
  const shot = json?.status === "success" ? json.data?.screenshot?.url : "";
  if (!shot) return null;
  const img = await fetchOk(shot, 20_000);
  return img ? bufferFromResponse(img) : null;
}

async function fromThum(target: string): Promise<Buffer | null> {
  const img = await fetchOk(`https://image.thum.io/get/width/1440/crop/900/noanimate/${target}`, 25_000);
  return img ? bufferFromResponse(img) : null;
}

async function fromMshots(target: string): Promise<Buffer | null> {
  const url = `https://s0.wp.com/mshots/v1/${encodeURIComponent(target)}?w=1440&h=900`;
  for (let i = 0; i < 4; i += 1) {
    const img = await fetchOk(url, 20_000);
    const buf = img ? await bufferFromResponse(img) : null;
    if (buf) return buf;
    await new Promise((resolve) => setTimeout(resolve, 2500));
  }
  return null;
}

export async function captureSitePreview(siteUrl: string): Promise<string> {
  const target = assertPublicHttpUrl(siteUrl);
  const buf = (await fromMicrolink(target)) || (await fromThum(target)) || (await fromMshots(target));
  if (!buf) {
    throw new Error("사이트 메인 화면을 캡처하지 못했습니다. 미리보기 이미지를 직접 올려 주세요.");
  }
  const kind = sniffImage(buf);
  if (!kind) {
    throw new Error("사이트 메인 화면을 캡처하지 못했습니다. 미리보기 이미지를 직접 올려 주세요.");
  }
  const name = `shot-${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${kind.ext}`;
  return saveUpload(name, buf, kind.contentType);
}
