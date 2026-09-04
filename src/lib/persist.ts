import { promises as fs } from "fs";
import path from "path";
import { get, put } from "@vercel/blob";

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
const BLOB_ACCESS = process.env.BLOB_ACCESS === "public" ? "public" : "private";

function hasBlob() {
  return Boolean(BLOB_TOKEN || process.env.BLOB_STORE_ID);
}

function blobAuth() {
  return BLOB_TOKEN ? { token: BLOB_TOKEN } : {};
}

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

async function streamToText(stream: ReadableStream<Uint8Array>) {
  return new Response(stream).text();
}

async function readBlobJson<T>(name: string): Promise<T | null> {
  if (!hasBlob()) return null;
  const fetched = await get(blobPath(name), {
    access: BLOB_ACCESS,
    useCache: false,
    ...blobAuth(),
  });
  if (!fetched?.stream) return null;
  return JSON.parse(await streamToText(fetched.stream)) as T;
}

async function writeBlobJson(name: string, value: unknown) {
  await put(blobPath(name), JSON.stringify(value), {
    access: BLOB_ACCESS,
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    ...blobAuth(),
  });
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
  if (hasBlob()) {
    const fromBlob = await readBlobJson<T>(name);
    if (fromBlob != null) return fromBlob;
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
  if (hasBlob()) {
    await writeBlobJson(name, value);
    return;
  }
  if (REDIS_URL && REDIS_TOKEN) {
    await redisCommand(["SET", redisKey(name), JSON.stringify(value)]);
    return;
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
  if (hasBlob()) {
    const pathname = `infocs/uploads/${filename}`;
    const blob = await put(pathname, buf, {
      access: BLOB_ACCESS,
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType,
      ...blobAuth(),
    });
    return BLOB_ACCESS === "public" ? blob.url : `/api/files/${filename}`;
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

export async function readUpload(filename: string) {
  if (!hasBlob()) return null;
  const fetched = await get(`infocs/uploads/${filename}`, {
    access: BLOB_ACCESS,
    useCache: true,
    ...blobAuth(),
  });
  if (!fetched?.stream) return null;
  return {
    stream: fetched.stream,
    contentType: fetched.blob.contentType || "application/octet-stream",
  };
}
