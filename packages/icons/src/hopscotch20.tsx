import type { JSX } from "react";

export function Hopscotch20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M6.7.12H.13V6.7H6.7z" fill="#4A75FF" />
      <path d="M6.7 6.7H.13v6.6H6.7z" fill="#054CC0" />
      <path d="M13.3 6.7H6.7v6.6h6.6z" fill="#DAB9F0" />
      <path d="M19.88 6.7H13.3v6.6h6.6z" fill="#FEC305" />
      <path d="M19.88 13.3H13.3v6.58h6.6z" fill="#FEAAA0" />
      <path d="M19.88.12H13.3V6.7h6.6z" fill="#FF5635" />
      <path d="M6.7 13.3H.13v6.58H6.7z" fill="#26C467" />
    </svg>
  );
}
