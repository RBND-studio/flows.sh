import { cva, cx } from "@flows/styled-system/css";
import { Spinner20 } from "icons";
import { forwardRef } from "react";

import { Icon } from "../icon";

type Props = {
  className?: string;
};

export const Spinner = forwardRef<HTMLDivElement, Props>(function Spinner(
  { className, ...props },
  ref,
) {
  return (
    <div {...props} className={cx(spinner(), className)} ref={ref}>
      <Icon color="icon.primary" icon={Spinner20} />
    </div>
  );
});

const spinner = cva({
  base: {
    animation: "rotate 1100ms infinite linear",
    width: 20,
    height: 20,
  },
});
