import type { JSX } from "react";

export function Boolean16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M8.12 10.12a3 3 0 1 1-4.24-4.24 3 3 0 0 1 4.24 4.24" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.11 4.11A5.5 5.5 0 0 1 6 2.5h4a5.5 5.5 0 0 1 0 11H6a5.5 5.5 0 0 1-3.89-9.39m1.06 1.06A4 4 0 0 0 6 12h4a4 4 0 1 0 0-8H6a4 4 0 0 0-2.83 1.17"
      />
    </svg>
  );
}
