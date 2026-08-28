import { InquiryList } from "@/components/admin/InquiryList";
import { getInquiries } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function InquiriesPage() {
  const items = await getInquiries();
  const unread = items.filter((i) => !i.read).length;

  return (
    <div>
      <p className="display text-accent">INQUIRIES</p>
      <h1 className="mt-1 text-3xl font-black">문의</h1>
      <p className="mt-2 text-sm text-mute">미확인 {unread}건 / 전체 {items.length}건</p>
      <InquiryList items={items} />
    </div>
  );
}
