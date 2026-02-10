import { useState, type FormEvent } from "react";
import { useContactForm } from "../hooks/useContactForm";

export default function ContactFormPanel() {
  const { form, setForm, handleSubmit, submittedJson } = useContactForm();
  const [step, setStep] = useState(1);

  const handleNextStep = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(2);
  };

  return (
    <section className="grid-12 gap-6">
      <div className="col-span-12 rounded-2xl border border-gray-200 bg-white p-6 md:col-span-8">
        {step === 1 ? (
          <form className="space-y-5" onSubmit={handleNextStep}>
            <div className="space-y-2">
              <label className="text-body2 text-gray-400">회사명</label>
              <input
                value={form.company}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, company: event.target.value }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-body2 text-gray-500 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-body2 text-gray-400">담당자 이름</label>
              <input
                value={form.managerName}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    managerName: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-body2 text-gray-500 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-body2 text-gray-400">이메일</label>
              <input
                type="email"
                value={form.email}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, email: event.target.value }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-body2 text-gray-500 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-body2 text-gray-400">휴대전화번호</label>
              <input
                value={form.phone}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, phone: event.target.value }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-body2 text-gray-500 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                placeholder="010-0000-0000"
                required
              />
            </div>

            <div className="space-y-2">
              <p className="text-body2 text-gray-400">연락 선호 방식</p>
              {["무관", "전화", "이메일"].map((method) => (
                <label
                  key={method}
                  className="flex cursor-pointer items-center space-x-2"
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    checked={form.contactMethod === method}
                    onChange={() =>
                      setForm((prev) => ({
                        ...prev,
                        contactMethod: method,
                      }))
                    }
                  />
                  <span className="text-body2 text-gray-400">{method}</span>
                </label>
              ))}
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary-500 px-5 py-3 text-body2 text-white transition hover:bg-primary-400"
            >
              다음 단계
            </button>
          </form>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <p className="text-body2 font-bold text-gray-500">희망 직무</p>
              {["개발자", "마케터", "디자이너", "CS"].map((job) => (
                <label
                  key={job}
                  className="flex cursor-pointer items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={form.desiredJob.includes(job)}
                    onChange={(event) => {
                      const nextJob = event.target.checked
                        ? [...form.desiredJob, job]
                        : form.desiredJob.filter((item) => item !== job);
                      setForm((prev) => ({ ...prev, desiredJob: nextJob }));
                    }}
                  />
                  <span className="text-body2 text-gray-500">{job}</span>
                </label>
              ))}

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={form.desiredJob.includes("기타")}
                  onChange={(event) => {
                    const nextJob = event.target.checked
                      ? [...form.desiredJob, "기타"]
                      : form.desiredJob.filter((item) => item !== "기타");
                    setForm((prev) => ({ ...prev, desiredJob: nextJob }));
                  }}
                />
                <span className="text-body2 text-gray-500">기타:</span>
                <input
                  className="border-b border-gray-300 text-body2 outline-none"
                  placeholder="직접 입력"
                  value={form.desiredJobEtc}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      desiredJobEtc: event.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-body2 font-bold text-gray-500">희망 역량</p>
              {[
                "인턴/신입",
                "미들 (약 ~ 5년차)",
                "시니어 (약 6년차 이상)",
              ].map((capability) => (
                <label
                  key={capability}
                  className="flex cursor-pointer items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={form.desiredCapability.includes(capability)}
                    onChange={(event) => {
                      const nextCapability = event.target.checked
                        ? [...form.desiredCapability, capability]
                        : form.desiredCapability.filter(
                            (item) => item !== capability,
                          );
                      setForm((prev) => ({
                        ...prev,
                        desiredCapability: nextCapability,
                      }));
                    }}
                  />
                  <span className="text-body2 text-gray-500">{capability}</span>
                </label>
              ))}

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={form.desiredCapability.includes("기타")}
                  onChange={(event) => {
                    const nextCapability = event.target.checked
                      ? [...form.desiredCapability, "기타"]
                      : form.desiredCapability.filter((item) => item !== "기타");
                    setForm((prev) => ({
                      ...prev,
                      desiredCapability: nextCapability,
                    }));
                  }}
                />
                <span className="text-body2 text-gray-500">기타:</span>
                <input
                  className="border-b border-gray-300 text-body2 outline-none"
                  placeholder="직접 입력"
                  value={form.desiredCapabilityEtc}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      desiredCapabilityEtc: event.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-body2 font-bold text-gray-500">희망 인원</p>
              {["1인", "2인", "3인 이상"].map((count) => (
                <label
                  key={count}
                  className="flex cursor-pointer items-center space-x-2"
                >
                  <input
                    type="radio"
                    name="desiredCount"
                    checked={form.desiredCount === count}
                    onChange={() =>
                      setForm((prev) => ({
                        ...prev,
                        desiredCount: count,
                      }))
                    }
                  />
                  <span className="text-body2 text-gray-500">{count}</span>
                </label>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-primary-500 px-8 py-3 text-body2 text-white transition hover:bg-primary-400"
              >
                작성
              </button>
              <button
                type="button"
                onClick={(event) => handleSubmit(event, true)}
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-8 py-3 text-body2 text-gray-400 transition hover:bg-gray-50"
              >
                건너뛰기
              </button>
            </div>
          </form>
        )}
      </div>

      <aside className="col-span-12 rounded-2xl border border-gray-200 bg-primary-100 p-6 md:col-span-4 md:p-8">
        <h2 className="text-h4 text-gray-500">전송 데이터</h2>
        <pre className="mt-4 min-h-52 overflow-auto rounded-xl bg-white p-4 text-caption text-gray-500">
          {submittedJson || "전송 대기 중..."}
        </pre>
      </aside>
    </section>
  );
}
