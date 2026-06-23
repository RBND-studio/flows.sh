"use client";

import type { FC } from "react";
import { useCallback, useRef } from "react";
import { CopyButton } from "ui";

export const MdxCopyButton: FC = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const getCode = useCallback(() => {
    const preElement = ref.current?.parentElement?.querySelector("pre");
    return preElement?.textContent ?? "";
  }, []);

  return <CopyButton ref={ref} code={getCode} />;
};
