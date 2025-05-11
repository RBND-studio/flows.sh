import { CtaBanner } from "components/cta-banner";
import type { JSX, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function BlogLayout({ children }: Props): JSX.Element {
  return (
    <>
      {children}
      <CtaBanner title="Get started today!" />
    </>
  );
}
