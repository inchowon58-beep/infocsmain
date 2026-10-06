export type HomeMode = "temporary" | "original";

export const TEMPORARY_NAV = [
  { href: "/#about", label: "회사소개" },
  { href: "/#services", label: "서비스" },
] as const;

export function getHomeMode(): HomeMode {
  return process.env.NEXT_PUBLIC_HOME_MODE?.trim() === "temporary" ? "temporary" : "original";
}

export function isTemporaryHome() {
  return getHomeMode() === "temporary";
}
