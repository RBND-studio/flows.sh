import type { JSX } from "react";

export function Wait16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M6 5.25a.75.75 0 0 1 .75.75v4a.75.75 0 1 1-1.5 0V6A.75.75 0 0 1 6 5.25" />
      <path d="M10.75 6a.75.75 0 1 0-1.5 0v4a.75.75 0 1 0 1.5 0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"
      />
    </svg>
  );
}
