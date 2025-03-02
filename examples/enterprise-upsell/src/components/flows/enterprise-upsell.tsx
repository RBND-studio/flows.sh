"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Rocket, X } from "lucide-react";
import { ComponentProps } from "@flows/react";

type Props = ComponentProps<{
  title: string;
  description: string;

  ctaTitle: string;
  ctaLink: string;

  learnMoreTitle: string;
  learnMoreLink: string;

  continue: () => void;
  close: () => void;
}>;

export const EnterpriseUpsell = (props: Props) => {
  return (
    <div className="background-gradient mt-6 rounded-[7px] p-[1px] shadow-md">
      <div className="relative w-full rounded-md bg-card p-4">
        <p className="mb-1 mr-6 text-lg font-semibold">{props.title}</p>
        <p className="mb-4 text-sm text-muted-foreground">{props.description}</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Button size="sm" asChild onClick={props.continue}>
            <Link href={props.ctaLink}>
              <Rocket size="16" />
              {props.ctaTitle}
            </Link>
          </Button>
          <Button size="sm" variant="ghost" asChild>
            <Link href={props.learnMoreLink}>{props.learnMoreTitle}</Link>
          </Button>
        </div>
        <Button
          size="smIcon"
          variant="ghost"
          className="absolute right-3 top-3"
          onClick={props.close}
        >
          <X size="16" />
        </Button>
      </div>
    </div>
  );
};
