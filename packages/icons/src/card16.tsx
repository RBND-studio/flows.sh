import type { JSX } from "react";

export function Card16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.25 8.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5z" />
      <path d="M10.25 5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 2A2.5 2.5 0 0 1 15 4.5v7a2.5 2.5 0 0 1-2.24 2.49l-.26.01h-9l-.26-.01A2.5 2.5 0 0 1 1 11.5v-7A2.5 2.5 0 0 1 3.5 2zm-9 1.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z"
      />
    </svg>
  );
}
