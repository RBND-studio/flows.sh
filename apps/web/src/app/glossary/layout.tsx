import { CtaBanner } from "components/cta-banner";
import type { JSX, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function GlossaryLayout({ children }: Props): JSX.Element {
  return (
    <>
      {children}
      <CtaBanner
        title="Improve your product adoption today!"
        description="Product adoption, user onboarding, and anything in between. Flows has you covered."
      />
    </>
  );
}
