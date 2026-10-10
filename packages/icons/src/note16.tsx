import type { JSX } from "react";

export function Note16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M4.55 5.25a.7.7 0 0 1 .7-.7h5.5a.7.7 0 0 1 0 1.4h-5.5a.7.7 0 0 1-.7-.7" />
      <path d="M5 7.05a.7.7 0 0 0 0 1.4h2.25a.7.7 0 1 0 0-1.4z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 4.25A2.75 2.75 0 0 1 4.25 1.5h7.5a2.75 2.75 0 0 1 2.75 2.75v5.5q0 .31-.22.53l-4 4a.8.8 0 0 1-.53.22h-5.5a2.75 2.75 0 0 1-2.75-2.75zM4.25 3C3.56 3 3 3.56 3 4.25v7.5c0 .69.56 1.25 1.25 1.25H9v-2.25C9 9.78 9.78 9 10.75 9H13V4.25C13 3.56 12.44 3 11.75 3zm7.69 7.5h-1.19a.25.25 0 0 0-.25.25v1.19z"
      />
    </svg>
  );
}
