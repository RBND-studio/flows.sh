"use client";

import { css, cx } from "@flows/styled-system/css";
import { Check16, Copy16 } from "icons";
import { type FC, useState } from "react";

import { IconButton } from "../icon-button";
import { clipboard } from "../utils/utils";

type Props = {
  code: string;
};

export const CopyButton: FC<Props> = ({ code }) => {
  const [successIcon, setSuccessIcon] = useState(false);

  const handleCopy = (): void => {
    void clipboard.copy(code);
    setSuccessIcon(true);
    setTimeout(() => setSuccessIcon(false), 2000);
  };

  return (
    <IconButton
      onClick={handleCopy}
      variant="secondary"
      size="small"
      tooltip="Copy"
      className={cx(
        css({ position: "absolute", right: "10px", top: "10px", opacity: 0, p: 0 }),
        "copy-button",
      )}
    >
      {successIcon ? <Check16 /> : <Copy16 />}
    </IconButton>
  );
};
