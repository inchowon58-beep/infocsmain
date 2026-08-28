import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <p className="display text-6xl text-accent">404</p>
      <h1 className="mt-4 text-3xl font-black">페이지를 찾을 수 없습니다.</h1>
      <Link href="/" className="btn-accent mt-8 inline-flex">
        홈으로
      </Link>
    </div>
  );
}
