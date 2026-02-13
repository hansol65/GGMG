import IconAndroid from "../../assets/icon-android.svg";
import IconFigma from "../../assets/icon-figma.svg";
import IconHtml from "../../assets/icon-html.svg";
import IconJava from "../../assets/icon-java.svg";
import IconJs from "../../assets/icon-js.svg";
import IconKotlin from "../../assets/icon-kotlin.svg";
import IconPerson from "../../assets/icon-person.png";
import IconPython from "../../assets/icon-python.svg";
import IconReact from "../../assets/icon-react.svg";
import IconTs from "../../assets/icon-ts.svg";
import USPTextCardSection from "./USPTextCardSection";
import USPVisualCard from "./USPVisualCard";

const TECH_ICONS = [
  IconTs,
  IconJs,
  IconReact,
  IconPython,
  IconJava,
  IconKotlin,
  IconHtml,
  IconAndroid,
  IconFigma,
];

const TrackVisual = () => {
  return (
    <USPVisualCard className="h-[420px] bg-gray-100 py-[52px] md:h-[519px] md:py-16">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className="animate-marquee-fast flex w-max items-center gap-6 md:gap-[34px]">
          {[...TECH_ICONS, ...TECH_ICONS].map((icon, index) => (
            <div
              key={`${icon}-${index}`}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1f2229] p-2.5 md:h-16 md:w-16 md:p-3"
            >
              <img src={icon} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      <article className="relative mx-auto w-[304px] max-w-[calc(100%-1rem)] origin-top scale-[0.81] rounded-[22px] border border-gray-200 bg-white px-6 py-7 shadow-[0_12px_28px_rgba(0,0,0,0.12)] md:max-w-none md:scale-100">
        <div className="flex items-center gap-4">
          <img
            src={IconPerson}
            alt=""
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <p className="text-body1 text-primary-500">
              풀스택 개발자
            </p>
            <p className="mt-1 text-body2 text-gray-400">
              3년차
            </p>
          </div>
        </div>

        {/* 학력 */}
        <div className="mt-8 space-y-5">
          <div>
            <div className="flex items-start gap-4">
              <span className="inline-flex rounded-lg border border-gray-200 px-2 py-1 text-caption text-gray-300 whitespace-nowrap">
                학력
              </span>
              <div>
                <p className="text-caption text-gray-400">
                  HUTECH 졸업
                </p>
                <p className="mt-1 text-caption text-gray-300">
                  (베트남 상위 5% 공대 컴공과)
                </p>
              </div>
            </div>
          </div>

          {/* 경력  */}
          <div>
            <div className="flex items-start gap-4">
              <span className="inline-flex rounded-lg border border-gray-200 px-2 py-1 text-caption text-gray-300 whitespace-nowrap">
                경력
              </span>
              <div>
                <p className="text-caption text-gray-400">
                  B2C 웹서비스 개발 기업
                </p>
                <p className="text-caption text-gray-400">
                  풀스택 개발자
                </p>
                <p className="mt-1 text-caption text-gray-300">
                  (2022 ~ 2025)
                </p>
              </div>
            </div>
          </div>

          {/* 하드스킬 */}
          <div>
            <span className="inline-flex rounded-lg border border-gray-200 px-2 py-1 text-caption text-gray-300">
              하드 스킬
            </span>
            <div className="mt-3 flex max-w-[244px] flex-wrap gap-x-3 gap-y-1 text-caption leading-tight text-gray-300">
              <p className="whitespace-nowrap">JavaScript</p>
              <p className="whitespace-nowrap">React</p>
              <p className="whitespace-nowrap">Tailwind CSS</p>
              <p className="whitespace-nowrap">Node.js</p>
              <p className="whitespace-nowrap">Firebase</p>
              <p className="whitespace-nowrap">Vercel</p>
              <p className="whitespace-nowrap">Next.js</p>
            </div>
          </div>
        </div>
      </article>
    </USPVisualCard>
  );
};

export default function USPSection5() {
  return (
    <USPTextCardSection
      sectionClassName="bg-white"
      badge="상위 5% 글로벌 인재"
      title={
        <>
          <span className="text-primary-500">검증된 인재</span>
          <br />
          연결되는 선별 시스템
        </>
      }
      description="3000+ 개발자 DB에서 ICPC 수상자, 베트남 명문대 출신 등 상위 5%만 선별해요"
      highlights={["3000+ 인재 DB", "우수 대학 파트너쉽", "유관 업무 경험"]}
      highlightedIndex={2}
    >
      <TrackVisual />
    </USPTextCardSection>
  );
}
