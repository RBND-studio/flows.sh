"use client";

import { ComponentProps } from "@flows/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { X, ArrowLeft, Lock, Github, Slack, Gitlab } from "lucide-react";

type Props = ComponentProps<{
  mainTitle: string;
  steps: {
    title: string;
    description: string;
    illustration: "lock" | "providers";
  }[];

  close: () => void;
}>;

// Feature Announcement Component imported in `src/app/providers.tsx` and passed to `FlowsProvider`
export const FeatureAnnouncement = ({ mainTitle, steps, close }: Props) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const stepCount = steps.length;

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentStepIndex(currentStepIndex + 1);
      // Reset animation state after transition completes
      setTimeout(() => setIsAnimating(false), 300);
    }
    if (currentStepIndex === steps.length - 1) {
      // Last step reached, close the announcement
      close();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentStepIndex(currentStepIndex - 1);
      // Reset animation state after transition completes
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    // Dialog
    <div className="absolute inset-0 z-50 flex animate-[fadeIn_160ms_ease-in-out] items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="mx-4 max-w-lg animate-[fadeInScale_320ms_ease-in-out] rounded-lg bg-white dark:bg-neutral-900">
        <div className="flex items-center justify-between gap-4 p-5">
          {currentStepIndex !== 0 ? (
            <Button variant={"ghost"} size={"smIcon"} onClick={handlePrev}>
              <ArrowLeft size={16} />
            </Button>
          ) : null}

          <h2 className="text-xl font-semibold">{mainTitle}</h2>
          <Button variant={"ghost"} size={"smIcon"} onClick={close}>
            <X size={16} />
          </Button>
        </div>
        {/* Step Container with sliding animation */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentStepIndex * 100}%)` }}
          >
            {steps.map((step, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="flex flex-col items-center px-8 pb-6 pt-4 text-center">
                  {illustrations[step.illustration]}
                  <h3 className="mb-1 text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dialog footer */}
        <div className="flex justify-between border-t border-muted p-5">
          <div className="flex items-center gap-2">
            {Array.from({ length: stepCount }).map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 rounded-full transition-colors duration-200 ${index === currentStepIndex ? "bg-blue-500" : "bg-gray-300"} `}
              />
            ))}
          </div>
          <Button onClick={handleNext} size="sm">
            {currentStepIndex === stepCount - 1 ? "Dismiss" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

// Illustrations  (you can load these from separate files or CDN as needed)
const illustrations = {
  lock: (
    <div className="mb-6 flex w-fit items-center justify-center rounded-md bg-blue-600 p-4 dark:bg-blue-900">
      <Lock size={48} className="text-blue-100" />
    </div>
  ),
  providers: (
    <div className="flex gap-4">
      <div className="mb-6 flex w-fit items-center justify-center rounded-md bg-neutral-950 p-4">
        <Github size={48} className="text-neutral-100" />
      </div>
      <div className="mb-6 flex w-fit items-center justify-center rounded-md bg-purple-600 p-4 dark:bg-purple-900">
        <Slack size={48} className="text-purple-100" />
      </div>
      <div className="mb-6 flex w-fit items-center justify-center rounded-md bg-orange-600 p-4 dark:bg-orange-900">
        <Gitlab size={48} className="text-orange-100" />
      </div>
    </div>
  ),
};
