import IconCheck from "../../assets/icon-check.svg";

export default function PricingSection() {
  return (
    <section className="bg-gray-100 py-20 md:py-28">
      <div className="layout-desktop">
        <h2 className="text-center text-h2">요금제 안내</h2>
        <p className="mt-2 text-center text-body2 text-gray-300">
          우리 기업에 맞는 플랜으로 시작해 보세요
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* 베이직 */}
          <article className="rounded-2xl border border-gray-200 bg-white p-10 flex flex-col min-h-[660px] hover:bg-gray-50">
            <h3 className="text-h3">베이직 플랜</h3>

            <p className="mt-10 text-body1 text-gray-300">월 이용료</p>
            <p className="mt-2 text-h1 text-primary-500">99만원</p>

            <div className="mt-6 h-px w-full bg-gray-200" />

            <ul className="mt-10 space-y-3 text-caption text-gray-400 flex-1">
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                주니어 개발자 (경력 1-2년)
              </li>
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                호치민 오피스 출퇴근
              </li>
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                기본 관리 시스템
              </li>
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                월간 리포트 제공
              </li>
            </ul>

            <button
              type="button"
              className="mt-10 w-full rounded-xl bg-gray-500 px-4 py-4 text-body2 font-semibold text-white hover:bg-gray-300"
            >
              시작하기
            </button>
          </article>

          {/* 프로 */}
          <article className="rounded-2xl border border-gray-200 bg-white p-10 flex flex-col min-h-[660px] hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <h3 className="text-h3">프로 플랜</h3>
              <span className="rounded-md bg-primary-100 px-2 py-1 text-caption text-primary-500">
                인기
              </span>
            </div>

            <p className="mt-10 text-body1 text-gray-300">월 이용료</p>
            <p className="mt-2 text-h1 text-primary-500">130만원</p>

            <div className="mt-6 h-px w-full bg-gray-200" />

            <ul className="mt-10 space-y-3 text-caption text-gray-400 flex-1">
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                중급 개발자 (경력 3-5년)
              </li>
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                호치민 오피스 출퇴근
              </li>
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                전담 매니저 배정
              </li>
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                주간 리포트 제공
              </li>
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                AI 번역 툴 제공
              </li>
            </ul>

            <button
              type="button"
              className="mt-10 w-full rounded-xl bg-primary-500 px-4 py-4 text-body2 text-white hover:bg-primary-400"
            >
              시작하기
            </button>
          </article>

          {/* 프리미엄 */}
          <article className="rounded-2xl border border-gray-200 bg-white p-10 flex flex-col min-h-[660px] hover:bg-gray-50">
            <h3 className="text-h3">프리미엄 플랜</h3>

            <p className="mt-10 text-body1 text-gray-300">월 이용료</p>
            <p className="mt-2 text-h1 text-primary-500">180만원</p>

            <div className="mt-6 h-px w-full bg-gray-200" />

            <ul className="mt-10 space-y-3 text-caption text-gray-400 flex-1">
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                시니어 개발자 (경력 5년 이상)
              </li>
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                호치민 오피스 출퇴근
              </li>
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                전담 매니저 + 상시 관리
              </li>
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                실시간 리포트
              </li>
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                AI 번역 툴 제공
              </li>
              <li className="flex gap-4">
                <img src={IconCheck} className="w-6 h-6" />
                업무 관리 툴 제공
              </li>
            </ul>

            <button
              type="button"
              className="mt-10 w-full rounded-xl bg-gray-500 p-4 text-body2 text-white hover:bg-gray-300"
            >
              시작하기
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
