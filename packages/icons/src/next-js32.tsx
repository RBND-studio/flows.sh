import type { JSX } from "react";

export function NextJS32(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={32} width={32} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_2187_5740)">
        <mask
          id="mask0_2187_5740"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <path d="M16 32a16 16 0 1 0 0-32 16 16 0 0 0 0 32" fill="black" />
        </mask>
        <g mask="url(#mask0_2187_5740)">
          <path d="M16 32a16 16 0 1 0 0-32 16 16 0 0 0 0 32" fill="black" />
          <path
            d="M26.58 28 12.29 9.6H9.6v12.8h2.15V12.32L24.9 29.31q.9-.6 1.69-1.3"
            fill="url(#paint0_linear_2187_5740)"
          />
          <path d="M22.58 9.6h-2.14v12.8h2.14z" fill="url(#paint1_linear_2187_5740)" />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2187_5740"
          x1="19.3774"
          y1="20.7111"
          x2="25.6885"
          y2="28.5333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2187_5740"
          x1="21.511"
          y1="9.59998"
          x2="21.4753"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_2187_5740">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
