const reviews = [
  {
    title: "글로벌 인재를 단기간에 확보해 신규 팀을 만들었습니다.",
    author: "B2B SaaS 대표",
  },
  {
    title: "채용 비용과 시간을 동시에 줄여 목표 인원을 빠르게 채웠습니다.",
    author: "커머스 HR 리드",
  },
  {
    title: "검증된 후보 중심으로 면접해서 조직 적합도가 좋아졌습니다.",
    author: "스타트업 COO",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="layout-desktop">
        <h2 className="reveal text-3xl font-bold md:text-5xl" data-reveal>
          최고의 인재를 만난
          <br />
          다른 기업들의 이야기
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={review.title}
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
              className="reveal overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div
                className={`h-48 ${
                  index === 0
                    ? "bg-gradient-to-br from-[#b7bcc6] to-[#8e97aa]"
                    : index === 1
                      ? "bg-gradient-to-br from-[#baa38c] to-[#8f765f]"
                      : "bg-gradient-to-br from-[#9fb2a8] to-[#6d8579]"
                }`}
              />
              <div className="p-5">
                <p className="text-sm leading-relaxed text-gray-500">{review.title}</p>
                <p className="mt-3 text-xs font-semibold text-gray-300">{review.author}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
