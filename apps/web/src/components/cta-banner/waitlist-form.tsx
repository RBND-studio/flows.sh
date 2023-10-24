"use client";

import { css } from "@flows/styled-system/css";
import { RECAPTCHA_SITE_KEY, WAITLIST_API_URL } from "lib";
import { type FC, type FormEvent, useState } from "react";
import { Button, Input } from "ui";

export const WaitlistForm: FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const captchaToken = await window.grecaptcha?.execute(RECAPTCHA_SITE_KEY, {
      action: "submitWaitlist",
    });
    if (captchaToken) {
      await fetch(WAITLIST_API_URL, {
        method: "POST",
        body: JSON.stringify({ captchaToken, email }),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        window.plausible("Join waitlist");
        setEmail("");
      });
    }

    setLoading(false);
  };

  return (
    <form
      className={css({
        display: "flex",
        gap: "space8",
        alignItems: "center",
      })}
      onSubmit={handleSubmit}
    >
      <Input
        onChange={(e) => setEmail(e.currentTarget.value)}
        placeholder="Enter your email"
        required
        size="large"
        type="email"
        value={email}
      />
      <Button loading={loading} type="submit">
        Join waitlist
      </Button>
    </form>
  );
};
