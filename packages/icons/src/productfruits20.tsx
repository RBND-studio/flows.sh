import type { JSX } from "react";

export function ProductFruits20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
        d="M15 0H5a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5"
        fill="#09051F"
      />
      <path
        d="M12.07 3.05a3.72 3.72 0 1 1 1.37 7.2 3.72 3.72 0 1 1-4.78 1.22 3.72 3.72 0 1 1 1.02-4.6 3.7 3.7 0 0 1 2.39-3.82"
        fill="#FF6800"
      />
      <path
        d="M12.26 7.54c.15-.05.3.1.25.25l-.2.7q-.13.5 0 1l.2.69a.2.2 0 0 1-.25.25l-.7-.2q-.5-.13-1 0l-.7.2a.2.2 0 0 1-.25-.25l.2-.7q.15-.5 0-1l-.2-.7a.2.2 0 0 1 .26-.24l.7.2q.5.13 1 0z"
        fill="white"
      />
    </svg>
  );
}
