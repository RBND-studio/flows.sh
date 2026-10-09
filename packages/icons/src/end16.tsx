import type { JSX } from "react";

export function End16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M8.25 1c1.24 0 2.25 1 2.25 2.25a.75.75 0 0 1-1.5 0 .75.75 0 0 0-.75-.75h-3.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h3.5c.41 0 .75-.34.75-.75a.75.75 0 0 1 1.5 0c0 1.24-1 2.25-2.25 2.25h-3.5A2.75 2.75 0 0 1 2 12.25v-8.5A2.75 2.75 0 0 1 4.75 1z" />
      <path d="M5.75 8.75a.75.75 0 0 1 0-1.5h5.69l-.97-.97a.75.75 0 1 1 1.06-1.06l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97z" />
    </svg>
  );
}
