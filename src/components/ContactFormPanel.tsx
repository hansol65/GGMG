import type { FormEvent } from "react";
import { useContactForm } from "../hooks/useContactForm";

type ContactFormPanelProps = {
  onClose: () => void;
};

const labelClassName = "text-body2 font-semibold text-gray-500";
const inputClassName =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-body2 text-gray-500 outline-none transition placeholder:text-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200";

export default function ContactFormPanel({ onClose }: ContactFormPanelProps) {
  const { form, setForm, handleSubmit, isSubmitting } = useContactForm();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const isSuccess = await handleSubmit(event);
    if (isSuccess) {
      onClose();
    }
  };

  return (
    <section className="mx-auto w-full max-w-[464px] rounded-2xl bg-white p-5 shadow-[0_24px_48px_rgba(0,0,0,0.28)] md:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-h4 text-gray-500">서비스 문의하기</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="rounded-md p-1 text-[28px] leading-none text-gray-400 transition hover:bg-gray-100"
        >
          ×
        </button>
      </div>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2">
          <label className={labelClassName}>
            성함 <span className="text-[#ff5f57]">*</span>
          </label>
          <input
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            className={inputClassName}
            placeholder="성함을 입력해 주세요."
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelClassName}>
            회사명 <span className="text-[#ff5f57]">*</span>
          </label>
          <input
            value={form.company}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, company: event.target.value }))
            }
            className={inputClassName}
            placeholder="회사명을 입력해 주세요."
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelClassName}>
            회사 이메일 <span className="text-[#ff5f57]">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            className={inputClassName}
            placeholder="somebody@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelClassName}>
            휴대전화번호 <span className="text-[#ff5f57]">*</span>
          </label>
          <input
            value={form.phone}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, phone: event.target.value }))
            }
            className={inputClassName}
            placeholder="예) 010-1234-5678"
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelClassName}>문의 내용</label>
          <textarea
            value={form.inquiry}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, inquiry: event.target.value }))
            }
            className={`${inputClassName} min-h-[140px] resize-none`}
            placeholder="문의 내용을 작성해 주세요."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-primary-500 px-5 py-3 text-body2 text-white transition hover:bg-primary-400 disabled:cursor-not-allowed disabled:bg-primary-300"
        >
          {isSubmitting ? "전송 중..." : "문의하기"}
        </button>
      </form>
    </section>
  );
}
