"use client";

import { useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { autoUpdate, Placement, useFloating } from "@floating-ui/react-dom";
import { Button } from "./ui/button";
import { X } from "lucide-react";

type Props = {
  title: string;
  description: string;
  buttonLabel: string;

  targetElement: string;
  placement: Placement;
  offsetX?: number;
  offsetY?: number;

  continue: () => void;
  close: () => void;
};

const WIDTH = 16;
const HEIGHT = 16;

export const FlowsHint = (props: Props) => {
  const reference = props.targetElement ? document.querySelector(props.targetElement) : null;
  const { refs, x, y } = useFloating({
    placement: props.placement,
    elements: { reference },
    whileElementsMounted: autoUpdate,
  });

  const hintX = x + (props.offsetX ?? 0);
  const hintY = y + (props.offsetY ?? 0);

  useEffect(() => {
    if (!props.targetElement) {
      console.error("Cannot render hint without target element");
    }
  }, [props.targetElement]);

  if (!props.targetElement) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          ref={refs.setFloating}
          style={{
            left: hintX,
            top: hintY,
          }}
          className="absolute block"
        >
          {/* pulse */}
          <div
            className="absolute right-0 top-0 animate-ping rounded-full bg-primary"
            style={{ width: WIDTH, height: HEIGHT }}
          />
          {/* innter circle */}
          <div
            className="right-0 top-0 rounded-full bg-primary"
            style={{ width: WIDTH, height: HEIGHT }}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <Button
          variant="ghost"
          size="smIcon"
          className="absolute right-4 top-4"
          onClick={props.close}
        >
          <X size={12} />
        </Button>
        <p className="mb-0.5 text-base font-bold text-card-foreground">{props.title}</p>
        <p className="text-sm font-medium text-muted-foreground">{props.description}</p>
        {props.buttonLabel ? (
          <Button className="mt-2" size="sm" onClick={props.continue}>
            {props.buttonLabel}
          </Button>
        ) : null}
      </PopoverContent>
    </Popover>
  );
};
