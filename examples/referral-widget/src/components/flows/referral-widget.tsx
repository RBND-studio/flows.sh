"use client";

import type { ComponentProps } from "@flows/react";
import { Check, Copy, Gift, X } from "lucide-react";
import { useState } from "react";

type Props = ComponentProps<{
  title: string;
  description: string;
  referralCode: string;
  rewardText: string;
  copyLabel: string;
  close: () => void;
}>;

export const ReferralWidget = (props: Props) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(`https://example.com/invite/${props.referralCode}`);
    } catch {
      // Clipboard access can fail (e.g. insecure context or missing permission); the code is
      // still shown on screen so the user can copy it manually.
    }
    setCopied(true);
  };

  return (
    <div className="relative w-full  rounded-lg border bg-card p-4 shadow-sm">
      <button
        aria-label="Dismiss"
        onClick={props.close}
        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
      >
        <X size={14} />
      </button>
      <div className="mb-2 flex items-center gap-2">
        <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Gift size={14} />
        </div>
        <p className="font-semibold">{props.title}</p>
      </div>
      <p className="mb-3 text-sm text-muted-foreground">{props.description}</p>
      <p className="mb-3 text-xs font-medium text-muted-foreground">{props.rewardText}</p>
      <div className="flex items-center gap-2">
        <code className="flex-1 truncate rounded-md border bg-muted/50 px-2 py-1.5 text-xs">
          example.com/invite/{props.referralCode}
        </code>
        <button
          onClick={onCopy}
          className="flex shrink-0 items-center gap-1.5 rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied" : props.copyLabel}
        </button>
      </div>
    </div>
  );
};
