import type { ReactNode } from "react";
import { COMPANY } from "@/lib/constants";

export function KakaoIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3C6.48 3 2 6.58 2 11.02c0 2.84 1.86 5.34 4.66 6.75-.15.56-.54 2.03-.62 2.35-.1.37.13.36.28.26.11-.08 1.8-1.22 2.53-1.72.98.14 2.04.22 3.15.22 5.52 0 10-3.58 10-8.02S17.52 3 12 3z"
      />
    </svg>
  );
}

export function KakaoButton({
  className = "",
  children = "카카오톡 문의하기",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={COMPANY.kakao}
      target="_blank"
      rel="noreferrer"
      className={`btn-kakao ${className}`}
    >
      <KakaoIcon />
      {children}
    </a>
  );
}
