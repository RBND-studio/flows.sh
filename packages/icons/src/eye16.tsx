import type { JSX } from "react";

export function Eye16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2a7.6 7.6 0 0 0-5.58 2.53A9 9 0 0 0 .65 7.27Q.52 7.63.5 8q.02.37.15.73.13.37.37.82c.32.58.79 1.27 1.4 1.92A7.6 7.6 0 0 0 8 14a7.6 7.6 0 0 0 5.58-2.53 9 9 0 0 0 1.77-2.74q.13-.36.15-.73-.02-.37-.15-.73-.16-.42-.37-.82a9 9 0 0 0-1.4-1.92A7.6 7.6 0 0 0 8 2M2 8l.06-.22q.13-.32.28-.61.49-.89 1.17-1.6A6 6 0 0 1 8 3.5c1.94 0 3.45.96 4.49 2.06a8 8 0 0 1 1.45 2.22L14 8l-.06.22q-.13.32-.28.61a8 8 0 0 1-1.17 1.6A6 6 0 0 1 8 12.5a6 6 0 0 1-4.49-2.06 8 8 0 0 1-1.44-2.21z"
      />
    </svg>
  );
}
