import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
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
  onClick?: () => void;
};

export const QuestionTypeIcon = forwardRef<HTMLDivElement, Props>(function QuestionTypeIcon(
  { questionType, className, ...props },
  ref,
) {
  return (
    <Box
      ref={ref}
      padding="space2"
      borderRadius="radius4"
      className={cx(
        css({
          backgroundColor: "blockIcon.start.bg",
          color: "blockIcon.start.fg",
        }),
        className,
      )}
      {...props}
    >
      <Icon color="inherit" icon={typeIcons[questionType]} />
    </Box>
  );
});
