export default function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-white/5 backdrop-blur-[25px]">
      <div className="mx-auto flex h-[64px] max-w-[1440px] items-center justify-between px-20">
        <div className="flex items-center">
          <span className="rounded bg-white px-3 py-1 text-xs font-bold"></span>
        </div>

        <a
          href="#contact-cta"
          className="rounded-lg bg-primary-500 px-5 py-2 text-[13px] font-semibold text-white transition hover:bg-primary-400"
        >
          문의하기
        </a>
      </div>
    </header>
  );
}
