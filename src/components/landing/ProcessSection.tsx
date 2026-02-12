import IconMail from "../../assets/icon_mail.png";
import IconUser from "../../assets/icon_user.png";
import IconLetterCheck from "../../assets/icon-letter-check.png";
import IconSetting from "../../assets/icon-setting.png";
import IconRightArrow from "../../assets/icon-arrow-right.png";
import IconDownArrow from "../../assets/icon-color-arrow-down.svg";

type ProcessCardProps = {
  icon?: string;
  label: string;
};

const ProcessCard = ({ icon, label }: ProcessCardProps) => {
  return (
    <div
      className="
        w-full
        aspect-[201/248]
        rounded-xl
        bg-[rgba(255,255,255,0.20)]
        flex flex-col items-center justify-center
      "
    >
      <div className="h-[100px] w-[100px] flex items-center justify-center">
        {icon ? (
          <img src={icon} className="max-h-full max-w-full object-contain" />
        ) : null}
      </div>

      <p className="mt-[20px] text-caption text-gray-100 text-center whitespace-nowrap">
        {label}
      </p>
    </div>
  );
};

type OfficeCardProps = {
  title: string;
  subtitle: string;
};

const OfficeCard = ({ title, subtitle }: OfficeCardProps) => {
  return (
    <div
      className="
        aspect-[201/248]
        rounded-2xl
        flex flex-col items-center justify-center
        border-2 border-primary-400
        bg-[linear-gradient(144deg,#BBC9F7,#F4F7FF)]
         shadow-[
          -2px_-2px_4px_rgba(255,255,255,0.25),
          4px_4px_6px_rgba(0,0,0,0.25),
          0_0_50px_1px_rgba(217,225,251,0.20)
        ]
      "
    >
      <p className="text-body2 text-gray-400">{subtitle}</p>
      <p className="mt-2 text-h3 font-bold text-primary-500">{title}</p>
    </div>
  );
};

type TabletProcessRowProps = {
  icon: string;
  label: string;
};

const TabletProcessRow = ({ icon, label }: TabletProcessRowProps) => {
  return (
    <div className="flex h-[90px] gap-5 w-full items-center bg-white/20 rounded-xl px-5">
      <img src={icon} className="h-15 w-15 object-contain" />
      <p className="text-gray-100 text-body2">{label}</p>
    </div>
  );
};

export default function ProcessSection() {
  return (
    <section className="w-full text-white bg-[linear-gradient(180deg,#1D1F23_31.32%,#4269E9_207.83%)]">
      <div className="layout-desktop px-4 py-20 md:px-8 md:py-24 min-[1025px]:px-[114px] min-[1025px]:py-[140px]">
        {/* 타이틀 */}
        <h1 className="text-center text-[clamp(30px,5vw,48px)] font-bold leading-[1.4]">
          복잡한 현지 채용 과정도
          <span
            className="
              bg-[linear-gradient(96deg,#FFF_-36.44%,#4269E9_83.79%)]
              bg-clip-text
              text-transparent
            "
          >
            {" "}
            2주 만에
          </span>
        </h1>

        <div className="mt-14 w-full min-[1025px]:hidden">
          <div className="mx-auto w-full max-w-[686px]">
            <div className="flex items-start gap-6">
              <div className="w-8 shrink-0 space-y-3">
                <div className="mb-2.5 flex h-[141px] items-center justify-center rounded-md bg-[#8B99C2] text-white text-body2">
                  3일
                </div>

                <div className="mb-2.5 flex h-[191px] flex-col items-center justify-center rounded-md bg-[#6C88D8] leading-tight text-white text-body2">
                  <span>5일</span>
                  <span>~</span>
                  <span>7일</span>
                </div>

                <div className="flex flex-col items-center justify-center rounded-md bg-primary-500 leading-tight text-white h-[212px] text-body2">
                  <span>1일</span>
                  <span>~</span>
                  <span>2일</span>
                </div>
              </div>

              <div className="w-full max-w-[622px] space-y-2.5 md:space-y-3">
                <TabletProcessRow
                  icon={IconMail}
                  label="리모트 채용 상담 신청"
                />
                <TabletProcessRow
                  icon={IconUser}
                  label="적합한 인재 POOL 추천"
                />
                <TabletProcessRow
                  icon={IconLetterCheck}
                  label="서류 검토 및 인터뷰 진행"
                />
                <TabletProcessRow icon={IconSetting} label="채용 온보딩 진행" />

                <div className="flex justify-center my-4">
                  <img
                    src={IconDownArrow}
                    alt=""
                    className="w-25 animate-bounce"
                  />
                </div>

                <div className="flex items-center justify-center rounded-xl border border-primary-300 bg-[#CAD7FE] text-gray-300 shadow-[0_0_18px_rgba(78,117,255,0.35)] h-[90px] text-h4">
                  멋사 VN 오피스
                  <span className="ml-1 text-h2 text-primary-500">출근</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[160px] hidden w-full min-[1025px]:block">
          <div
            className="
              mx-auto
              grid
              items-center
              gap-[clamp(12px,1.6vw,24px)]
              max-w-[1200px]
            "
            style={{
              gridTemplateColumns:
                "repeat(8, minmax(0, 1fr)) minmax(0, 0.7fr) repeat(2, minmax(0, 1fr))",
            }}
          >
            <div className="col-span-2">
              <ProcessCard icon={IconMail} label="리모트 채용 상담 신청" />
            </div>

            <div className="col-span-2">
              <ProcessCard icon={IconUser} label="적합한 인재 POOL 추천" />
            </div>

            <div className="col-span-2">
              <ProcessCard
                icon={IconLetterCheck}
                label="서류 검토 및 인터뷰 진행"
              />
            </div>

            <div className="col-span-2">
              <ProcessCard icon={IconSetting} label="채용 온보딩 진행" />
            </div>

            {/* 화살표 */}
            <div className="col-span-1 flex items-center justify-center">
              <img
                src={IconRightArrow}
                className="w-12.5 animate-bounce-right"
              />
            </div>

            <div className="col-span-2">
              <OfficeCard subtitle="멋사 VN 오피스" title="출근" />
            </div>

            <div className="col-start-1 col-span-3 mt-8">
              <div className="h-10 rounded-xl bg-white/20 flex items-center justify-center text-body2">
                3일
              </div>
            </div>

            <div className="col-start-4 col-span-4 mt-8">
              <div className="h-10 rounded-xl bg-primary-400/80 flex items-center justify-center text-body2">
                5 - 7일
              </div>
            </div>

            <div className="col-start-8 col-span-4 mt-8">
              <div className="h-10 rounded-xl bg-primary-500 flex items-center justify-center text-body2">
                1 - 2일
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
