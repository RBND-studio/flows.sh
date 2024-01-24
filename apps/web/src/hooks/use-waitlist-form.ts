import { API_URL, RECAPTCHA_SITE_KEY } from "lib";
import { type FormEvent, useState } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- not needed
export const useWaitlistForm = () => {
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const captchaToken = await window.grecaptcha?.execute(RECAPTCHA_SITE_KEY, {
      action: "submitWaitlist",
    });
    if (captchaToken) {
      await fetch(`${API_URL}/waitlist`, {
        method: "POST",
        body: JSON.stringify({ captchaToken, email }),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        window.plausible("Join waitlist");
        setEmail("");
        setThankYouOpen(true);
      });
    }

    setLoading(false);
  };

  const loadRecaptcha = (): void => {
    const existingScript = document.getElementById("grecaptcha-script");
    if (existingScript) return;
    const script = document.createElement("script");
    script.id = "grecaptcha-script";
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    document.body.appendChild(script);
  };

  return {
    loading,
    handleSubmit,
    thankYouOpen,
    setThankYouOpen,
    email,
    setEmail,
    loadRecaptcha,
  };
};
