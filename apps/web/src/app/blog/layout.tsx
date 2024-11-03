import { Section } from "components/ui/section";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function BlogLayout({ children }: Props): JSX.Element {
  return (
    <Section maxWidth="720px!" marginX="auto">
      {children}
    </Section>
  );
}
