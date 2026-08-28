import { promises as fs } from "fs";
import path from "path";
import { list, put } from "@vercel/blob";

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

function isServerless() {
  return Boolean(
    process.env.VERCEL ||
      process.env.AWS_LAMBDA_FUNCTION_NAME ||
      process.env.NETLIFY ||
      process.env.LAMBDA_TASK_ROOT,
  );
}

function diskDir() {
  if (isServerless()) return "/tmp/infocs-data";
  return path.join(process.cwd(), "data");
}

function bundledFile(name: string) {
  return path.join(process.cwd(), "data", name);
}

function blobPath(name: string) {
  return `infocs/${name}`;
}

function redisKey(name: string) {
  return `infocs:${name}`;
}

async function redisCommand(command: unknown[]): Promise<unknown> {
  if (!REDIS_URL || !REDIS_TOKEN) return null;
  const res = await fetch(REDIS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REDIS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) throw new Error("저장소 연결에 실패했습니다.");
  const body = (await res.json()) as { result?: unknown };
  return body.result ?? null;
}

async function readBlobJson<T>(name: string): Promise<T | null> {
  if (!BLOB_TOKEN) return null;
  const { blobs } = await list({ prefix: blobPath(name), token: BLOB_TOKEN, limit: 20 });
  const hit = blobs.find((b) => b.pathname === blobPath(name)) ?? blobs[0];
  if (!hit) return null;
  const res = await fetch(hit.url, { cache: "no-store" });
  if (!res.ok) return null;
  return (await res.json()) as T;
}

async function writeBlobJson(name: string, value: unknown) {
  if (!BLOB_TOKEN) return false;
  await put(blobPath(name), JSON.stringify(value), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    token: BLOB_TOKEN,
  });
  return true;
}

async function readDiskJson<T>(name: string, fallback: T): Promise<T> {
  const primary = path.join(diskDir(), name);
  try {
    return JSON.parse(await fs.readFile(primary, "utf8")) as T;
  } catch {
    try {
      return JSON.parse(await fs.readFile(bundledFile(name), "utf8")) as T;
    } catch {
      return fallback;
    }
  }
}

async function writeDiskJson(name: string, value: unknown) {
  const dir = diskDir();
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, name), JSON.stringify(value, null, 2), "utf8");
}

export async function loadJson<T>(name: string, fallback: T): Promise<T> {
  if (BLOB_TOKEN) {
    try {
      const fromBlob = await readBlobJson<T>(name);
      if (fromBlob != null) return fromBlob;
    } catch {
      // Blob 미연결 시 디스크/임시폴더로 진행
    }
  }
  if (REDIS_URL && REDIS_TOKEN) {
    try {
      const raw = await redisCommand(["GET", redisKey(name)]);
      if (typeof raw === "string" && raw) return JSON.parse(raw) as T;
    } catch {
      // Redis 미연결 시 디스크/임시폴더로 진행
    }
  }
  return readDiskJson(name, fallback);
}

export async function saveJson(name: string, value: unknown) {
  if (BLOB_TOKEN) {
    try {
      await writeBlobJson(name, value);
      return;
    } catch {
      // 아래로 폴백
    }
  }
  if (REDIS_URL && REDIS_TOKEN) {
    try {
      await redisCommand(["SET", redisKey(name), JSON.stringify(value)]);
      return;
    } catch {
      // 아래로 폴백
    }
  }
  try {
    await writeDiskJson(name, value);
  } catch (err) {
    const code = err && typeof err === "object" && "code" in err ? String((err as { code?: string }).code) : "";
    if (code === "EROFS" || isServerless()) {
      throw new Error(
        "배포 서버는 파일을 저장할 수 없습니다. Vercel Storage에서 Blob을 만들거나, Upstash Redis 환경변수를 넣어 주세요.",
      );
    }
    throw err;
  }
}

export async function saveUpload(filename: string, buf: Buffer, contentType: string): Promise<string> {
  if (BLOB_TOKEN) {
    const blob = await put(`infocs/uploads/${filename}`, buf, {
      access: "public",
      addRandomSuffix: false,
      contentType,
      token: BLOB_TOKEN,
    });
    return blob.url;
  }
  if (isServerless()) {
    if (buf.length > 700_000) {
      throw new Error("배포 환경에서는 미리보기 이미지는 700KB 이하만 가능합니다. 이미지 URL을 붙여 넣어도 됩니다.");
    }
    return `data:${contentType};base64,${buf.toString("base64")}`;
  }
  const dir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, filename), buf);
  return `/uploads/${filename}`;
}
