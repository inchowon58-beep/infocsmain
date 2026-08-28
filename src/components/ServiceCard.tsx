import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { ServiceIcon } from "./ServiceIcon";

type Service = (typeof SERVICES)[number];

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={service.href} className="card group block p-6">
      <div className="flex items-center justify-between">
        <span className="icon-wrap">
          <ServiceIcon name={service.icon} />
        </span>
        <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-extrabold text-accent">
          {service.tag}
        </span>
      </div>
      <p className="mt-5 text-xs font-bold tracking-wide text-accent">{service.en}</p>
      <h3 className="mt-1 text-2xl font-black tracking-tight group-hover:text-accent">{service.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mute">{service.desc}</p>
      <p className="mt-5 text-sm font-bold text-accent">자세히 보기 →</p>
    </Link>
  );
}
