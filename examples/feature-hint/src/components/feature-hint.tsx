"use client";

import { useEffect, useRef } from "react";
import {
  arrow,
  autoUpdate,
  FloatingArrow,
  Placement,
  useFloating,
  offset,
} from "@floating-ui/react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { ComponentProps } from "@flows/react";
import Link from "next/link";

type Props = ComponentProps<{
  title: string;
  description: string;
  imageUrl?: string;

  targetElement: string;
  placement: Placement;
  offset?: number;

  ctaUrl?: string;
  ctaLabel?: string;

  learnMoreUrl?: string;
  learnMoreLabel?: string;

  continue?: () => void;
  close?: () => void;
}>;

const ARROW_HEIGHT = 7;

export const FeatureHint = (props: Props) => {
  const reference = props.targetElement ? document.querySelector(props.targetElement) : null;
  const arrowRef = useRef<SVGSVGElement>(null);

  const { refs, x, y, context } = useFloating({
    placement: props.placement,
    elements: { reference },
    whileElementsMounted: autoUpdate,
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset((props.offset ?? 0) + ARROW_HEIGHT),
    ],
  });

  useEffect(() => {
    if (!props.targetElement) {
      console.error("Cannot render hint without target element");
    }
  }, [props.targetElement]);

  if (!props.targetElement) return null;

  return (
    <>
      <div
        ref={refs.setFloating}
        style={{
          left: x,
          top: y,
          animation: "fadeIn 160ms ease-in-out",
        }}
        className="absolute max-w-[280px] rounded-xl border bg-white shadow-md dark:bg-neutral-900"
      >
        <div className="flex items-center justify-between px-3 py-2">
          <p className="text-sm font-semibold">{props.title}</p>
          <Button variant="ghost" size="smIcon">
            <X size={16} onClick={props.close} />
          </Button>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- remote image */}
        <img src={props.imageUrl} alt="" className="w-full" />

        <div className="px-3 py-3">
          <p className="text-sm font-medium">{props.description}</p>
          {props.learnMoreUrl || props.ctaUrl ? (
            <div className="mt-3 flex justify-end gap-2">
              {props.learnMoreUrl && (
                <Button asChild variant="outline" size="sm">
                  <Link href={props.learnMoreUrl} target="_blank">
                    {props.learnMoreLabel}
                  </Link>
                </Button>
              )}
              {props.ctaUrl && (
                <Button asChild variant="default" size="sm" onClick={props.continue}>
                  <Link href={props.ctaUrl}>{props.ctaLabel}</Link>
                </Button>
              )}
            </div>
          ) : null}
        </div>
        <FloatingArrow
          ref={arrowRef}
          className="fill-white dark:fill-neutral-900 [&>path:first-of-type]:stroke-border [&>path:last-of-type]:stroke-white dark:[&>path:last-of-type]:stroke-neutral-900"
          strokeWidth={1}
          context={context}
          height={ARROW_HEIGHT}
        />
      </div>
    </>
  );
};
