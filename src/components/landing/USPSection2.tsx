import IconProfile from "../../assets/icon-profile.png";
import USPTextCardSection from "../USPTextCardSection";
import USPVisualCard from "../USPVisualCard";

const CostVisual = () => {
  return (
    <USPVisualCard className="aspect-square h-auto bg-gray-100 pt-[16.4%] md:h-[519px] md:pt-[85px]">
      <div className="mx-auto h-full w-[69.4%] rounded-t-xl bg-gray-400 px-5 pt-3 text-white shadow-lg">
        <div className="flex items-center gap-2">
          <span className="h-[6px] w-[6px] md:h-[10px] md:w-[10px] rounded-full bg-[#ff5f57]" />
          <span className="h-[6px] w-[6px] md:h-[10px] md:w-[10px] rounded-full bg-[#fdbb2e]" />
          <span className="h-[6px] w-[6px] md:h-[10px] md:w-[10px] rounded-full bg-[#29c841]" />
        </div>
        <div className="mt-5 flex items-center gap-3">
          <img
            src={IconProfile}
            alt=""
            className="h-10 w-10 md:h-15 md:w-15 rounded-full object-cover"
          />
          <div>
            <p className="text-[14px] md:text-body1">풀스택 개발자</p>
            <p className="text-[12px] md:text-body2 text-gray-200">5년차</p>
          </div>
        </div>
      </div>

      <div className="animate-pulse absolute left-1/2 top-[58%] w-[82%] -translate-x-1/2 rounded-xl bg-white px-5 py-4 text-center shadow-xl">
        <div className="relative w-fit text-left">
          <p className="text-start text-caption md:text-body1 text-gray-300">
            한국 주니어 개발자 6,500만원
          </p>
          <span className="pointer-events-none absolute left-0 top-[58%] h-[2px] w-full -rotate-[8deg] bg-[#ff5f57]" />
        </div>
        <p className="mt-3 text-body2 md:mt-5 md:text-h4 text-gray-400">
          베트남 중급 개발자
        </p>
        <p className="text-[22px] md:text-h2 leading-tight font-bold text-[#ff5f57]">
          → 약 53% 비용 절감
        </p>
      </div>
    </USPVisualCard>
  );
};

export default function USPSection2() {
  return (
    <USPTextCardSection
      sectionClassName="bg-white"
      textClassName="max-w-[507px]"
      badgeClassName="rounded-lg bg-white px-5 py-3"
      badge="인건비 50% 절감"
      title={
        <>
          같은 실력으로
          <br />
          <span className="text-primary-500">비용 부담을 낮추는</span> 채용 방식
        </>
      }
      description="동일한 역량의 인재를 더 효율적인 구조로 확보하세요"
    >
      <CostVisual />
    </USPTextCardSection>
  );
}
