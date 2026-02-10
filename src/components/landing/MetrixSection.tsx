import MetrixBackgroundImage from "../../assets/image-background-2.png";

export default function MetrixSection() {
  return (
    <section className="min-h-screen relative overflow-hidden text-white  flex flex-col items-center">
      {/* // 배경 영역 */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-auto"
          style={{
            backgroundImage: `url(${MetrixBackgroundImage})`,
            backgroundSize: "100% auto",
          }}
        ></div>
      </div>

      <div className="layout-desktop relative z-10 pt-[120px]">
        <div className="mx-auto text-center">
          <h1
            className="reveal text-h2 font-bold  whitespace-nowrap"
            data-reveal
          >
            재계약으로 증명된 인재 연결
          </h1>

          <p className="reveal mt-2 text-gray-300 text-body1" data-reveal>
            비용 절감 이상의 효과, 한 번의 연결로 끝나지 않았습니다
          </p>
        </div>
      </div>
    </section>
  );
}
