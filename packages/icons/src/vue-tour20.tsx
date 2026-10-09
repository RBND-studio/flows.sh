import type { JSX } from "react";

export function VueTour20(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={20} width={20} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.31 1.56 10 5.53 7.69 1.56H0l10 17.19L20 1.56z" fill="#42B883" />
      <path d="M12.31 1.56 10 5.53 7.69 1.56H4l6 10.32 6-10.32z" fill="#35495E" />
    </svg>
  );
}
