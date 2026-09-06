# -*- coding: utf-8 -*-
"""네이버 IndexNow로 사이트 전체 URL 갱신 요청."""
from __future__ import annotations

import json
import ssl
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
URL_FILE = ROOT / "naver-webdoc-urls.txt"
KEY = "f9ffdfed6e9c41fca4d81c20c01cb123"
HOST = "www.infocs.co.kr"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
NAVER = "https://searchadvisor.naver.com/indexnow"
INDEXNOW = "https://api.indexnow.org/indexnow"


def encode_url(raw: str) -> str:
    parts = urllib.parse.urlsplit(raw.strip())
    path = urllib.parse.quote(parts.path, safe="/")
    return urllib.parse.urlunsplit((parts.scheme, parts.netloc, path, parts.query, parts.fragment))


def load_urls() -> list[str]:
    seen: set[str] = set()
    out: list[str] = []
    for line in URL_FILE.read_text(encoding="utf-8").splitlines():
        raw = line.strip()
        if not raw or raw.startswith("#"):
            continue
        encoded = encode_url(raw)
        if encoded in seen:
            continue
        seen.add(encoded)
        out.append(encoded)
    return out


def post(endpoint: str, urls: list[str]) -> tuple[int, str]:
    payload = json.dumps(
        {
            "host": HOST,
            "key": KEY,
            "keyLocation": KEY_LOCATION,
            "urlList": urls,
        },
        ensure_ascii=True,
    ).encode("utf-8")
    req = urllib.request.Request(
        endpoint,
        data=payload,
        method="POST",
        headers={
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": "InfoCS-IndexNow/1.0",
        },
    )
    ctx = ssl.create_default_context()
    try:
        with urllib.request.urlopen(req, timeout=120, context=ctx) as res:
            body = res.read().decode("utf-8", "replace")
            return res.status, body
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", "replace")
        return e.code, body


def verify_key() -> str:
    req = urllib.request.Request(KEY_LOCATION, headers={"User-Agent": "InfoCS-IndexNow/1.0"})
    with urllib.request.urlopen(req, timeout=30) as res:
        text = res.read().decode("utf-8").strip()
        if text != KEY:
            raise RuntimeError(f"key file mismatch: {text!r}")
        return f"key ok {res.status} {KEY_LOCATION}"


def main() -> None:
    print(verify_key())
    urls = load_urls()
    print("urls", len(urls))
    for name, endpoint in (("naver", NAVER), ("indexnow", INDEXNOW)):
        status, body = post(endpoint, urls)
        print(name, status, body[:300])
        if status not in (200, 202):
            raise SystemExit(f"{name} submit failed: {status}")


if __name__ == "__main__":
    main()
