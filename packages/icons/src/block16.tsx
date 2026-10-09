import type { JSX } from "react";

export function Block16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.6 1.36a.8.8 0 0 1 .8 0l5.24 3.25a.8.8 0 0 1 .35.76l.01.13V11a.8.8 0 0 1-.36.64L8.4 14.89a.8.8 0 0 1-.8 0l-5.24-3.25A.8.8 0 0 1 2 11V5.5l.01-.13a.8.8 0 0 1 .35-.76zm1.15 7.56L12.5 6.6v3.98L8.75 12.9zm-1.5 0L3.5 6.6v3.98l3.75 2.32zM4.18 5.25 8 7.62l3.82-2.37L8 2.88z"
      />
    </svg>
  );
}
