import { forwardRef } from "react";

import { BaseText, type TextProps } from "./base-text";
import { TextWithTooltip } from "./text-with-tooltip";

export type { TextProps } from "./base-text";

export const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(props, ref) {
  if (!props.hideOverflow) return <BaseText ref={ref} {...props} />;

  return <TextWithTooltip ref={ref} {...props} />;
});
