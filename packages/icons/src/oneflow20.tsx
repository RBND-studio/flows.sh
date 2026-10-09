// cspell:words oneflow

import type { JSX } from "react";

export function OneFlow20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M9.98 19.21a9.23 9.23 0 1 0 0-18.46 9.23 9.23 0 0 0 0 18.46"
        fill="white"
        stroke="#2D4EFF"
        strokeWidth="1.50943"
      />
      <path
        d="M6.56 8.64c-.79 0-1.43.64-1.43 1.42v4.57a1.43 1.43 0 0 0 2.85 0v-4.57c0-.78-.63-1.42-1.42-1.42"
        fill="#5D5FEF"
      />
      <path
        d="M9.98 6.36c-.79 0-1.43.64-1.43 1.42v6.85a1.43 1.43 0 0 0 2.85 0V7.78c0-.78-.63-1.42-1.42-1.42"
        fill="#EF5DA8"
      />
      <path
        d="M13.4 4.08c-.78 0-1.42.63-1.42 1.42v9.13a1.43 1.43 0 0 0 2.85 0V5.5c0-.79-.64-1.42-1.43-1.42"
        fill="#F9D206"
      />
    </svg>
  );
}
