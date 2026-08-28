"use client";

import { useRouter } from "next/navigation";

export function DeleteSiteButton({ id, name }: { id: string; name: string }) {
  const router = useRouter();
  async function onClick() {
    if (!confirm(`「${name}」 사이트를 삭제할까요?`)) return;
    await fetch(`/api/admin/sites/${id}`, { method: "DELETE" });
    router.refresh();
  }
  return (
    <button type="button" onClick={onClick} className="font-bold text-mute hover:text-accent">
      삭제
    </button>
  );
}
