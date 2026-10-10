"use client";

import type { JSX, SVGProps } from "react";
import { createContext, use } from "react";

type Props = {
  title: string;
  exampleUrl: string;
  repoUrl: string;

  children?: React.ReactNode;
};

const ExampleContext = createContext<boolean>(false);

export const useEmbedParam = (): boolean => {
  const exampleContext = use(ExampleContext);
  return !exampleContext;
};

// Internal component to show example info header and wrapper
export const ExampleInfo = ({ title, exampleUrl, repoUrl, children }: Props) => {
  return (
    <ExampleContext.Provider value={true}>
      <div className="flex items-center justify-between gap-2 px-6 py-4 sm:px-10">
        <div className="flex items-center gap-2">
          <a href="https://flows.sh/" target="_blank" rel="noopener" aria-label="Flows logo">
            <Logo className="h-5" />
          </a>
          <div className="hidden h-4 w-[1px] bg-muted-foreground sm:block" />
          <h1 className="hidden text-sm sm:block">{title}</h1>
        </div>
        <div className="flex gap-1">
          <Button label="Learn more" link={exampleUrl} />
          <Button label="View source" link={repoUrl} />
        </div>
      </div>
      <div className="h-[calc(100vh-62px)] px-6 pb-6 sm:px-10 sm:pb-10">
        <div className="relative h-full overflow-auto rounded-md border">{children}</div>
      </div>
    </ExampleContext.Provider>
  );
};

const Button = ({ label, link }: { label: string; link: string }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-nowrap rounded-md border border-input bg-background px-2 py-1 text-sm font-semibold shadow-sm hover:bg-accent hover:text-accent-foreground"
  >
    {label}
  </a>
);

const Logo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 30" fill="currentColor" {...props}>
    <path d="M.5.48V29.5h7.67V18.8h9.53v-7.04H8.17V7.53h12.2V.48z" />
    <path d="M124.78 29.45q1.95.55 3.98.55h.03q3.4 0 5.84-1.04a8 8 0 0 0 3.75-3.02 8.6 8.6 0 0 0 1.3-4.85q0-3.1-1.86-5.53a9 9 0 0 0-5.18-3.25l-4.38-1.12a4 4 0 0 1-1.78-.84 1.7 1.7 0 0 1-.63-1.32q0-1.2.76-1.83a3.4 3.4 0 0 1 2.18-.62q1.45 0 2.3.83.85.82 1.05 1.66l7.58-2.2a12 12 0 0 0-2.5-3.95A9 9 0 0 0 133.6.7q-2.09-.7-4.84-.71-5.13 0-7.98 2.38-2.82 2.39-2.83 6.65 0 2.17.85 3.9a8 8 0 0 0 2.45 2.94q1.6 1.2 3.83 1.78l4.36 1.12q1.12.29 1.64.94t.51 1.34q0 1.1-.9 1.75a3 3 0 0 1-2.05.62 3.9 3.9 0 0 1-3.64-2.57l-7.64 2.1q.21 1.41 1.25 2.68 1.02 1.27 2.62 2.26 1.6 1 3.54 1.56" />
    <path d="M105.04 17.24 109.52.48h7.84l-8.34 29.04h-7.97l-4.32-17.15-4.31 17.15h-7.96L81.5 19.24q.48-2 .49-4.2c0-3.3-.76-6.27-2.27-8.82a15 15 0 0 0-3-3.72L76.15.48h7.84l4.6 17.22L92.93.48h7.63z" />
    <path d="M39.5 22.45q.29.71.67 1.37a16 16 0 0 0 2.2 2.86v2.82h-19.6V.48h7.66v21.97z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M72.56 1.94a14 14 0 0 1 5.46 5.3A15 15 0 0 1 80 15.01q0 4.38-1.96 7.75a14 14 0 0 1-5.44 5.29A16.4 16.4 0 0 1 65 30h-9c-3.06 0-6.2-.67-8.53-1.95a14 14 0 0 1-5.48-5.29A15 15 0 0 1 40 15.02q0-4.43 1.99-7.79a14 14 0 0 1 5.46-5.29C49.76.66 52.97 0 56 0h9c2.83.08 5.38.74 7.56 1.94m-5.19 15.88 2.93-2.93c.64-.63.99-1.49.99-2.39v-.16a4.5 4.5 0 0 0-7.5-3.25l-.93.83A4 4 0 0 1 60.08 11h-4.63c-1.05 0-2.07.49-2.81 1.23l-2.93 2.93a3.4 3.4 0 0 0-.99 2.39 4.5 4.5 0 0 0 7.4 3.45l1.04-.87A4 4 0 0 1 59.95 19h4.63c1.04 0 2.05-.44 2.79-1.18"
    />
  </svg>
);
