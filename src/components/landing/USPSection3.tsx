import IconStack from "../../assets/icon-stack.png";
import Say1 from "../../assets/image-say-1.png";
import USPTextCardSection from "../USPTextCardSection";
import USPVisualCard from "../USPVisualCard";

const DbVisual = () => {
  return (
    <USPVisualCard className="aspect-square h-auto bg-gray-100 p-[7.7%] md:h-[519px] md:p-10">
      <div className="animate-pulse inline-flex items-center gap-2 rounded-xl bg-white px-[4.6%] py-[3.6%] shadow-md">
        <img
          src={IconStack}
          alt=""
          className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] object-contain"
        />
        <span className="text-[18px] font-semibold md:text-h3 text-primary-500">
          3000+
        </span>
        <span className="text-[14px] font-semibold md:text-h4 text-gray-400">
          인재 DB
        </span>
      </div>

      <div className="mt-[10.9%] aspect-[439/317] w-full overflow-hidden">
        <img src={Say1} className="h-full w-full object-cover" />
      </div>
    </USPVisualCard>
  );
};

export default function USPSection3() {
  return (
    <USPTextCardSection
      sectionClassName="bg-white"
      textClassName="max-w-[507px]"
      badgeClassName="rounded-lg bg-white px-5 py-3"
      badge="상위 5% 글로벌 인재"
      title={
        <>
          검증된 인재만
          <br />
          <span className="text-primary-500">연결되는</span> 선별 시스템
        </>
      }
      description={
        <>
          ICPC 수상자, 베트남 명문대 출신 등
          <br />
          상위 5%만 선별해요
        </>
      }
      highlights={["3000+ 인재 DB", "우수 대학 파트너십", "유관 업무 경험"]}
      highlightedIndex={0}
    >
      <DbVisual />
    </USPTextCardSection>
  );
}
