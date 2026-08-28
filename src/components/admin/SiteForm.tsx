"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { RentalSite, SiteStatus } from "@/lib/types";
import { PRICING } from "@/lib/constants";

type Props = {
  site?: RentalSite;
};

const field = "w-full border border-line bg-ink-2 px-4 py-3 outline-none focus:border-accent";

export function SiteForm({ site }: Props) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(site?.previewImage || "");
  const [uploading, setUploading] = useState(false);

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const body = await res.json().catch(() => ({}));
    setUploading(false);
    if (!res.ok) {
      setError(body.error || "업로드 실패");
      return;
    }
    setPreviewImage(body.url);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      url: form.get("url"),
      industry: form.get("industry"),
      monthlyRent: Number(form.get("monthlyRent")),
      setupCost: Number(form.get("setupCost")),
      previewImage,
      description: form.get("description"),
      status: form.get("status") as SiteStatus,
      sortOrder: Number(form.get("sortOrder") || 0),
    };
    const url = site ? `/api/admin/sites/${site.id}` : "/api/admin/sites";
    const res = await fetch(url, {
      method: site ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setLoading(false);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error || "저장에 실패했습니다.");
      return;
    }
    router.push("/admin/sites");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="grid max-w-2xl gap-4">
      <label className="grid gap-1 text-sm">
        <span className="font-bold">사이트명</span>
        <input name="name" required defaultValue={site?.name} className={field} placeholder="강남피부과 사이트" />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-bold">사이트 주소</span>
        <input name="url" required defaultValue={site?.url} className={field} placeholder="https://example.co.kr" />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-bold">업종</span>
        <input name="industry" required defaultValue={site?.industry} className={field} placeholder="피부과, 인테리어, 학원…" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="font-bold">월 임대비용 (원)</span>
          <input
            name="monthlyRent"
            type="number"
            min={0}
            step={10000}
            required
            defaultValue={site?.monthlyRent ?? PRICING.rankingMonthly}
            className={field}
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-bold">사이트 기본 셋팅비용 (원)</span>
          <input
            name="setupCost"
            type="number"
            min={0}
            step={10000}
            required
            defaultValue={site?.setupCost ?? PRICING.rankingSetup}
            className={field}
          />
        </label>
      </div>
      <div className="grid gap-1 text-sm">
        <span className="font-bold">미리보기 이미지</span>
        <input
          value={previewImage}
          onChange={(e) => setPreviewImage(e.target.value)}
          className={field}
          placeholder="이미지 URL 또는 업로드"
        />
        <input type="file" accept="image/*" onChange={onUpload} className="mt-2 text-sm text-mute" />
        {uploading ? <p className="text-mute">올리는 중…</p> : null}
        {previewImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={previewImage} alt="미리보기" className="mt-2 max-h-40 border border-line object-cover" />
        ) : null}
      </div>
      <label className="grid gap-1 text-sm">
        <span className="font-bold">짧은 설명</span>
        <textarea name="description" rows={3} defaultValue={site?.description} className={field} />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="font-bold">공개 여부</span>
          <select name="status" defaultValue={site?.status ?? "available"} className={field}>
            <option value="available">임대가능 (메인 노출)</option>
            <option value="rented">임대중 (숨김)</option>
            <option value="hidden">비공개</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-bold">정렬 순서</span>
          <input name="sortOrder" type="number" defaultValue={site?.sortOrder ?? 0} className={field} />
        </label>
      </div>
      {error ? <p className="text-sm text-accent">{error}</p> : null}
      <button type="submit" disabled={loading} className="btn-accent w-fit">
        {loading ? "저장 중…" : site ? "수정 저장" : "등록"}
      </button>
    </form>
  );
}
