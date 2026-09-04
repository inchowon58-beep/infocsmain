import { COMPANY } from "@/lib/constants";

export function WhyInfocs() {
  return (
    <div className="space-y-10">
      <section className="story-block">
        <p className="story-kicker">WHAT WE DO</p>
        <h2 className="mt-2 text-2xl font-black md:text-4xl">도대체 무엇을 하는 곳인가.</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-paper-dim">
          <p>
            지금 네이버에 홈페이지나 랜딩페이지가 상위에 뜨는 거, 많이 보이시죠? 그 자리를{" "}
            <strong className="text-paper">대량으로 올리는</strong> 실행이 인포씨에스입니다.
          </p>
          <p>
            인포씨에스는 <strong className="text-paper">광고 대행사가 아닙니다.</strong> 광고를 받아서 다른 곳에 넘기는
            곳이 아니라, 우리가 직접 실행하는 <strong className="text-accent">국내 유일 웹문서 상위노출 실행사</strong>
            입니다. 고객은 최저 금액으로 효과를 보게 만드는 것이 일입니다.
          </p>
          <p>
            하는 일은 단순합니다. 사이트에 네이버 상위노출이 되도록 프로그램을 이식하고,{" "}
            <strong className="text-paper">한 달에 1,000개 글</strong>을 웹문서로 노출합니다. 네이버에서 검색하면 그
            사이트가 뜨고, 고객이 방문합니다. 그게 전부입니다.
          </p>
          <p>
            이 방식으로 네이버 상위노출을 하는 곳은 지금{" "}
            <strong className="text-hot">오직 {COMPANY.name}가 유일</strong>
            합니다.
          </p>
        </div>
      </section>

      <section className="story-block">
        <p className="story-kicker">NOT BLOG, NOT CAFE</p>
        <h2 className="mt-2 text-2xl font-black md:text-3xl">블로그·카페처럼 글이 사라지지 않습니다.</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-paper-dim">
          <p>
            블로그는 아이디가 죽으면 글이 같이 사라집니다. 카페는 카페가 죽거나 카페 아이디가 죽으면 글이 사라집니다.
            웹문서는 사이트에 심습니다. 아이디 하나에 매달리지 않습니다.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-red-500/30 bg-[#1a0b0b] p-6 text-white md:p-8">
        <p className="display text-[0.95rem] tracking-[0.18em] text-red-400">LEGAL</p>
        <h2 className="mt-2 text-2xl font-black">네이버 아이디 구매는 범죄입니다.</h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/70 md:text-base">
          <p>
            네이버 아이디를 사서 돌리는 방식은 <strong className="text-white">정보통신망법 위반</strong>입니다. 크게
            처벌받을 수 있습니다. 그런 업체를 통해 광고를 진행한 <strong className="text-white">광고주 역시 처벌
            대상</strong>이 될 수 있습니다.
          </p>
          <p>
            이 경우 경찰청 조사를 받을 수 있습니다. 분명한 범죄 행위입니다. 그러니 그러지 마십시오. 이제는 불법이 아닌
            합법적인 방법으로, 마음 편하게 광고하십시오.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-accent/30 bg-[#06140c] p-6 text-white md:p-8">
        <p className="story-kicker">WHY ONLY US</p>
        <h2 className="mt-2 text-2xl font-black md:text-3xl">우리가 할 수 있는 이유. 기술력, 정보력, 장비.</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-white/70">
          <p>
            인포씨에스는 이 작업을 <strong className="text-white">전부 자체적으로</strong> 합니다. 자체{" "}
            <strong className="text-accent">컴퓨터 300대</strong>로 실행합니다. 상위노출을 위한 기술력, 정보력, 그리고
            장비까지 직접 가진 <strong className="text-hot">유일한 웹문서 상위노출 실행사</strong>입니다.
          </p>
          <p>광고를 받아서 넘기지 않습니다. 우리가 직접 돌리니, 고객은 최저 금액으로 효과를 볼 수 있습니다.</p>
        </div>
      </section>
    </div>
  );
}
