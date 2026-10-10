import type { JSX } from "react";

export function Banner16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.25 7a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5z" />
      <path d="M10.25 4a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 0A2.5 2.5 0 0 1 14 2.5v11l-.01.26A2.5 2.5 0 0 1 11.5 16h-7l-.26-.01A2.5 2.5 0 0 1 2 13.5v-11C2 1.2 2.98.14 4.24.01L4.5 0zm-7 1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1z"
      />
    </svg>
  );
}
