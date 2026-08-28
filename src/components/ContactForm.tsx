"use client";

import { useState } from "react";
import { SERVICE_OPTIONS } from "@/lib/constants";

export function ContactForm({ defaultService = "", defaultIndustry = "" }: { defaultService?: string; defaultIndustry?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "전송에 실패했습니다.");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "전송에 실패했습니다.");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-accent bg-ink-2 p-8">
        <p className="display text-4xl text-accent">SENT</p>
        <p className="mt-3 text-lg font-bold">문의가 접수되었습니다.</p>
        <p className="mt-2 text-sm text-mute">확인 후 연락드리겠습니다.</p>
      </div>
    );
  }

  const field = "w-full border border-line bg-ink px-4 py-3 text-paper outline-none focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1 text-sm">
        <span className="font-bold">이름</span>
        <input name="name" required className={field} placeholder="홍길동" />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-bold">연락처</span>
        <input name="phone" required className={field} placeholder="010-0000-0000" />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-bold">업종</span>
        <input
          name="industry"
          className={field}
          placeholder="병원, 인테리어, 학원 등"
          defaultValue={defaultIndustry}
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-bold">관심 서비스</span>
        <select name="service" className={field} defaultValue={defaultService}>
          <option value="">선택</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-bold">문의 내용</span>
        <textarea name="message" required rows={5} className={field} placeholder="원하시는 키워드, 지역, 예산을 알려주세요." />
      </label>
      {status === "error" ? <p className="text-sm text-accent">{error}</p> : null}
      <button type="submit" disabled={status === "loading"} className="btn-accent justify-center">
        {status === "loading" ? "보내는 중…" : "문의 보내기"}
      </button>
    </form>
  );
}
