import { OriginalHome } from "@/components/home/OriginalHome";
import { TemporaryCorporateHome } from "@/components/home/TemporaryCorporateHome";
import { isTemporaryHome } from "@/lib/home-mode";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  if (isTemporaryHome()) {
    return <TemporaryCorporateHome />;
  }
  return <OriginalHome />;
}
