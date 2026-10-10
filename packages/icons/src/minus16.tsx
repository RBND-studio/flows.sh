import type { JSX } from "react";

export function Minus16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 8c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 8"
      />
    </svg>
  );
}
