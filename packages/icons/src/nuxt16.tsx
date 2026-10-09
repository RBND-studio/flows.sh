import type { JSX } from "react";

export function Nuxt16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.98 13.33h5.94a1.1 1.1 0 0 0 .94-.53 1.1 1.1 0 0 0 0-1.07l-4-6.85a1.1 1.1 0 0 0-.93-.54 1.1 1.1 0 0 0-.93.54L8.98 6.63l-2-3.43a1.1 1.1 0 0 0-.93-.53 1.1 1.1 0 0 0-.93.53L.14 11.73a1.06 1.06 0 0 0 .4 1.46q.25.14.54.14H4.8q2.2 0 3.32-1.9l1.82-3.12.98-1.68 2.93 5.03h-3.9zm-4.23-1.67h-2.6l3.9-6.7L8 8.3l-1.3 2.24c-.5.81-1.07 1.1-1.95 1.1" />
    </svg>
  );
}
