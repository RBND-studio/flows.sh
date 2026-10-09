import type { JSX } from "react";

export function Astro16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5.73 13.28c-.7-.64-.9-1.98-.61-2.96.5.62 1.2.81 1.92.92 1.12.17 2.21.1 3.25-.4l.36-.22q.14.42.09.86-.15 1.05-1 1.67-.34.25-.69.47c-.7.48-.9 1.05-.63 1.87l.02.09q-.53-.25-.82-.71a2 2 0 0 1-.32-1.09q0-.3-.03-.57-.08-.68-.68-.68a.8.8 0 0 0-.84.65z" />
      <path d="M1.75 10.16s2.06-1 4.13-1L7.44 4.3c.06-.24.23-.4.43-.4s.36.16.42.4l1.56 4.84c2.45 0 4.13 1.01 4.13 1.01L10.47.56q-.15-.45-.5-.47h-4.2q-.36.02-.5.47z" />
    </svg>
  );
}
