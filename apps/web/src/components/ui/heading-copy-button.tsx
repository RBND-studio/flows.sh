"use client";

import { css, cx } from "@flows/styled-system/css";
import { Link16 } from "icons";
import { type ReactNode } from "react";
import { clipboard, Icon, toast } from "ui";

export const HeadingCopyButton = ({
  path,
  className,
}: {
  path: string;
  className?: string;
}): ReactNode => {
  const handleCopy = (): void => {
    void clipboard.copy(window.location.origin + path);
    toast.success("URL copied to your clipboard");
  };

  return (
    <button
      className={cx(
        css({
          color: "icon",
          fastEaseInOut: "all",
          padding: "space4",
          cursor: "pointer",
          _hover: {
            color: "icon.strong",
          },
        }),
        className,
      )}
      type="button"
      onClick={handleCopy}
    >
      <Icon color="inherit" icon={Link16} />
    </button>
  );
};
