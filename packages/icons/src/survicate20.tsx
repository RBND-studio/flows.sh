import type { JSX } from "react";

export function Survicate20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M4.98 4.66V0A4.97 4.97 0 0 0 0 5a5 5 0 0 0 4.97 5h.01a4.97 4.97 0 0 0 4.97-5V0a4.97 4.97 0 0 0-4.97 4.66" />
      <path d="M14.92 10h4.99a5 5 0 0 0-4.64-5h4.64a5 5 0 0 0-4.97-5h-.01a4.97 4.97 0 0 0-4.97 5 5 5 0 0 0 4.96 5" />
      <path d="M4.99 10H0a5 5 0 0 0 4.64 5H0a5 5 0 0 0 4.97 5h.02a4.97 4.97 0 0 0 4.96-5A5 5 0 0 0 5 10" />
      <path d="M14.94 10a4.97 4.97 0 0 0-4.97 5v5a4.97 4.97 0 0 0 4.97-4.66V20a4.97 4.97 0 0 0 4.98-5 5 5 0 0 0-4.97-5" />
    </svg>
  );
}
