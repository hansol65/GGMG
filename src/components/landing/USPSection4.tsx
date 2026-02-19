import IconUni1 from "../../assets/icon-uni-1.png";
import IconUni2 from "../../assets/icon-uni-2.png";
import IconUni3 from "../../assets/icon-uni-3.png";
import IconUni4 from "../../assets/icon-uni-4.png";
import USPTextCardSection from "../USPTextCardSection";
import USPVisualCard from "../USPVisualCard";

const SchoolsVisual = () => {
  return (
    <USPVisualCard className="bg-gray-100 py-10 px-10">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex aspect-square items-center justify-center rounded-full bg-white p-4 shadow-sm">
          <img
            src={IconUni1}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex aspect-square items-center justify-center rounded-full bg-white p-4 shadow-sm">
          <img
            src={IconUni2}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex aspect-square items-center justify-center rounded-full bg-white p-4 shadow-sm">
          <img
            src={IconUni3}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex aspect-square items-center justify-center rounded-full bg-white p-4 shadow-sm">
          <img
            src={IconUni4}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    </USPVisualCard>
  );
};

export default function USPSection4() {
  return (
    <USPTextCardSection
      sectionClassName="bg-white"
      badge="상위 5% 글로벌 인재"
      title={
        <>
          <span className="text-primary-500">검증된 이력</span>
          <br />
          연결되는 선별 시스템
        </>
      }
      description="3000+ 개발자 DB에서 ICPC 수상자, 베트남 명문대 출신 등 상위 5%만 선별해요"
      highlights={["3000+ 인재 DB", "우수 대학 파트너쉽", "유관 업무 경험"]}
      highlightedIndex={1}
    >
      <SchoolsVisual />
    </USPTextCardSection>
  );
}
