"use client";

import { autoUpdate, Placement, useFloating } from "@floating-ui/react-dom";
import { Star } from "lucide-react";
import { useEffect } from "react";

type Props = {
  title?: string;

  targetElement: string;
  placement: Placement;
  offsetX?: number;
  offsetY?: number;
};

export const NewFeatureBadge = (props: Props) => {
  const reference = props.targetElement ? document.querySelector(props.targetElement) : null;
  const { refs, x, y } = useFloating({
    placement: props.placement,
    elements: { reference },
    whileElementsMounted: autoUpdate,
  });

  const badgeX = x + (props.offsetX ?? 0);
  const badgeY = y + (props.offsetY ?? 0);

  useEffect(() => {
    if (!props.targetElement) {
      console.error("Cannot render badge without target element");
    }
  }, [props.targetElement]);

  if (!props.targetElement) return null;

  return (
    <div
      ref={refs.setFloating}
      style={{
        left: badgeX,
        top: badgeY,
      }}
      className="absolute mb-2 flex w-fit items-center rounded-md bg-indigo-500 p-0.5 text-white"
    >
      <Star className="ml-0.5" size={16} />
      {props.title ? <p className="mx-1 text-sm font-semibold">{props.title}</p> : null}
    </div>
  );
};
