"use client";

import { TourComponentProps } from "@flows/react";
import { Button } from "./ui/button";

type Props = TourComponentProps<{
  title: string;
  description: string;
}>;

export const CustomCard = (props: Props) => {
  const totalSteps = props.__flows.tourVisibleStepCount || 0;
  const currentStep = props.__flows.tourVisibleStepIndex || 0;

  return (
    <div className="flex h-full flex-col justify-between rounded-lg border bg-muted/50 p-4">
      <div>
        <h2 className="mb-2 text-lg font-bold">{props.title}</h2>
        <p className="mb-4 max-w-[720px] text-sm text-muted-foreground">{props.description}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button variant="outline" size="sm" onClick={props.previous}>
          Back
        </Button>
        <IndicatorDots total={totalSteps} current={currentStep} />
        <Button size="sm" onClick={props.continue}>
          Next
        </Button>
      </div>
    </div>
  );
};

const IndicatorDots = (props: { total: number; current: number }) => {
  return (
    <div className="flex gap-[6px]">
      {Array.from({ length: props.total }).map((_, index) => (
        <div
          key={index}
          className={`h-[10px] w-[10px] rounded-full ${index === props.current ? "bg-foreground" : "bg-foreground/10"}`}
        />
      ))}
    </div>
  );
};
