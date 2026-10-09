import type { JSX } from "react";

export function Refiner20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
        d="M1.63 8.8V1.3C1.63.6 2.2.04 2.9.04h15.73c.7 0 1.27.58 1.27 1.28v15.72c0 .7-.57 1.28-1.27 1.28h-7.48a.64.64 0 0 1-.64-.64v-5.9c0-1.3-1.04-2.33-2.34-2.33h-5.9a.64.64 0 0 1-.64-.64"
        fill="#0138FF"
      />
      <path
        d="M7.86 19.95H1.28c-.7 0-1.28-.58-1.28-1.28v-6.58c0-.7.57-1.28 1.28-1.28h6.58c.7 0 1.28.57 1.28 1.28v6.58c0 .7-.58 1.28-1.28 1.28"
        fill="#5A7FFF"
      />
    </svg>
  );
}
