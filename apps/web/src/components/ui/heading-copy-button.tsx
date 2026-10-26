"use client";

import { css, cx } from "@flows/styled-system/css";
import type { SystemStyleObject } from "@flows/styled-system/types";
import { Check16, Link16 } from "icons";
import { useState, type ReactNode } from "react";
import { clipboard, Icon } from "ui";

export const HeadingCopyButton = ({
  hash,
  className,
  css: cssProp,
}: {
  /** Id of the heading to link to */
  hash?: string;
  className?: string;
  /** Style overrides, merged with the component's own styles so they win without `!` */
  css?: SystemStyleObject;
}): ReactNode => {
  const [hasBeenCopied, setHasBeenCopied] = useState(false);

  const handleCopy = (): void => {
    setHasBeenCopied(true);
    void clipboard.copy(`${window.location.origin}${window.location.pathname}#${hash}`);
    setTimeout(() => setHasBeenCopied(false), 3000);
  };

  return (
    <button
      aria-label="Copy link to heading"
      className={cx(
        css(
          {
            color: "fg.neutral.subtle",
            fastEaseInOut: "all",
            padding: "space4",
            cursor: "pointer",
            _hover: {
              color: "fg.neutral",
            },
            opacity: hasBeenCopied ? 1 : undefined,
          },
          cssProp,
        ),
        className,
      )}
      type="button"
      onClick={handleCopy}
    >
      {hasBeenCopied ? (
        <Icon color="fg.success" icon={Check16} />
      ) : (
        <Icon color="inherit" icon={Link16} />
      )}
    </button>
  );
};
