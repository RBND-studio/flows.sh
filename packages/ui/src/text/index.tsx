import { forwardRef } from "react";

import { Text as BaseText, type TextProps } from "./text";
import { TextWithTooltip } from "./text-with-tooltip";

export const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(props, ref) {
  if (!props.hideOverflow) return <BaseText ref={ref} {...props} />;

  return <TextWithTooltip ref={ref} {...props} />;
});
