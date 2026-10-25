import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import type { SystemStyleObject } from "@flows/styled-system/types";
import { type JSX } from "react";

type Props = {
  size?: number;
  className?: string;
  /** Style overrides, merged with the component's own styles so they win without `!` */
  css?: SystemStyleObject;
};

export const FancyLogo = ({ size = 60, className, css: cssProp }: Props): JSX.Element => {
  return (
    <Box width="fit-content" shadow="antimetal" flexShrink={0} style={{ borderRadius: size / 2 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        viewBox="0 0 80 60"
        fill="none"
        className={cx(css(svgStyles, cssProp), className)}
        style={{ borderRadius: size }}
      >
        <rect x="12" y="9" width="55" height="38" fill="var(--fancy-logo-middle-bg)" />
        <path
          d="M76.04 14.48a28.5 28.5 0 0 0-10.92-10.6A33 33 0 0 0 50 0H32c-6.06 0-12.48 1.32-17.1 3.88A28.5 28.5 0 0 0 3.98 14.46C1.34 18.92 0 24.16 0 30.04q.01 8.8 3.98 15.48A28.3 28.3 0 0 0 14.94 56.1C19.6 58.66 25.88 60 32 60h18a33 33 0 0 0 15.2-3.9 28 28 0 0 0 10.88-10.58c2.6-4.48 3.92-9.68 3.92-15.5s-1.34-11.06-3.96-15.54M60.6 29.78l-5.86 5.86A8 8 0 0 1 49.16 38H39.9c-2.1 0-4.1.78-5.58 2.26L32.24 42a9.01 9.01 0 0 1-14.8-6.9c0-1.8.72-3.52 1.98-4.78l5.86-5.86A8 8 0 0 1 30.9 22h9.26a7.7 7.7 0 0 0 5.56-2.16l1.86-1.66a9 9 0 0 1 15 6.5V25c0 1.8-.7 3.52-1.98 4.78"
          fill="url(#paint0_linear_5044_4721)"
        />
        <path
          d="M32 .5h17.99l1.04.04c5.17.28 9.83 1.57 13.85 3.78A28 28 0 0 1 75.6 14.73c2.57 4.4 3.89 9.55 3.89 15.29q-.01 8.63-3.85 15.25a27.7 27.7 0 0 1-10.27 10.15l-.42.24a32.4 32.4 0 0 1-14.97 3.84H32c-6.06 0-12.25-1.33-16.82-3.84a28 28 0 0 1-10.77-10.4l-.24-.4C1.74 40.56.5 35.65.5 30.03c0-5.8 1.32-10.95 3.91-15.33A28 28 0 0 1 15.14 4.3C19.67 1.82 26 .5 32 .5m31.08 24.17a9.5 9.5 0 0 0-15.83-6.86l-1.86 1.66h-.01l-.01.02a7.2 7.2 0 0 1-5.21 2.01H30.9a8.6 8.6 0 0 0-5.97 2.6l-5.86 5.87a7.3 7.3 0 0 0-2.13 5.13 9.51 9.51 0 0 0 15.62 7.28l2.08-1.74.02-.01.01-.02a7.3 7.3 0 0 1 5.23-2.11h9.26c2.22 0 4.37-.94 5.93-2.5l5.86-5.86A7.2 7.2 0 0 0 63.08 25z"
          stroke="url(#paint1_linear_5044_4721)"
          strokeOpacity="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5044_4721"
            x1="81.875"
            y1="-2.65621e-07"
            x2="-4.2282e-06"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--fancy-logo-gradient-start)" />
            <stop offset="0.22" stopColor="var(--fancy-logo-gradient-mid)" />
            <stop offset="0.40" stopColor="var(--fancy-logo-gradient-end)" />
            <stop offset="0.42" stopColor="var(--fancy-logo-gradient-end)" />
            <stop offset="0.54" stopColor="var(--fancy-logo-gradient-mid)" />
            <stop offset="1" stopColor="var(--fancy-logo-gradient-start)" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_5044_4721"
            x1="81.875"
            y1="-2.65621e-07"
            x2="-4.2282e-06"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--fancy-logo-outline-color)" stopOpacity="0.2" />
            <stop offset="0.22" stopColor="var(--fancy-logo-outline-color)" stopOpacity="0.5" />
            <stop offset="0.40" stopColor="var(--fancy-logo-outline-color)" />
            <stop offset="0.42" stopColor="var(--fancy-logo-outline-color)" />
            <stop offset="0.54" stopColor="var(--fancy-logo-outline-color)" stopOpacity="0.5" />
            <stop offset="1" stopColor="var(--fancy-logo-outline-color)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};

const svgStyles = css.raw({
  "--fancy-logo-gradient-start": "#15181C",
  "--fancy-logo-gradient-mid": "#2B313A",
  "--fancy-logo-gradient-end": "#6B727B",
  "--fancy-logo-middle-bg": "#fff",
  "--fancy-logo-outline-color": "#fff",

  flexShrink: 0,

  _dark: {
    "--fancy-logo-gradient-start": "#fff",
    "--fancy-logo-gradient-mid": "#DFE3E8",
    "--fancy-logo-gradient-end": "#A6ACB4",
    "--fancy-logo-middle-bg": "#15181C",
    "--fancy-logo-outline-color": "#000",
  },
});
