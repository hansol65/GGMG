import { useState, type FormEvent, type MouseEvent } from "react";

interface ContactFormData {
  company: string;
  managerName: string;
  email: string;
  phone: string;
  contactMethod: string;
  desiredJob: string[];
  desiredJobEtc: string;
  desiredCapability: string[];
  desiredCapabilityEtc: string;
  desiredCount: string;
}

const OTHER = "기타";

const mergeSelectableWithEtc = (
  selected: string[],
  etcText: string,
  otherLabel: string = OTHER,
) => {
  const list = selected.filter((item) => item !== otherLabel);
  const etc = etcText.trim();

  if (selected.includes(otherLabel)) {
    list.push(etc ? `${otherLabel}(${etc})` : otherLabel);
  }

  return list.join(", ");
};

export const useContactForm = () => {
  const SCRIPT_URL = import.meta.env.VITE_GAS_SCRIPT_URL;

  const [form, setForm] = useState<ContactFormData>({
    company: "",
    managerName: "",
    email: "",
    phone: "",
    contactMethod: "무관",
    desiredJob: [],
    desiredJobEtc: "",
    desiredCapability: [],
    desiredCapabilityEtc: "",
    desiredCount: "",
  });

  const [submittedJson, setSubmittedJson] = useState("");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>,
    isSkipped: boolean = false,
  ) => {
    event.preventDefault();

    if (!SCRIPT_URL) {
      alert("스크립트 URL이 설정되지 않았습니다. .env를 확인해주세요.");
      return;
    }

    const formData = new FormData();

    formData.append("company", form.company);
    formData.append("managerName", form.managerName);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("contactMethod", form.contactMethod);

    if (isSkipped) {
      formData.append("desiredJob", "");
      formData.append("desiredCapability", "");
      formData.append("desiredCount", "");
    } else {
      formData.append(
        "desiredJob",
        mergeSelectableWithEtc(form.desiredJob, form.desiredJobEtc),
      );
      formData.append(
        "desiredCapability",
        mergeSelectableWithEtc(form.desiredCapability, form.desiredCapabilityEtc),
      );
      formData.append("desiredCount", form.desiredCount);
    }

    fetch(SCRIPT_URL, { method: "POST", body: formData, mode: "no-cors" })
      .then(() => {
        alert(
          isSkipped ? "기본 정보로 접수했습니다." : "전송 요청 완료! 이메일을 확인해보세요.",
        );
        setSubmittedJson(JSON.stringify(form, null, 2));
      })
      .catch((error) => {
        console.log("에러:", error);
      });
  };

  return { form, setForm, handleSubmit, submittedJson };
};
