export default function ContactCtaSection() {
  return (
    <section className="w-full h-[600px] text-white bg-[linear-gradient(180deg,#1D1F23_31.32%,#4269E9_207.83%)]">
      <div className="layout-desktop text-center">
        <h2 className="reveal text-h1 pt-[181px]" data-reveal>
          공고 마감 지금 바로 시작하세요
        </h2>
        <p className="reveal mt-4 text-gray-200 text-h4" data-reveal>
          검증된 상위 5% 글로벌 인재와 함께 합리적인 비용으로 프로젝트를
          성공시키세요
        </p>

        <div
          className="reveal mt-15 flex flex-wrap items-center justify-center gap-4"
          data-reveal
        >
          <button
            type="button"
            className="rounded-md bg-primary-500 px-8 py-4 text-body1 text-white"
          >
            1:1 맞춤 상담 받기
          </button>
          <button
            type="button"
            className="rounded-md bg-white px-8 py-4 text-body1 text-gray-500"
          >
            서비스 소개서 받아보기
          </button>
        </div>
      </div>
    </section>
  );
}
