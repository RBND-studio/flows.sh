import type { JSX } from "react";

export function Lock16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M8.75 11.05a1.5 1.5 0 1 0-1.5 0v.45a.75.75 0 1 0 1.5 0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 5.1v-.35a3.75 3.75 0 0 1 7.5 0v.34A3 3 0 0 1 14 8v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 2.25-2.9m1.5-.35a2.25 2.25 0 1 1 4.5 0V5h-4.5zM3.5 8A1.5 1.5 0 0 1 5 6.5h6A1.5 1.5 0 0 1 12.5 8v4a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12z"
      />
    </svg>
  );
}
