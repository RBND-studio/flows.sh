import type { JSX } from "react";

export function Tooltip16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        d="m9.36 12-.17.01a1 1 0 0 0-.47.22l-3.09 2.54A1 1 0 0 1 4 13.99V12h-.5A2.5 2.5 0 0 1 1 9.5v-6A2.5 2.5 0 0 1 3.5 1h9A2.5 2.5 0 0 1 15 3.5v6a2.5 2.5 0 0 1-2.5 2.5zM4 10.5h-.5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9.36c-.58 0-1.14.2-1.59.57L5.5 12.93V12c0-.83-.67-1.5-1.5-1.5"
      />
    </svg>
  );
}
