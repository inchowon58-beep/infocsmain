"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { COMPANY } from "@/lib/constants";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error || "로그인에 실패했습니다.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-5">
      <form onSubmit={onSubmit} className="w-full max-w-sm border border-line bg-ink-2 p-8">
        <p className="display text-4xl text-accent">{COMPANY.nameEn}</p>
        <h1 className="mt-2 text-2xl font-black">관리자 로그인</h1>
        <label className="mt-6 grid gap-1 text-sm">
          <span className="font-bold">비밀번호</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-line bg-ink px-4 py-3 outline-none focus:border-accent"
            autoComplete="current-password"
            required
          />
        </label>
        {error ? <p className="mt-3 text-sm text-accent">{error}</p> : null}
        <button type="submit" disabled={loading} className="btn-accent mt-6 w-full">
          {loading ? "확인 중…" : "들어가기"}
        </button>
      </form>
    </div>
  );
}
