import type { JSX } from "react";

export function BootstrapTour20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
        xmlns="http://www.w3.org/2000/svg"
        d="M15.85 2a2 2 0 0 1 1.94 2.08 11 11 0 0 0 .36 3.5c.34 1.1.91 1.8 1.85 1.88v1.02c-.94.09-1.51.78-1.85 1.89a11 11 0 0 0-.36 3.48 2 2 0 0 1-1.94 2.09H4.15a2 2 0 0 1-1.94-2.09 11 11 0 0 0-.35-3.48c-.34-1.1-.92-1.8-1.86-1.9v-1c.94-.1 1.52-.8 1.86-1.9s.38-2.45.35-3.49A2 2 0 0 1 4.15 2zM6.93 5.7v8.52h3.5q1.41 0 2.19-.64t.8-1.77c0-1.13-.8-1.96-1.98-2.1a1.9 1.9 0 0 0 1.55-1.87q-.02-.98-.7-1.55a3 3 0 0 0-1.87-.58zm3.15 4.66q.95 0 1.43.35.49.33.49 1.02t-.47 1.03-1.37.35H8.32v-2.75zm.01-3.54q.73 0 1.12.31.38.3.39.9 0 .62-.46.95t-1.33.34H8.3v-2.5z"
        fill="url(#paint0_linear_5275_5172)"
      />
      <defs xmlns="http://www.w3.org/2000/svg">
        <linearGradient
          id="paint0_linear_5275_5172"
          x1="2.97184"
          y1="2.4218"
          x2="20.4484"
          y2="16.2947"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9013FE" />
          <stop offset="1" stopColor="#6610F2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
