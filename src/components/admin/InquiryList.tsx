"use client";

import { useRouter } from "next/navigation";
import type { Inquiry } from "@/lib/types";

export function InquiryList({ items }: { items: Inquiry[] }) {
  const router = useRouter();

  async function toggleRead(id: string, read: boolean) {
    await fetch(`/api/admin/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read }),
    });
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("이 문의를 삭제할까요?")) return;
    await fetch(`/api/admin/inquiries/${id}`, { method: "DELETE" });
    router.refresh();
  }

  if (items.length === 0) {
    return <p className="mt-8 border border-dashed border-line px-5 py-12 text-center text-mute">아직 문의가 없습니다.</p>;
  }

  return (
    <div className="mt-8 space-y-4">
      {items.map((item) => (
        <article key={item.id} className={`border p-5 ${item.read ? "border-line" : "border-accent bg-ink-2"}`}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-black">
                {item.name} <span className="font-mono text-sm font-normal text-mute">{item.phone}</span>
              </p>
              <p className="mt-1 text-sm text-mute">
                {item.industry || "업종 미입력"} · {item.service || "서비스 미선택"} ·{" "}
                {new Date(item.createdAt).toLocaleString("ko-KR")}
              </p>
            </div>
            <div className="flex gap-3 text-sm font-bold">
              <button type="button" onClick={() => toggleRead(item.id, !item.read)} className="text-accent">
                {item.read ? "안읽음" : "읽음"}
              </button>
              <button type="button" onClick={() => remove(item.id)} className="text-mute">
                삭제
              </button>
            </div>
          </div>
          <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed">{item.message}</p>
        </article>
      ))}
    </div>
  );
}
