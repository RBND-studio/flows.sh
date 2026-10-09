import type { JSX } from "react";

export function Hint16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M6.92 6.09a.75.75 0 1 1-1.34-.67c.17-.34.43-.7.85-.98Q7.06 4 8 4q.9 0 1.64.53c.5.37.86.96.86 1.72a2 2 0 0 1-1.02 1.81l-.31.2h-.01l-.26.16q-.15.1-.28.25a.75.75 0 0 1-1.24-.84q.28-.4.69-.66l.31-.2.27-.16q.16-.09.27-.24Q9 6.5 9 6.25a.6.6 0 0 0-.26-.53A1.3 1.3 0 0 0 8 5.5q-.54.02-.74.19-.22.15-.34.4M9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </svg>
  );
}
