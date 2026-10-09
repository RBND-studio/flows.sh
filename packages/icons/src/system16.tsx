import type { JSX } from "react";

export function System16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 4.25A2.75 2.75 0 0 1 4.25 1.5h7.5a2.75 2.75 0 0 1 2.75 2.75v4.5a2.75 2.75 0 0 1-2.75 2.75H10.5V13h.75a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 1 1 0-1.5h.75v-1.5H4.25A2.75 2.75 0 0 1 1.5 8.75zM7 11.5h2V13H7zM4.25 3C3.56 3 3 3.56 3 4.25V7.5h10V4.25C13 3.56 12.44 3 11.75 3zm8.73 6c-.12.57-.62 1-1.23 1h-7.5a1.25 1.25 0 0 1-1.23-1z"
      />
    </svg>
  );
}
