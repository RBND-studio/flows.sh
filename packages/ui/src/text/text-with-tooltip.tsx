"use client";

import mergeRefs from "merge-refs";
import { forwardRef, useState } from "react";

import { Tooltip } from "../tooltip/tooltip";
import { Text, type TextProps } from "./text";

export const TextWithTooltip = forwardRef<HTMLParagraphElement, TextProps>(
  function TextWithTooltip(props, ref) {
    const [textEl, setTextEl] = useState<HTMLParagraphElement | null>(null);

    const textContent = (
      <Text
        ref={mergeRefs(ref, setTextEl as (instance: HTMLParagraphElement | null) => void)}
        {...props}
      />
    );

    const isOverflowing = !!textEl && textEl.scrollWidth > textEl.clientWidth;

    if (!isOverflowing) return textContent;

    return <Tooltip trigger={textContent} content={props.children} />;
  },
);
