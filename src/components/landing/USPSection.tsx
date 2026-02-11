import IconMail from "../../assets/icon_mail.png";
import IconProfile from "../../assets/icon-profile.png";
import IconSetting from "../../assets/icon-setting.png";
import IconStack from "../../assets/icon-stack.png";
import IconUni1 from "../../assets/icon-uni-1.png";
import IconUni2 from "../../assets/icon-uni-2.png";
import IconUni3 from "../../assets/icon-uni-3.png";
import IconUni4 from "../../assets/icon-uni-4.png";
import IconUnion from "../../assets/icon-union.png";
import IconUser from "../../assets/icon_user.png";

type UspVisualType = "cost" | "db" | "schools" | "track" | "ops";

type UspItem = {
  badge: string;
  titleTop: string;
  titleAccent: string;
  titleBottom: string;
  description: string;
  highlights: string[];
  visualType: UspVisualType;
};

const USP_ITEMS: UspItem[] = [
  {
    badge: "인건비 50% 절감",
    titleTop: "같은 실력으로",
    titleAccent: "비용 부담을 낮추는",
    titleBottom: "채용 방식",
    description: "동일한 인건비 안에서도 더 효율적인 채용 구조를 만들어갑니다.",
    highlights: ["약 53% 비용 절감", "채용 속도 단축", "면접 리소스 절약"],
    visualType: "cost",
  },
  {
    badge: "검증 후보군 연결",
    titleTop: "검증된 인재만",
    titleAccent: "연결되는",
    titleBottom: "선별 시스템",
    description:
      "3000+ 데이터베이스를 바탕으로 직무 적합도 높은 후보를 추천합니다.",
    highlights: ["3000+ 인재 DB", "우수 대학 파트너십", "유관 업무 경험"],
    visualType: "db",
  },
  {
    badge: "상위 5% 글로벌 인재",
    titleTop: "실무 중심으로",
    titleAccent: "검증된 이력",
    titleBottom: "대학 네트워크",
    description:
      "파트너 대학과 협력해 실제 프로젝트 경험 중심으로 후보를 선별합니다.",
    highlights: [
      "현지 대학 파트너십",
      "전공 적합도 매칭",
      "프로젝트 경험 검증",
    ],
    visualType: "schools",
  },
  {
    badge: "핵심 경력 추출",
    titleTop: "한눈에 보는",
    titleAccent: "핵심 프로필",
    titleBottom: "매칭 카드",
    description:
      "기술 스택과 프로젝트 이력을 카드 형태로 압축해 빠르게 판단할 수 있습니다.",
    highlights: ["기술 스택 정리", "경력 기간 시각화", "즉시 인터뷰 연결"],
    visualType: "track",
  },
  {
    badge: "채용 후 운영 케어",
    titleTop: "채용 이후까지",
    titleAccent: "안정적으로 운영되는",
    titleBottom: "관리 체계",
    description: "계약, 온보딩, 리포트까지 운영 매니저가 함께 관리합니다.",
    highlights: [
      "정기 운영 리포트",
      "문제 상황 즉시 대응",
      "커뮤니케이션 지원",
    ],
    visualType: "ops",
  },
];

const TRACK_ICONS = [IconMail, IconUser, IconSetting, IconStack, IconUnion];

const UspVisual = ({ visualType }: { visualType: UspVisualType }) => {
  if (visualType === "cost") {
    return (
      <div className="relative mx-auto max-w-[460px] rounded-2xl bg-[#d8dde4] p-4 md:p-5">
        <div className="mx-auto w-full max-w-[270px] rounded-xl bg-[#484f5a] px-4 pb-5 pt-3 text-white shadow-lg md:max-w-[290px]">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          </div>

          <div className="mt-5 flex items-center gap-3">
            <img
              src={IconProfile}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">포지션 지원자</p>
              <p className="text-xs text-white/70">5년차</p>
            </div>
          </div>

          <div className="mt-5 rounded-lg bg-white/10 px-3 py-2 text-xs text-white/70 line-through">
            월 급여 예상치: 1,500만원
          </div>
        </div>

        <div className="animate-pulse absolute -bottom-4 left-1/2 w-[86%] -translate-x-1/2 rounded-xl bg-white p-4 text-center shadow-xl md:w-[82%]">
          <p className="text-xs text-gray-300">베트남 채용 개선안</p>
          <p className="mt-2 text-2xl font-bold text-[#ff4a4a]">
            약 53% 비용 절감
          </p>
        </div>
      </div>
    );
  }

  if (visualType === "db") {
    return (
      <div className="mx-auto max-w-[460px] rounded-2xl bg-[#d8dde4] p-4 md:p-5">
        <div className="animate-pulse inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 shadow-md">
          <img src={IconStack} alt="" className="h-6 w-6 object-contain" />
          <span className="text-body2 text-primary-500">3000+ 인재 DB</span>
        </div>

        <div className="mt-4 rounded-xl border border-white/60 bg-white/55 px-6 py-14 text-center">
          <p className="text-body2 text-gray-300">
            직무/경력/언어 기반 자동 선별
          </p>
        </div>
      </div>
    );
  }

  if (visualType === "schools") {
    const universityLogos = [IconUni1, IconUni2, IconUni3, IconUni4];

    return (
      <div className="mx-auto max-w-[460px] rounded-2xl bg-[#d8dde4] p-4 md:p-5">
        <div className="grid grid-cols-2 gap-4">
          {universityLogos.map((logo) => (
            <div
              key={logo}
              className="flex aspect-square items-center justify-center rounded-full bg-white p-4 shadow-sm"
            >
              <img
                src={logo}
                alt=""
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visualType === "track") {
    return (
      <div className="relative mx-auto max-w-[460px] overflow-hidden rounded-2xl bg-[#d8dde4] p-4 md:p-5">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden">
          <div className="flex w-max animate-marquee gap-3 pr-3">
            {[...TRACK_ICONS, ...TRACK_ICONS].map((icon, index) => (
              <div
                key={`${icon}-${index}`}
                className="rounded-md bg-[#1f2229] p-2"
              >
                <img src={icon} alt="" className="h-7 w-7 object-contain" />
              </div>
            ))}
          </div>
        </div>

        <article className="relative mx-auto w-full max-w-[220px] rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
          <div className="flex items-center gap-2">
            <img
              src={IconProfile}
              alt=""
              className="h-8 w-8 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-semibold text-primary-500">
                추천 인재 카드
              </p>
              <p className="text-[11px] text-gray-300">3건 요약</p>
            </div>
          </div>
          <div className="mt-4 h-px bg-gray-200" />
          <div className="mt-4 space-y-2 text-xs text-gray-400">
            <p>React · TypeScript</p>
            <p>HUTECH 프로젝트 3건</p>
            <p>근무 가능: 즉시</p>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-[460px] overflow-hidden rounded-2xl bg-[#dde2e9] p-6">
      <div className="h-[280px] rounded-xl bg-[linear-gradient(135deg,#f9fafb_0%,#cfd6df_100%)] p-6">
        <p className="text-caption text-gray-300">운영팀 협업 보드</p>
        <div className="mt-6 space-y-3">
          <div className="h-4 w-full rounded-full bg-white/80" />
          <div className="h-4 w-4/5 rounded-full bg-white/80" />
          <div className="h-4 w-2/3 rounded-full bg-white/80" />
        </div>
      </div>

      <div className="animate-pulse absolute bottom-8 left-1/2 -translate-x-1/2 rounded-lg bg-[#1d1f23] px-4 py-2 text-xs text-white">
        운영 매니저 상시 케어
      </div>
    </div>
  );
};

export default function USPSection() {
  return (
    <section className="bg-gray-100">
      <div className="bg-[#030405] py-[140px] md:py-[200px]">
        <div className="layout-desktop text-center text-white">
          <h2 className="reveal text-h2 md:text-h1" data-reveal>
            공고 마감의
          </h2>
          <p
            className="reveal mt-6 text-h2 font-semibold md:text-h1"
            data-reveal
            style={{ transitionDelay: "80ms" }}
          >
            <span className="text-primary-500">후킹 메시지</span> 한 줄
          </p>
        </div>
      </div>

      <div className="layout-desktop py-20 md:py-28">
        <div className="space-y-22 md:space-y-30">
          {USP_ITEMS.map((item, index) => (
            <article
              key={item.badge}
              className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-center"
            >
              <div
                className="reveal max-w-[500px]"
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span className="inline-flex rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-300">
                  {item.badge}
                </span>

                <h3 className="mt-5 text-h3 md:text-h2">
                  {item.titleTop}
                  <br />
                  <span className="text-primary-500">
                    {item.titleAccent}
                  </span>{" "}
                  {item.titleBottom}
                </h3>

                <p className="mt-4 text-caption text-gray-300 md:text-body2">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-2 md:mt-12">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlight}
                      className={
                        highlightIndex === 0
                          ? "text-body1 font-semibold text-gray-400"
                          : "text-body1 font-semibold text-gray-200"
                      }
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="reveal"
                data-reveal
                style={{ transitionDelay: `${index * 70 + 90}ms` }}
              >
                <UspVisual visualType={item.visualType} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
