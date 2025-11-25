import { css, cx } from "@flows/styled-system/css";
import { type JSX } from "react";

type Props = {
  size?: number;
  className?: string;
};

export const FancyLogo = ({ size = 60, className }: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 80 60"
      fill="none"
      className={cx(svgClass, className)}
      style={{ borderRadius: size }}
    >
      <rect x="12" y="9" width="55" height="38" fill="var(--fancy-logo-middle-bg)" />
      <path
        d="M76.04 14.48C73.4 10 69.74 6.44 65.12 3.88C60.76 1.48 55.66 0.16 50 0H32C25.94 0 19.52 1.32 14.9 3.88C10.28 6.44 6.6 10 3.98 14.46C1.34 18.92 0 24.16 0 30.04C0 35.92 1.34 41.06 3.98 45.52C6.6 49.98 10.3 53.56 14.94 56.1C19.6 58.66 25.88 60 32 60H50C55.62 59.88 60.8 58.52 65.2 56.1C69.82 53.54 73.48 49.98 76.08 45.52C78.68 41.04 80 35.84 80 30.02C80 24.2 78.66 18.96 76.04 14.48ZM60.6 29.78L54.74 35.64C53.26 37.12 51.24 38 49.16 38H39.9C37.8 38 35.8 38.78 34.32 40.26L32.24 42C26.38 46.92 17.44 42.74 17.44 35.1C17.44 33.3 18.16 31.58 19.42 30.32L25.28 24.46C26.76 22.98 28.8 22 30.9 22H40.16C42.26 22 44.24 21.32 45.72 19.84L47.58 18.18C53.3 13.06 62.4 17 62.58 24.68V25C62.58 26.8 61.88 28.52 60.6 29.78Z"
        fill="url(#paint0_linear_5044_4721)"
      />
      <path
        d="M32 0.5H49.9863L51.0273 0.542969C56.2009 0.824972 60.8644 2.10853 64.8789 4.31836V4.31738C69.4205 6.83414 73.0145 10.3305 75.6084 14.7314V14.7324C78.1785 19.1271 79.4999 24.2779 79.5 30.0195C79.5 35.7619 78.198 40.8736 75.6475 45.2686C73.1737 49.5118 69.7242 52.926 65.3809 55.4238L64.959 55.6621C60.6353 58.0401 55.5352 59.3816 49.9893 59.5H32C25.9421 59.5 19.7497 58.1721 15.1807 55.6621L15.1797 55.6611C10.6178 53.1638 6.98452 49.6473 4.41113 45.2666L4.41016 45.2656L4.1709 44.8535C1.73933 40.5749 0.500006 35.6596 0.5 30.04C0.5 24.2376 1.82169 19.0879 4.41016 14.7148L4.41113 14.7129C6.98461 10.3322 10.5988 6.83512 15.1426 4.31738C19.6685 1.80954 25.9988 0.5 32 0.5ZM63.0801 24.668C62.8899 16.5621 53.2852 12.4029 47.2471 17.8066L45.3867 19.4668L45.377 19.4766L45.3662 19.4863C43.9959 20.8566 42.1518 21.5 40.1602 21.5H30.9004C28.6474 21.5 26.485 22.5483 24.9268 24.1064L19.0664 29.9668C17.7134 31.3199 16.9405 33.1665 16.9404 35.0996C16.9404 43.1632 26.3746 47.5761 32.5605 42.3838L34.6406 40.6436L34.6582 40.6289L34.6738 40.6133C36.0544 39.2329 37.9249 38.5 39.9004 38.5H49.1602C51.38 38.5 53.5253 37.5616 55.0938 35.9932L60.9502 30.1357L60.9512 30.1367C62.3295 28.7799 63.0801 26.9299 63.0801 25V24.668Z"
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
  );
};

const svgClass = css({
  "--fancy-logo-gradient-start": "#15181C",
  "--fancy-logo-gradient-mid": "#2B313A",
  "--fancy-logo-gradient-end": "#6B727B",
  "--fancy-logo-middle-bg": "#fff",
  "--fancy-logo-outline-color": "#fff",

  shadow: "antimetal",
  borderRadius: "30px",
  width: "fit-content",
  flexShrink: 0,

  _dark: {
    "--fancy-logo-gradient-start": "#fff",
    "--fancy-logo-gradient-mid": "#DFE3E8",
    "--fancy-logo-gradient-end": "#A6ACB4",
    "--fancy-logo-middle-bg": "#15181C",
    "--fancy-logo-outline-color": "#000",
  },
});
