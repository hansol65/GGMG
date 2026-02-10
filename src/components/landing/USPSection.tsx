import GlobalTalentFeatureCard from "../GlobalTalentFeatureCard";

const features = [
  {
    badge: "인건비 50% 절감",
    title: "같은 실력으로 비용 부담을 낮추는 채용 방식",
    desc: "높은 인재비용 대신 투명한 구조로 운영해서, 동일한 역량의 인재를 더 효율적으로 채용할 수 있습니다.",
  },
  {
    badge: "상위 5% 글로벌 인재",
    title: "검증된 인재만 연결되는 선별 시스템",
    desc: "30,000+ 후보 DB를 기반으로 서류와 인터뷰를 거친 인재만 전달하여 면접 효율을 올립니다.",
  },
  {
    badge: "완벽한 근태 관리",
    title: "채용 이후까지 안정적으로 운영되는 관리 체계",
    desc: "입사 후 온보딩과 운영 리포트를 통해 정착과 성과를 함께 관리합니다.",
  },
];

export default function USPSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="layout-desktop">
        <h2
          className="reveal text-center text-3xl font-bold md:text-5xl"
          data-reveal
        >
          왜 멋쟁이사자처럼의 글로벌 인재인가요?
        </h2>

        <div className="mt-14 space-y-8 md:space-y-10">
          {features.map((feature, index) => (
            <GlobalTalentFeatureCard
              key={feature.title}
              title={feature.title}
              desc={feature.desc}
              badge={feature.badge}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
