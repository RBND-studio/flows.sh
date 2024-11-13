import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function BlogLayout({ children }: Props): JSX.Element {
  return <>{children}</>;
}
