export default function USPSection1() {
  return (
    <section className="bg-black ">
      <div className="layout-desktop text-center text-white mx-auto w-full px-6 py-[380px]">
        <h2 className="reveal font-bold text-[36px] md:text-[80px]" data-reveal>
          공고 마감의
        </h2>
        <p
          className="reveal mt-4 md:mt-10 text-[36px] md:text-[80px] font-bold"
          data-reveal
          style={{ transitionDelay: "80ms" }}
        >
          <span className="text-primary-500">후킹 메시지</span> 한 줄
        </p>
      </div>
    </section>
  );
}
