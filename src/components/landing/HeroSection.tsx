import heroBackground from "../../assets/image-background.png";
import ArrowDown from "../../assets/icon-arrow-down.svg";
import IconFace1 from "../../assets/icon-face-1.png";
import IconFace2 from "../../assets/icon-face-2.png";
import IconFace3 from "../../assets/icon-face-3.png";
import IconFace4 from "../../assets/icon-face-4.png";
import IconFace5 from "../../assets/icon-face-5.png";
import IconFace6 from "../../assets/icon-face-6.png";

export default function HeroSection() {
  const cards = [
    {
      icon: IconFace1,
      line1: "채용 공고는 계속 올리는데",
      line2: "지원자가 없어요",
    },
    {
      icon: IconFace4,
      line1: "동남아 시장 이해도가",
      line2: "높은 인재를 찾고 싶어요",
    },
    {
      icon: IconFace2,
      line1: "당장 일할 사람이 필요한데",
      line2: "채용 프로세스가 너무 길어요",
    },
    {
      icon: IconFace6,
      line1: "채용 시간이나 리스크를",
      line2: "줄이고 싶어요",
    },
    {
      icon: IconFace5,
      line1: "해외 인재를 쓰고 싶지만",
      line2: "외주처럼 운영하고 싶진 않아요",
    },
    {
      icon: IconFace3,
      line1: "좋은 인재를 뽑고 싶은데",
      line2: "연봉이 감당이 안돼요",
    },
  ];

  return (
    <section
      className="hero-section relative w-full overflow-x-hidden bg-cover bg-top bg-no-repeat text-white"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* --- HERO 콘텐츠 영역 --- */}
      <div className="layout-desktop pt-[196px]">
        <div className="mx-auto text-center">
          <h1
            className="reveal mt-3 text-h1 font-bold whitespace-normal break-keep min-[1025px]:whitespace-nowrap"
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
      <div className="my-[200px] flex justify-center">
        <img src={ArrowDown} className="animate-bounce" />
      </div>

      {/* --- Painpoint 영역 --- */}
      <div className="layout-desktop pt-[40px] ">
        <div className="mx-auto text-center">
          <h2
            className="reveal text-h2 font-bold whitespace-normal break-keep min-[1025px]:whitespace-nowrap"
            data-reveal
          >
            좋은 인재, 왜 이렇게 안 보일까요?
          </h2>
        </div>

        {/* 롤링 카드 */}
        <div className="mt-12 overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...cards, ...cards].map((card, i) => (
              <div
                key={i}
                className="mr-6 flex min-h-[192px] w-[325px] shrink-0 flex-col items-center justify-center gap-4 rounded-t-2xl bg-[linear-gradient(180deg,#282B30_0%,rgba(24,25,29,0)_100%)] p-7 text-center backdrop-blur-[2px]"
              >
                <img src={card.icon} className="h-16 w-16 object-contain" />
                <p className="text-body1 text-gray-200">
                  {card.line1}
                  <br />
                  {card.line2}
                </p>
              </div>
            ))}
          </div>
          <h4
            className="reveal mx-auto py-20 text-center text-h4 text-white whitespace-normal break-keep min-[1025px]:whitespace-nowrap"
            data-reveal
          >
            리스크를 줄이고, 성과는 높이는
            <br />
            합리적인 채용 방식이 준비되어 있습니다
          </h4>
        </div>
      </div>
    </section>
  );
}
