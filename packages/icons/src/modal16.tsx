import type { JSX } from "react";

export function Modal16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M7.25 8.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5z" />
      <path d="M10.25 5.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 2A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7A2.5 2.5 0 0 1 2.5 2zm-11 1.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z"
      />
    </svg>
  );
}
