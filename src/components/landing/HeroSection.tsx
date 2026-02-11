import heroBackground from "../../assets/image-background.png";
import ArrowDown from "../../assets/icon-arrow-down.svg";

export default function HeroSection() {
  const cards = [
    ["채용 공고는 계속 올리는데", "지원자가 없어요"],
    ["동남아 시장 이해도가", "높은 인재를 찾고 싶어요"],
    ["당장 업무 시간이 필요한데", "채용 프로세스가 너무 길어요"],
    ["면접은 봤는데", "합류까지 이어지지 않아요"],
    ["인건비 부담 없이", "빠르게 시작하고 싶어요"],
  ];

  return (
    <section
      className="relative w-full text-white flex flex-col items-center bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* --- HERO 콘텐츠 영역 --- */}
      <div className="layout-desktop pt-[196px]">
        <div className="mx-auto text-center">
          <h1
            className="reveal mt-3 text-h1 font-bold whitespace-nowrap"
            data-reveal
          >
            글로벌 인재 구독으로 <br />
            비용 절감과 채용 성공을 한 번에
          </h1>

          <p className="reveal mt-4 text-gray-200 text-h4" data-reveal>
            채용은 더 쉽게, 비용은 더 낮게
          </p>

          <button
            type="button"
            data-reveal
            className="reveal mt-10 rounded-lg bg-primary-500 px-8 py-4 text-body1 text-white hover:bg-primary-400"
          >
            1:1 맞춤 상담 받기
          </button>
        </div>
      </div>

      {/* 화살표 */}
      <div className="mt-[160px] flex justify-center">
        <img src={ArrowDown} className="animate-bounce" />
      </div>

      {/* --- Painpoint 영역 --- */}
      <div className="layout-desktop pt-[40px] pb-[200px]">
        <div className="mx-auto text-center">
          <h2
            className="reveal text-h2 font-bold whitespace-nowrap"
            data-reveal
          >
            좋은 인재, 왜 이렇게 안 보일까요?
          </h2>
        </div>

        {/* 롤링 카드 */}
        <div className="mt-12 overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...cards, ...cards].map(([title, desc], i) => (
              <div
                key={i}
                className="w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 p-8 min-h-[180px] flex flex-col items-center justify-center text-center mr-6"
              >
                <div className="h-10 w-10 rounded-full bg-white/10 mb-4" />
                <p className="text-body2 text-gray-100">{title}</p>
                <p className="mt-2 text-body2 font-bold">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
