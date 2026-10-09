import type { JSX } from "react";

export function Pointer16(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.07 3.83a.16.16 0 0 0-.22.18l1.96 9.13q.01.08.05.09.03.03.09.04.06 0 .1-.02l.06-.07 2.07-4.23 4.52-1.3.09-.05.03-.1q0-.06-.02-.1l-.08-.06zl.27-.66Zm.57-1.39 8.64 3.51c1.47.6 1.36 2.7-.16 3.14l-3.89 1.12-1.77 3.63a1.66 1.66 0 0 1-3.12-.38L2.38 4.33a1.66 1.66 0 0 1 2.26-1.89"
      />
    </svg>
  );
}
