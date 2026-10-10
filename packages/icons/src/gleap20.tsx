// cSpell:words gleap

import type { JSX } from "react";

export function Gleap20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M19.5 10c.28 0 .51.22.5.5A10 10 0 1 1 9.5 0c.28-.01.5.22.5.5v1.18c0 .28-.22.5-.5.53a7.8 7.8 0 1 0 8.3 8.3.53.53 0 0 1 .52-.52z" />
      <path d="M8.76 8.62a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path d="M12.26 8.13c0-.28.23-.5.5-.5H16a.5.5 0 0 1 .51.5v.98a.5.5 0 0 1-.5.51h-3.24a.5.5 0 0 1-.51-.5z" />
    </svg>
  );
}
