import type { JSX } from "react";

export function Star16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
        d="M6.87 2.12c.46-.95 1.8-.95 2.26 0l1.39 2.91 3.2.43a1.25 1.25 0 0 1 .7 2.14l-2.35 2.22.6 3.18a1.25 1.25 0 0 1-1.83 1.32L8 12.78l-2.84 1.54c-.92.5-2.01-.29-1.82-1.32l.59-3.18L1.59 7.6c-.77-.72-.35-2 .7-2.14l3.2-.43zM8 3.24 6.78 5.8a1.3 1.3 0 0 1-.97.7L3 6.87l2.06 1.96c.3.3.44.72.37 1.13l-.52 2.8 2.5-1.36a1.3 1.3 0 0 1 1.19 0l2.5 1.35-.53-2.79a1.3 1.3 0 0 1 .37-1.13L13 6.87l-2.8-.37a1.3 1.3 0 0 1-.97-.7z"
      />
    </svg>
  );
}
