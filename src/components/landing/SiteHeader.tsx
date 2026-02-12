export default function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-white/5 backdrop-blur-[25px]">
      <div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 md:h-16 md:px-10 min-[1025px]:px-20">
        <div className="flex items-center">
          <span className="h-3 w-12 rounded bg-white md:h-4 md:w-16"></span>
        </div>

        <a
          href="#contact-cta"
          className="rounded-md bg-primary-500 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-primary-400 sm:px-4 sm:text-xs md:rounded-lg md:px-5 md:py-2 md:text-[13px]"
        >
          문의하기
        </a>
      </div>
    </header>
  );
}
