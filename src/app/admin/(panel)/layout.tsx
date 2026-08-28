import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { AdminNav } from "@/components/admin/AdminNav";

export default async function AdminPanelLayout({ children }: { children: ReactNode }) {
  if (!(await isAdmin())) redirect("/admin/login");
  return (
    <div className="min-h-screen bg-ink">
      <AdminNav />
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">{children}</div>
    </div>
  );
}
