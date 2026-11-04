import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { type HTMLStyledProps, type SystemStyleObject } from "@flows/styled-system/types";
import { useId, type FC, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> &
  HTMLStyledProps<"div"> & {
    className?: string;
    /** Style overrides, merged with the component's own styles so they win without `!` */
    css?: SystemStyleObject;
    /**
     * Shrinks the width by up to this fraction (0 to 1), by a different amount for each skeleton,
     * so a column of them looks like real content. Needs `width` as a number or a CSS length.
     */
    widthVariability?: number;
  };

export const Skeleton: FC<Props> = ({ css: cssProp, widthVariability, ...props }) => {
  const id = useId();
  const width = typeof props.width === "number" ? `${props.width}px` : props.width;
  const style =
    widthVariability && typeof width === "string"
      ? {
          ...props.style,
          width: `calc(${width} * ${1 - widthVariability * seededRandom(id)})`,
        }
      : props.style;

  return (
    <Box
      {...props}
      style={style}
      className={cx(
        css(
          {
            animation: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            borderRadius: "radius4",
            bg: "bg.neutral.subtle",
          },
          cssProp,
        ),
        props.className,
      )}
    />
  );
};

/** Sized to the surrounding text, so it can stand in for loading content inside `Text` */
export const TextSkeleton: FC<Props> = (props) => (
  <Skeleton as="span" display="inline-block" verticalAlign="text-bottom" height="1em" {...props} />
);

// Seeded with useId, so the server and the client pick the same width and hydration matches
const seededRandom = (seed: string): number => {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    hash = Math.imul(hash ^ seed.charCodeAt(i), 16777619);
  }
  hash = Math.imul(hash ^ (hash >>> 15), 2246822507);
  hash ^= hash >>> 13;
  return (hash >>> 0) / 4294967296;
};
