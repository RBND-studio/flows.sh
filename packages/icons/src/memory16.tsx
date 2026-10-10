import { type FC } from "react";

export const Memory16: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" {...props}>
    <path d="M4.25 7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M4.5 2a2 2 0 0 0-2 2v.5l-.08.04A2.8 2.8 0 0 0 .75 7.07v4.18A2.75 2.75 0 0 0 3.5 14h9a2.75 2.75 0 0 0 2.75-2.75V7.07a2.8 2.8 0 0 0-1.67-2.53l-.08-.03V4a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2H7a2 2 0 0 0-2-2zM4 4a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 .5.5v.75c0 .41.34.75.75.75h3.5a.75.75 0 0 0 .75-.75V4a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v1c0 .3.18.57.46.69l.53.23c.46.2.76.65.76 1.15v4.18c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25V7.07c0-.5.3-.95.76-1.15l.54-.23A.8.8 0 0 0 4 5z"
      clipRule="evenodd"
    />
  </svg>
);
