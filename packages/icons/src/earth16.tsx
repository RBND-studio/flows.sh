import type { JSX } from "react";

export function Earth16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={16}
      viewBox="0 0 16 16"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7-5.5a5.5 5.5 0 0 0-4.74 2.7l2 2c.48.47.74 1.11.74 1.78v.52a.5.5 0 0 0 .5.5 2 2 0 0 1 2 2v1.48a5.5 5.5 0 0 0 4.52-3.23H12a.75.75 0 0 1-.75-.75V9a.75.75 0 0 0-.75-.75H8a1.75 1.75 0 0 1-1.07-3.14l.46-.36a.4.4 0 0 0 .16-.31V4.4c0-.89.61-1.63 1.44-1.81A6 6 0 0 0 8 2.5m2.88.81a1.9 1.9 0 0 1-1.48.73.35.35 0 0 0-.36.36v.04a1.9 1.9 0 0 1-.73 1.5l-.46.35a.26.26 0 0 0 .15.46h2.5a2.25 2.25 0 0 1 2.24 2h.7a5.5 5.5 0 0 0-2.56-5.44M2.5 8q0-.66.15-1.29L4.2 8.26q.3.3.3.72v.52a2 2 0 0 0 2 2 .5.5 0 0 1 .5.5v1.41A5.5 5.5 0 0 1 2.5 8"
      />
    </svg>
  );
}
