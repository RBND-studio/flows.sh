"use client";

import { css } from "@flows/styled-system/css";
import type { SystemStyleObject } from "@flows/styled-system/types";
import { Check16, Copy16 } from "icons";
import type { Ref } from "react";
import { type FC, useState } from "react";

import { IconButton } from "../icon-button";
import { clipboard } from "../utils/utils";

type Props = {
  code: string | (() => string);
  css?: SystemStyleObject;
  ref?: Ref<HTMLButtonElement>;
};

export const CopyButton: FC<Props> = ({ code, css: cssProp, ref }) => {
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
      className="copy-button"
      css={css.raw({ position: "absolute", right: "10px", top: "10px", opacity: 0, p: 0 }, cssProp)}
    >
      {successIcon ? <Check16 /> : <Copy16 />}
    </IconButton>
  );
};
