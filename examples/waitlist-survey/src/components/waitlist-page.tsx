"use client";

import { startWorkflow } from "@flows/react";
import { Sparkles } from "lucide-react";

export const WaitlistPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
      <span className="flex items-center gap-1.5 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
        <Sparkles size={12} />
        Coming soon
      </span>
      <div className="max-w-md">
        <h1 className="text-2xl font-semibold">Insightly AI Assistant</h1>
        <p className="mt-2 text-muted-foreground">
          Ask questions about your metrics in plain English and get an instant answer, chart
          included. We're onboarding a small group before opening it up to everyone.
        </p>
      </div>
      <button
        id="join-waitlist-button"
        onClick={() => startWorkflow("waitlist-survey.start")}
        className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
      >
        Join the waitlist
      </button>
    </div>
  );
};
