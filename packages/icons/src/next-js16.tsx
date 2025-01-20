import type { JSX } from "react";

export function NextJS16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_3790_11477)">
        <mask
          id="mask0_3790_11477"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="16"
        >
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_3790_11477)">
          <mask
            id="mask1_3790_11477"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <path
              d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
              fill="black"
            />
          </mask>
          <g mask="url(#mask1_3790_11477)">
            <path
              d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
              fill="black"
            />
            <path
              d="M13.2884 14.0006L6.14477 4.79883H4.79883V11.1961H5.87557V6.16624L12.4432 14.6517C12.7395 14.4534 13.0219 14.2357 13.2884 14.0006Z"
              fill="url(#paint0_linear_3790_11477)"
            />
            <path
              d="M11.2874 4.79883H10.2207V11.1988H11.2874V4.79883Z"
              fill="url(#paint1_linear_3790_11477)"
            />
          </g>
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_3790_11477"
          x1="9.68772"
          y1="10.3544"
          x2="12.8433"
          y2="14.2655"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3790_11477"
          x1="10.7541"
          y1="4.79883"
          x2="10.7362"
          y2="9.49884"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_3790_11477">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
