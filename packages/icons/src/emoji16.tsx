import type { JSX } from "react";

export function Emoji16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M9.5 5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5A.75.75 0 0 0 9.5 5" />
      <path d="M5.75 5.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0z" />
      <path d="M9.52 9.98A2.5 2.5 0 0 1 5.6 8.65a.75.75 0 0 0-1.45.39 4 4 0 0 0 7.72 0 .75.75 0 0 0-1.45-.4q-.22.82-.89 1.34" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
      />
    </svg>
  );
}
