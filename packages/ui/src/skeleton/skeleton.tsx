import { css, cx } from "@flows/styled-system/css";
import type { FC } from "react";

type Props = {
  className?: string;
};

export const Skeleton: FC<Props> = ({ className }) => {
  return (
    <div
      className={cx(
        css({
          animation: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          borderRadius: "radius4",
          bg: "bg.subtle",
        }),
        className,
      )}
    />
  );
};
