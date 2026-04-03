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
        d="M9.3584 12L9.18652 12.0146C9.01735 12.0441 8.85781 12.1173 8.72363 12.2275L5.63477 14.7656C4.98223 15.302 4 14.8379 4 13.9932V12H3.5C2.11929 12 1 10.8807 1 9.5V3.5C1 2.11929 2.11929 1 3.5 1H12.5C13.8807 1 15 2.11929 15 3.5V9.5C15 10.8807 13.8807 12 12.5 12H9.3584ZM4 10.5H3.5C2.94772 10.5 2.5 10.0523 2.5 9.5V3.5C2.5 2.94772 2.94772 2.5 3.5 2.5H12.5C13.0523 2.5 13.5 2.94772 13.5 3.5V9.5C13.5 10.0523 13.0523 10.5 12.5 10.5H9.3584C8.77935 10.5 8.21783 10.7007 7.77051 11.0684L5.5 12.9346V12C5.5 11.1716 4.82843 10.5 4 10.5Z"
      />
    </svg>
  );
}
