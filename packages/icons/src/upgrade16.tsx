import type { JSX } from "react";

export function Upgrade16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.75 11.5a.75.75 0 0 1-1.5 0V6.31L6.03 7.53a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06L8.75 6.31z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
      />
    </svg>
  );
}
