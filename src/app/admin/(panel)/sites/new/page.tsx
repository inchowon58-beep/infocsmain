import { SiteForm } from "@/components/admin/SiteForm";

export default function NewSitePage() {
  return (
    <div>
      <p className="display text-accent">NEW SITE</p>
      <h1 className="mt-1 text-3xl font-black">사이트 등록</h1>
      <p className="mt-2 text-sm text-mute">임대가능으로 저장하면 메인과 임대 목록에 바로 나갑니다.</p>
      <div className="mt-8">
        <SiteForm />
      </div>
    </div>
  );
}
