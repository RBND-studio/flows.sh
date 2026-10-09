import type { JSX } from "react";

export function HelpHero20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M17.43-.31c.75 0 1.36.6 1.36 1.36v17.28a1.36 1.36 0 0 1-2.72 0V12.1H1l5.28-5.24L1 1.63h15.07v-.58c0-.75.6-1.36 1.36-1.36"
        fill="#1976D2"
      />
    </svg>
  );
}
