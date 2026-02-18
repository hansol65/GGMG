export default function SiteFooter() {
  return (
    <footer className="bg-white py-8">
      <div className="layout-desktop ">
        <div className="text-center text-h1">약관내용</div>
        <div className="h-px w-full bg-gray-200 my-5" />
        <div className="md:text-caption text-[12px] text-gray-200 flex flex-col md:justify-between ">
          <span>서비스 문의 : 010-5121-6422 • hohyun.kim@likelion.net</span>
          <span>ⓒ 2026 멋쟁이사자처럼. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
