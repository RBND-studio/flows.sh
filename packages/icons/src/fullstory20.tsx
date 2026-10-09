// cspell:words fullstory

import type { JSX } from "react";

export function Fullstory20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
        d="M20 14.3v-1.65h-6.9l5.94-3.4.04-.03-.83-1.43-5.98 3.42 3.43-5.9.02-.03-1.42-.82h-.02l-3.45 5.92V3.54H9.17v6.85l-3.43-5.9-.02-.03-1.42.81-.02.01 3.44 5.94-5.93-3.4-.04-.03-.83 1.44 5.97 3.42H0v1.65h6.22a4 4 0 0 0 3.19-1.95q.42-.69.6-1.47c.06.3.22.88.59 1.47a4.1 4.1 0 0 0 3.19 1.95z"
      />
    </svg>
  );
}
