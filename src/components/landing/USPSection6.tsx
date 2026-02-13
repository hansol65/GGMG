import People1 from "../../assets/image-people-1.jpg";
import People2 from "../../assets/image-peple-2.jpg";
import People3 from "../../assets/image-people-3.jpg";
import People4 from "../../assets/image-people-4.jpg";
import People5 from "../../assets/image-people-5.jpg";
import USPTextCardSection from "./USPTextCardSection";
import USPVisualCard from "./USPVisualCard";

const PEOPLE_IMAGES = [People1, People2, People3, People4, People5];

const OpsVisual = () => {
  return (
    <USPVisualCard className="h-[420px] bg-white p-0 md:h-[519px]">
      <div className="relative h-full w-full">
        {PEOPLE_IMAGES.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className="people-slide-item absolute inset-0 h-full w-full object-cover"
            style={{ animationDelay: `${index * 4}s` }}
          />
        ))}
      </div>
    </USPVisualCard>
  );
};

export default function USPSection6() {
  return (
    <USPTextCardSection
      sectionClassName="bg-white"
      badge="완벽한 근태 관리"
      title={
        <>
          채용 이후까지
          <br />
          <span className="text-primary-500">안정적으로 운영</span>되는 관리체계
        </>
      }
      description="현지 오피스 기반 출퇴근 관리와 상주 관리 체게를 통해 안정적인 운영을 지원해요"
    >
      <OpsVisual />
    </USPTextCardSection>
  );
}
