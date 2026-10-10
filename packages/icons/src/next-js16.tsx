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
          <path d="M16 0H0v16h16z" fill="white" />
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
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16" fill="black" />
          </mask>
          <g mask="url(#mask1_3790_11477)">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16" fill="black" />
            <path
              d="M13.29 14 6.14 4.8H4.8v6.4h1.08V6.17l6.56 8.48q.45-.3.85-.65"
              fill="url(#paint0_linear_3790_11477)"
            />
            <path d="M11.29 4.8h-1.07v6.4h1.07z" fill="url(#paint1_linear_3790_11477)" />
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
