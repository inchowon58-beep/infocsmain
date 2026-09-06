# -*- coding: utf-8 -*-
"""네이버 웹문서 등록용 URL. 검색 수요 높은 조합을 앞에 둡니다."""
from __future__ import annotations

import os
import re

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
CATALOG = os.path.join(ROOT, "src", "lib", "seo-catalog.ts")
REGIONS = os.path.join(ROOT, "src", "lib", "korea-regions.ts")
OUT = os.path.join(ROOT, "naver-webdoc-urls.txt")
DESKTOP = os.path.join(os.path.expanduser("~"), "Desktop", "인포씨에스-네이버웹문서등록-URL.txt")
ORIGIN = "https://www.infocs.co.kr"

CORE = [
    f"{ORIGIN}/",
    f"{ORIGIN}/services",
    f"{ORIGIN}/services/ranking",
    f"{ORIGIN}/services/sites",
    f"{ORIGIN}/results",
    f"{ORIGIN}/sites",
    f"{ORIGIN}/pricing",
    f"{ORIGIN}/about",
    f"{ORIGIN}/kw",
]

INTENT_FIRST = [
    "홈페이지제작",
    "사이트제작",
    "웹문서상위노출",
    "네이버사이트등록",
    "네이버사이트노출",
    "홈페이지광고",
    "홈페이지상위노출",
    "웹사이트상위노출",
    "마케팅",
    "광고",
    "블로그광고",
    "블로그마케팅",
    "카페광고",
    "카페마케팅",
    "지식인광고",
    "블로그홍보",
]

INDUSTRY_FIRST = [
    "맛집",
    "병원",
    "성형외과",
    "치과",
    "피부과",
    "학원",
    "인테리어",
    "강아지분양",
    "카페",
    "음식점",
    "한의원",
    "안과",
    "변호사",
    "부동산",
    "청소",
    "미용실",
    "동물병원",
    "헬스장",
    "산부인과",
    "정형외과",
    "이비인후과",
    "내과",
    "소아과",
    "약국",
    "뷰티",
    "네일샵",
    "피부관리",
    "마사지",
    "영어학원",
    "수학학원",
    "이사",
    "철거",
    "시공",
    "건축",
    "세무사",
    "법무사",
    "개인회생",
    "공인중개사",
    "고양이분양",
    "애견미용",
    "애견카페",
    "프랜차이즈",
    "웨딩",
    "필라테스",
    "요가",
    "자동차정비",
    "중고차",
    "국제결혼",
    "어린이집",
    "키즈카페",
    "산후조리원",
]

PLACE_FIRST = [
    "부천",
    "서울",
    "경기",
    "강남",
    "수원",
    "부산",
    "인천",
    "대구",
    "대전",
    "광주",
    "서초",
    "송파",
    "마포",
    "성남",
    "용인",
    "고양",
    "화성",
    "남양주",
    "김포",
    "하남",
    "평택",
    "파주",
    "연수",
    "부평",
    "해운대",
    "제주",
    "세종",
    "천안",
    "청주",
    "전주",
]


def slugs(path: str, pattern: str) -> list[str]:
    text = open(path, encoding="utf-8").read()
    return re.findall(pattern, text)


def rank(name: str, order: list[str]) -> int:
    return order.index(name) if name in order else 1000 + abs(hash(name)) % 1000


def url(slug: str) -> str:
    return f"{ORIGIN}/kw/{slug}"


def main() -> None:
    industries = slugs(CATALOG, r'\{ slug: "([^"]+)", label: "[^"]+", group:')
    intents = slugs(CATALOG, r'\{ slug: "([^"]+)", label: "[^"]+", family:')
    sidos = slugs(REGIONS, r'^\s+[가-힣]+: "([가-힣]+)",', )  # not used
    sido_shorts = re.findall(r'^\s+[가-힣]+: "([가-힣]+)",', open(REGIONS, encoding="utf-8").read(), re.M)
    # SIDO_SHORT values only, unique keep order
    seen = set()
    sidos_short = []
    for item in sido_shorts:
        if item not in seen and item in {"서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"}:
            seen.add(item)
            sidos_short.append(item)

    popular = [
        "강남", "서초", "송파", "마포", "강서", "노원", "관악", "영등포",
        "수원", "성남", "용인", "고양", "화성", "부천", "남양주", "김포",
        "하남", "평택", "파주", "연수", "부평", "서구", "해운대", "부산진",
        "수성", "유성", "북구", "제주", "세종", "천안", "청주", "전주",
    ]

    rows: list[tuple[int, int, int, int, str]] = []
    # national
    for industry in industries:
        for intent in intents:
            rows.append((0, rank(industry, INDUSTRY_FIRST), rank(intent, INTENT_FIRST), 0, f"{industry}-{intent}"))
    for place in sidos_short:
        for industry in industries:
            for intent in ("홈페이지제작", "웹문서상위노출"):
                rows.append((1, rank(place, PLACE_FIRST), rank(industry, INDUSTRY_FIRST), rank(intent, INTENT_FIRST), f"{place}-{industry}-{intent}"))
    for place in popular:
        for industry in industries:
            for intent in ("홈페이지제작", "웹문서상위노출"):
                rows.append((2, rank(place, PLACE_FIRST), rank(industry, INDUSTRY_FIRST), rank(intent, INTENT_FIRST), f"{place}-{industry}-{intent}"))

    rows.sort()
    seen_slug: set[str] = set()
    lines = list(CORE)
    for *_, slug in rows:
        if slug in seen_slug:
            continue
        seen_slug.add(slug)
        lines.append(url(slug))

    text = "\n".join(lines) + "\n"
    for dest in (OUT, DESKTOP):
        with open(dest, "w", encoding="utf-8", newline="\n") as fh:
            fh.write(text)
        print("wrote", dest, "count", len(lines))


if __name__ == "__main__":
    main()
