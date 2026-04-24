import type { JSX } from "react";

export function Sprig20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_5529_4097)" />
      <defs>
        <linearGradient
          id="paint0_linear_5529_4097"
          x1="11.7518"
          y1="20"
          x2="8.24824"
          y2="6.8397e-07"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7D7A8F" />
          <stop offset="0.5" stopColor="#EBA37E" />
          <stop offset="1" stopColor="#EFDCB6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
