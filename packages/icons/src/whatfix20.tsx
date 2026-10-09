import type { JSX } from "react";

export function WhatFix20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="m16.26 2-5.38 12.47h-.1l-.57-5.13-2.8 6.34.2 1.5h5.68L20 2z" fill="#F05B22" />
      <path
        d="M9.7 2 4.34 14.47h-.1L3.66 9.3H0l1.05 7.86h5.7l.65-1.49-.85-6.37h3.65v.03L13.45 2z"
        fill="#F8A352"
      />
      <path d="M10.2 9.3H6.55l.85 6.38 2.8-6.34z" fill="#C43F27" />
    </svg>
  );
}
