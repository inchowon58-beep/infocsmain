export function formatWon(value: number): string {
  return `${value.toLocaleString("ko-KR")}원`;
}

export function formatMan(value: number): string {
  if (value % 10000 === 0) {
    return `${(value / 10000).toLocaleString("ko-KR")}만원`;
  }
  return formatWon(value);
}

export function displayHost(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}
