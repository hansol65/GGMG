type GlobalTalentFeatureCardProps = {
  title: string;
  desc: string;
  badge: string;
  index: number;
};

export default function GlobalTalentFeatureCard({
  title,
  desc,
  badge,
  index,
}: GlobalTalentFeatureCardProps) {
  const isReverse = index % 2 === 1;

  return (
    <article
      data-reveal
      style={{ transitionDelay: `${index * 70}ms` }}
      className="reveal grid items-center gap-8 rounded-3xl border border-gray-100 bg-[#f8f9fc] p-6 md:grid-cols-2 md:p-10"
    >
      <div className={isReverse ? "md:order-2" : undefined}>
        <p className="text-sm font-semibold text-primary-500">{badge}</p>
        <h3 className="mt-3 text-2xl font-bold leading-snug md:text-3xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400 md:text-base">{desc}</p>
      </div>

      <div
        className={`rounded-2xl p-4 ${
          isReverse
            ? "bg-gradient-to-br from-[#e8edfb] to-[#d7e0ff] md:order-1"
            : "bg-gradient-to-br from-[#0f162b] to-[#3f61d7]"
        }`}
      >
        <div
          className={`h-52 rounded-xl ${
            isReverse ? "bg-white/75" : "bg-[#0c1222]/65"
          }`}
        />
      </div>
    </article>
  );
}
