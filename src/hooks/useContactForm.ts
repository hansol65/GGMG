import { useState, type FormEvent } from "react";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiry: string;
}

export const useContactForm = () => {
  const scriptUrl = import.meta.env.VITE_GAS_SCRIPT_URL;

  const [form, setForm] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      inquiry: "",
    });
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<boolean> => {
    event.preventDefault();

    if (!scriptUrl) {
      alert("스크립트 URL이 설정되지 않았습니다. .env를 확인해 주세요.");
      return false;
    }

    if (isSubmitting) {
      return false;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("company", form.company);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("inquiry", form.inquiry);

      await fetch(scriptUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      alert("문의가 접수되었습니다.");
      resetForm();
      return true;
    } catch (error) {
      console.error("문의 전송 실패:", error);
      alert("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setForm, handleSubmit, isSubmitting };
};
