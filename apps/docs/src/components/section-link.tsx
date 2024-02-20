import { css } from "@flows/styled-system/css";
import Link from "next/link";
import type { FC, ReactNode } from "react";

type Props = {
  href: string;
  children?: ReactNode;
  target?: string;
};

export const SectionLink: FC<Props> = (props) => {
  return (
    <Link
      className={css({
        display: "block",
        color: "text!",
        marginY: "space16",

        borBottom: "1px!",
        borderColor: "border.primary!",
        fontWeight: "600",
        borderRadius: "0!",
        textAlign: "left",
        width: "fit-content",
        paddingBottom: "1px",

        "&:hover": {
          paddingBottom: "0",
          borderBottomWidth: "2px!",
        },
      })}
      {...props}
    />
  );
};
