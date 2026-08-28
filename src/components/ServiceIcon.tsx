import {
  BookOpen,
  Coffee,
  Globe,
  HelpCircle,
  Share2,
  Megaphone,
  RefreshCw,
  Search,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, { Icon: LucideIcon; anim: string }> = {
  blog: { Icon: BookOpen, anim: "anim-float" },
  cafe: { Icon: Coffee, anim: "anim-bounce" },
  wordpress: { Icon: Globe, anim: "anim-pulse" },
  ranking: { Icon: Search, anim: "anim-bounce" },
  automation: { Icon: RefreshCw, anim: "anim-spin" },
  sns: { Icon: Share2, anim: "anim-pulse" },
  kin: { Icon: HelpCircle, anim: "anim-float" },
  viral: { Icon: Megaphone, anim: "anim-bounce" },
};

export function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const item = MAP[name] ?? MAP.viral;
  const Icon = item.Icon;
  return <Icon className={`${className} ${item.anim}`} strokeWidth={2.2} />;
}
