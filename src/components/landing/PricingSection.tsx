import IconCheck from "../../assets/icon-check.svg";

export default function PricingSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-20 min-[1025px]:py-28">
      <div className="layout-desktop">
        <h2 className="text-center text-h3 min-[1025px]:text-h2">
          요금제 안내
        </h2>
        <p className="mt-1 text-center text-sm text-gray-300 min-[1025px]:mt-2 min-[1025px]:text-body2">
          우리 기업에 맞는 플랜으로 시작해 보세요
        </p>

        <div className="mx-auto mt-8 grid max-w-[640px] gap-4 min-[1025px]:mt-12 min-[1025px]:max-w-none min-[1025px]:grid-cols-3 min-[1025px]:gap-6">
          {/* 베이직 */}
          <article className="flex min-h-[420px] flex-col rounded-2xl border border-gray-200 bg-white p-6 hover:bg-gray-50 min-[1025px]:min-h-[660px] min-[1025px]:p-10">
            <h3 className="text-center text-[20px] font-semibold md:text-h3">
              베이직 플랜
            </h3>

            <p className="mt-5 text-center text-gray-300 min-[1025px]:mt-10 text-body2 md:text-body1">
              월 이용료
            </p>
            <p className="text-center text-h4 md:text-h1 text-primary-500 min-[1025px]:mt-2">
              99만원
            </p>

            <div className="mt-6 h-px w-full bg-gray-200" />

            <ul className="mt-6 flex-1 text-body2 md:text-body1 text-gray-400 min-[1025px]:mt-10 space-y-4">
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                주니어 개발자 (경력 1-2년)
              </li>
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                호치민 오피스 출퇴근
              </li>
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                기본 관리 시스템
              </li>
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                월간 리포트 제공
              </li>
            </ul>

            <button
              type="button"
              className="w-full bg-gray-500 text-white hover:bg-gray-300 mt-10 rounded-xl py-4 text-body2"
            >
              시작하기
            </button>
          </article>

          {/* 프로 */}
          <article className="flex min-h-[420px] flex-col rounded-2xl border border-gray-200 bg-white p-6 hover:bg-gray-50 min-[1025px]:min-h-[660px] min-[1025px]:p-10">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-center text-[20px] font-semibold md:text-h3">
                프로 플랜
              </h3>
              <span className="rounded-md bg-primary-100 px-2 py-1 text-caption text-primary-500">
                인기
              </span>
            </div>

            <p className="mt-5 text-center text-gray-300 min-[1025px]:mt-10 text-body2 md:text-body1">
              월 이용료
            </p>
            <p className="text-center text-h4 md:text-h1 text-primary-500 min-[1025px]:mt-2">
              130만원
            </p>

            <div className="mt-6 h-px w-full bg-gray-200" />

            <ul className="mt-6 flex-1 text-body2 md:text-body1 text-gray-400 min-[1025px]:mt-10 space-y-4">
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                중급 개발자 (경력 3-5년)
              </li>
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                호치민 오피스 출퇴근
              </li>
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                전담 매니저 배정
              </li>
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                주간 리포트 제공
              </li>
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                AI 번역 툴 제공
              </li>
            </ul>

            <button
              type="button"
              className="w-full bg-primary-500 text-white hover:bg-primary-400 mt-10 rounded-xl py-4 text-body2"
            >
              시작하기
            </button>
          </article>

          {/* 프리미엄 */}
          <article className="flex min-h-[420px] flex-col rounded-2xl border border-gray-200 bg-white p-6 hover:bg-gray-50 min-[1025px]:min-h-[660px] min-[1025px]:p-10">
            <h3 className="text-center text-[20px] font-semibold md:text-h3">
              프리미엄 플랜
            </h3>

            <p className="mt-5 text-center text-gray-300 min-[1025px]:mt-10 text-body1">
              월 이용료
            </p>
            <p className="text-center text-h4 md:text-h1 text-primary-500 min-[1025px]:mt-2">
              180만원
            </p>

            <div className="mt-6 h-px w-full bg-gray-200" />

            <ul className="mt-6 flex-1 text-body2 md:text-body1 text-gray-400 min-[1025px]:mt-10 space-y-4">
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                시니어 개발자 (경력 5년 이상)
              </li>
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                호치민 오피스 출퇴근
              </li>
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                전담 매니저 + 상시 관리
              </li>
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                실시간 리포트
              </li>
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                AI 번역 툴 제공
              </li>
              <li className="flex items-center justify-center gap-4 min-[1025px]:justify-start">
                <img src={IconCheck} className="h-6 w-6" />
                업무 관리 툴 제공
              </li>
            </ul>

            <button
              type="button"
              className="w-full bg-gray-500 text-white hover:bg-gray-300 mt-10 rounded-xl py-4 text-body2"
            >
              시작하기
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
