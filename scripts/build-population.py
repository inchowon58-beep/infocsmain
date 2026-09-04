# -*- coding: utf-8 -*-
"""행정안전부 주민등록 CSV → 시·도/시군구 집계 JSON."""
from __future__ import annotations

import csv
import glob
import json
import os
import re
from collections import defaultdict

DOWNLOADS = r"C:\Users\USER\Downloads"
OUT = os.path.join(os.path.dirname(__file__), "..", "src", "data", "population.json")
REPORT = os.path.join(os.path.dirname(__file__), "..", "src", "data", "population-report.txt")


def find_csv(token: str) -> str:
    files = glob.glob(os.path.join(DOWNLOADS, "*20260731.csv"))
    for path in files:
        name = os.path.basename(path)
        if token in name:
            return path
    raise FileNotFoundError(token)


def to_int(raw: str) -> int:
    s = (raw or "").strip().replace(",", "")
    if not s or s == "-":
        return 0
    try:
        return int(float(s))
    except ValueError:
        return 0


GWANGJU_GU = {"동구", "서구", "남구", "북구", "광산구"}


def official_sido(sido: str, sigungu: str) -> str:
    """2026 전남광주통합특별시를 기존 시·도 키(광주광역시·전라남도)로 되돌립니다."""
    s = (sido or "").strip()
    g = (sigungu or "").strip()
    if s == "전남광주통합특별시":
        head = g.split()[0] if g else ""
        if g in GWANGJU_GU or head in GWANGJU_GU:
            return "광주광역시"
        return "전라남도"
    return s


def parent_sigungu(sigungu: str, sido: str) -> list[str]:
    names = []
    g = (sigungu or "").strip()
    if sido.startswith("세종"):
        names.append("세종시")
        if g and g not in names:
            names.append(g)
        return names
    if g:
        names.append(g)
        if " " in g:
            names.append(g.split()[0])
    return names


def empty_bucket() -> dict:
    return {
        "p": 0,
        "m": 0,
        "f": 0,
        "a0": 0,
        "a20": 0,
        "a40": 0,
        "a60": 0,
        "h": 0,
        "h1": 0,
        "dongs": defaultdict(int),
    }


def add_pop(dst: dict, p: int, m: int, f: int, a0: int, a20: int, a40: int, a60: int, dong: str) -> None:
    dst["p"] += p
    dst["m"] += m
    dst["f"] += f
    dst["a0"] += a0
    dst["a20"] += a20
    dst["a40"] += a40
    dst["a60"] += a60
    if dong:
        dst["dongs"][dong] += p


def add_hh(dst: dict, h: int, h1: int) -> None:
    dst["h"] += h
    dst["h1"] += h1


def parse_age_indexes(header: list[str]) -> list[tuple[int, int]]:
    """(column_index, age_years)"""
    out = []
    for i, name in enumerate(header):
        m = re.search(r"(\d+)\s*세", name)
        if not m:
            continue
        age = int(m.group(1))
        if "이상" in name:
            age = max(age, 100)
        out.append((i, age))
    return out


def age_bands(row: list[str], idxs: list[tuple[int, int]]) -> tuple[int, int, int, int]:
    a0 = a20 = a40 = a60 = 0
    for i, age in idxs:
        if i >= len(row):
            continue
        n = to_int(row[i])
        if age <= 19:
            a0 += n
        elif age <= 39:
            a20 += n
        elif age <= 59:
            a40 += n
        else:
            a60 += n
    return a0, a20, a40, a60


def compact(bucket: dict, keep_dongs: bool) -> dict:
    item = {
        "p": bucket["p"],
        "m": bucket["m"],
        "f": bucket["f"],
        "a0": bucket["a0"],
        "a20": bucket["a20"],
        "a40": bucket["a40"],
        "a60": bucket["a60"],
        "h": bucket["h"],
        "h1": bucket["h1"],
    }
    if keep_dongs:
        top = sorted(bucket["dongs"].items(), key=lambda x: -x[1])[:6]
        if top:
            item["d"] = [[name, n] for name, n in top]
    return item


def main() -> None:
    pop_path = find_csv("인구수")
    hh_path = find_csv("세대수")

    sido = defaultdict(empty_bucket)
    sg = defaultdict(empty_bucket)
    national = empty_bucket()

    with open(pop_path, "r", encoding="cp949", newline="") as fh:
        reader = csv.reader(fh)
        header = next(reader)
        age_idxs = parse_age_indexes(header)
        for row in reader:
            if len(row) < 8:
                continue
            raw_s, g, dong = row[2].strip(), row[3].strip(), row[4].strip()
            s = official_sido(raw_s, g)
            p, m, f = to_int(row[5]), to_int(row[6]), to_int(row[7])
            a0, a20, a40, a60 = age_bands(row, age_idxs)
            add_pop(national, p, m, f, a0, a20, a40, a60, "")
            add_pop(sido[s], p, m, f, a0, a20, a40, a60, "")
            for name in parent_sigungu(g, s):
                add_pop(sg[f"{s}_{name}"], p, m, f, a0, a20, a40, a60, dong)

    with open(hh_path, "r", encoding="cp949", newline="") as fh:
        reader = csv.reader(fh)
        header = next(reader)
        h_i = header.index("전체세대수") if "전체세대수" in header else 6
        h1_i = header.index("1인세대") if "1인세대" in header else 7
        for row in reader:
            if len(row) <= max(h_i, h1_i, 4):
                continue
            raw_s, g = row[2].strip(), row[3].strip()
            s = official_sido(raw_s, g)
            h, h1 = to_int(row[h_i]), to_int(row[h1_i])
            add_hh(national, h, h1)
            add_hh(sido[s], h, h1)
            for name in parent_sigungu(g, s):
                add_hh(sg[f"{s}_{name}"], h, h1)

    payload = {
        "asOf": "2026-07",
        "asOfLabel": "2026년 7월 31일",
        "source": "행정안전부 주민등록 인구통계(행정동 성별·연령별 인구, 법정동 세대원수별 세대수)",
        "nat": compact(national, False),
        "sido": {k: compact(v, False) for k, v in sorted(sido.items())},
        "sg": {k: compact(v, True) for k, v in sorted(sg.items())},
    }

    out_path = os.path.abspath(OUT)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as fh:
        json.dump(payload, fh, ensure_ascii=False, separators=(",", ":"))

    report_lines = [
        f"population csv: {pop_path}",
        f"household csv: {hh_path}",
        f"national pop: {national['p']:,}",
        f"national hh: {national['h']:,}",
        f"sido count: {len(sido)}",
        f"sigungu keys: {len(sg)}",
        f"json bytes: {os.path.getsize(out_path)}",
        "sido pops:",
    ]
    for name, b in sorted(sido.items(), key=lambda x: -x[1]["p"]):
        report_lines.append(f"  {name}\t{b['p']:,}\t세대 {b['h']:,}")
    report_lines.append("sample sg:")
    for key in ["경기도_부천시", "서울특별시_강남구", "세종특별자치시_세종시", "경기도_수원시", "광주광역시_북구", "전라남도_여수시"]:
        b = sg.get(key)
        report_lines.append(f"  {key}: {b}")

    with open(os.path.abspath(REPORT), "w", encoding="utf-8") as fh:
        fh.write("\n".join(report_lines))
    print("wrote", out_path, "bytes", os.path.getsize(out_path))
    print("national", national["p"], national["h"])


if __name__ == "__main__":
    main()
