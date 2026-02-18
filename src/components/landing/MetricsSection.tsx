import Say1 from "../../assets/image-say-1.png";
import Say2 from "../../assets/image-say-2.png";
import Say3 from "../../assets/image-say-3.png";

export default function MetricsSection() {
  return (
    <section className="metrics-section relative bg-[linear-gradient(180deg,#FFFFFF_0%,#ECEFF2_100%)]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-12 md:py-24 min-[1025px]:flex min-[1025px]:min-h-[1024px] min-[1025px]:items-center min-[1025px]:px-[189px] min-[1025px]:py-0">
        <div className="mx-auto flex w-full flex-col min-[1025px]:w-fit min-[1025px]:flex-row min-[1025px]:items-start min-[1025px]:gap-[152px]">
          <div className="reveal w-full min-[1025px]:w-auto" data-reveal>
            <h2 className="text-center text-[22px] font-bold md:text-h2 whitespace-nowrap leading-tight text-gray-500 min-[1025px]:text-left">
              재계약으로 증명된
              <span className="min-[1025px]:block"> 인재 연결</span>
            </h2>
            <div className="mb-7 mt-7 h-px w-full bg-gray-200" />

            <ul className="grid grid-cols-3 gap-4 min-[1025px]:block min-[1025px]:space-y-3">
              <li className="text-center min-[1025px]:text-left">
                <p className="text-[32px] md:text-[56px] leading-[1.02] font-bold text-gray-500">
                  200+
                </p>
                <p className="mt-1 whitespace-nowrap text-body2 text-gray-300">
                  누적 채용 인원
                </p>
              </li>
              <li className="text-center min-[1025px]:text-left">
                <p className="text-[32px] md:text-[56px] leading-[1.02] font-bold text-gray-500">
                  90%
                </p>
                <p className="mt-1 text-body2 text-gray-300">기업 만족도</p>
              </li>
              <li className="text-center min-[1025px]:text-left">
                <p className="text-[32px] md:text-[56px] leading-[1.02] font-bold text-gray-500">
                  90%
                </p>
                <p className="mt-1 text-body2 text-gray-300">재계약 비율</p>
              </li>
            </ul>
          </div>

          <div className="mt-8 w-full space-y-3 min-[1025px]:mt-0 min-[1025px]:w-[652px]">
            <article
              className="reveal group relative h-[132px] overflow-hidden rounded-2xl border border-white/50 shadow-[0_8px_22px_rgba(15,20,35,0.08)]"
              data-reveal
            >
              <img
                src={Say1}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,22,31,0.72)_0%,rgba(17,22,31,0.58)_45%,rgba(17,22,31,0.64)_100%)]" />

              <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white md:px-10">
                <p className="text-body2 font-medium md:text-body1 leading-relaxed">
                  "공고를 올려도 지원자가 없었는데, 바로 투입 가능한 인재를
                  채용하면서 프로젝트 일정이 정상화됐습니다."
                </p>
                <p className="mt-3 font-normal text-caption text-white/50">
                  IoT SW 기업 J사 대표 박OO
                </p>
              </div>
            </article>

            <article
              className="reveal group relative h-[132px] overflow-hidden rounded-2xl border border-white/50 shadow-[0_8px_22px_rgba(15,20,35,0.08)]"
              data-reveal
              style={{ transitionDelay: "90ms" }}
            >
              <img
                src={Say2}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,22,31,0.72)_0%,rgba(17,22,31,0.58)_45%,rgba(17,22,31,0.64)_100%)]" />

              <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
                <p className="text-body2 font-medium md:text-body1 leading-relaxed">
                  "비용 때문에 채용을 망설였는데 절반 수준 인건비로 비슷한
                  역량의 인재를 확보하니 부담이 크게 줄었습니다."
                </p>
                <p className="font-normal mt-3 text-caption text-white/50">
                  커머스 기업 B사 고OO
                </p>
              </div>
            </article>

            <article
              className="reveal group relative h-[132px] overflow-hidden rounded-2xl border border-white/50 shadow-[0_8px_22px_rgba(15,20,35,0.08)]"
              data-reveal
              style={{ transitionDelay: "180ms" }}
            >
              <img
                src={Say3}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,22,31,0.72)_0%,rgba(17,22,31,0.58)_45%,rgba(17,22,31,0.64)_100%)]" />

              <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white md:px-10">
                <p className="text-body2 font-medium md:text-body1 leading-relaxed">
                  "국내 인재 시장에선 한계를 느끼고 있었는데 베트남 인재
                  채용으로 팀 구성이 훨씬 유연해졌습니다."
                </p>
                <p className="mt-3 text-caption font-normal text-white/50">
                  웹 콘텐츠 기업 T사 대표 임OO
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
