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
          <path
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="black"
          />
        </mask>
        <g mask="url(#mask0_2187_5740)">
          <path
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="black"
          />
          <path
            d="M26.5788 28.0035L12.2915 9.59998H9.59961V22.3946H11.7531V12.3348L24.8883 29.3058C25.481 28.9091 26.0457 28.4738 26.5788 28.0035Z"
            fill="url(#paint0_linear_2187_5740)"
          />
          <path
            d="M22.5777 9.59998H20.4443V22.4H22.5777V9.59998Z"
            fill="url(#paint1_linear_2187_5740)"
          />
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
