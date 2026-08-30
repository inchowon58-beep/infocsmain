export function TrustNotes() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          [
            "직접 확인",
            "임대 사이트를 지금 열어서 보시면 됩니다. 말만 하는 견적이 아니라, 돌아가고 있는 사이트입니다.",
          ],
          [
            "합법 실행",
            "네이버 아이디를 사서 돌리지 않습니다. 사이트에 프로그램을 이식하고, 글을 웹문서로 남깁니다.",
          ],
          [
            "기간은 안내",
            "셋팅 후 발행을 시작하면 검색에 붙이기 시작합니다. 업종·키워드에 따라 기간을 상담에서 분명히 말씀드립니다.",
          ],
        ].map(([t, d]) => (
          <div key={t} className="card p-6">
            <h3 className="text-lg font-black">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mute">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
