import heroBackground from "../../assets/image-background.png";
import ArrowDown from "../../assets/icon-arrow-down.svg";

export default function HeroSection() {
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

      {/* --- METRIX 영역 --- */}
      <div className="layout-desktop pt-[40px] pb-[200px]">
        <div className="mx-auto text-center">
          <h2
            className="reveal text-h2 font-bold whitespace-nowrap"
            data-reveal
          >
            좋은 인재, 왜 이렇게 안 보일까요?
          </h2>
        </div>
      </div>
    </section>
  );
}
