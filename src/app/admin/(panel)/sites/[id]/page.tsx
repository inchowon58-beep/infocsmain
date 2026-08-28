import { notFound } from "next/navigation";
import { SiteForm } from "@/components/admin/SiteForm";
import { getSite } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function EditSitePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const site = await getSite(id);
  if (!site) notFound();

  return (
    <div>
      <p className="display text-accent">EDIT SITE</p>
      <h1 className="mt-1 text-3xl font-black">{site.name}</h1>
      <div className="mt-8">
        <SiteForm site={site} />
      </div>
    </div>
  );
}
