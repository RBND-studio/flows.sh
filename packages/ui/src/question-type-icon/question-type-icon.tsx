import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import type { SystemStyleObject } from "@flows/styled-system/types";
import { End16, Link16, MultiSelect16, Select16, Star16, String16 } from "icons";
import { type FC, type SVGProps } from "react";
import { forwardRef } from "react";

import { Icon } from "../icon";
import type { QuestionType } from "@flows/types";

type IconCmp = FC<SVGProps<SVGSVGElement>>;

export const typeIcons: Record<QuestionType, IconCmp> = {
  freeform: String16,
  rating: Star16,
  "single-choice": Select16,
  "multiple-choice": MultiSelect16,
  link: Link16,
  "end-screen": End16,
};

type Props = {
  questionType: QuestionType;
  className?: string;
  /** Style overrides, merged with the component's own styles so they win without `!` */
  css?: SystemStyleObject;
  onClick?: () => void;
};

export const QuestionTypeIcon = forwardRef<HTMLDivElement, Props>(function QuestionTypeIcon(
  { questionType, className, css: cssProp, ...props },
  ref,
) {
  return (
    <Box
      ref={ref}
      padding="space2"
      borderRadius="radius4"
      className={className}
      css={css.raw(
        {
          backgroundColor: "blockIcon.start.bg",
          color: "blockIcon.start.fg",
        },
        cssProp,
      )}
      {...props}
    >
      <Icon color="inherit" icon={typeIcons[questionType]} />
    </Box>
  );
});
