"use client";

import { css, cx } from "@flows/styled-system/css";
import { Check16, Copy16 } from "icons";
import type { Ref } from "react";
import { type FC, useState } from "react";

import { IconButton } from "../icon-button";
import { clipboard } from "../utils/utils";

type Props = {
  code: string | (() => string);
  className?: string;
  ref?: Ref<HTMLButtonElement>;
};

export const CopyButton: FC<Props> = ({ code, className, ref }) => {
  const [successIcon, setSuccessIcon] = useState(false);

  const handleCopy = (): void => {
    const codeToCopy = typeof code === "function" ? code() : code;
    void clipboard.copy(codeToCopy);
    setSuccessIcon(true);
    setTimeout(() => setSuccessIcon(false), 2000);
  };

  return (
    <IconButton
      ref={ref}
      onClick={handleCopy}
      variant="secondary"
      size="small"
      tooltip="Copy"
      className={cx(
        css({ position: "absolute", right: "10px", top: "10px", opacity: 0, p: 0 }),
        "copy-button",
        className,
      )}
    >
      {successIcon ? <Check16 /> : <Copy16 />}
    </IconButton>
  );
};
