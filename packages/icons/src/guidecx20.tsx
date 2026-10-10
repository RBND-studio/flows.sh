import type { JSX } from "react";

export function GuideCX20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M0 0v20h20V0zm16.61 7.73H9.82a2.27 2.27 0 0 0 0 4.53h3.77v.77c0 .41-.34.74-.75.74H9.82a3.78 3.78 0 0 1 0-7.55h6.8zm0-3.02H9.82a5.3 5.3 0 0 0 0 10.57h3.02a2.27 2.27 0 0 0 2.26-2.26v-2.27H9.82a.75.75 0 0 1 0-1.5h6.8v3.77c0 2.08-1.7 3.77-3.78 3.77H9.82a6.8 6.8 0 0 1 0-13.58h6.8z" />
    </svg>
  );
}
