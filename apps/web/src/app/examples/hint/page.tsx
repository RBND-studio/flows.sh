import { CtaBanner } from "components/cta-banner";
import { type Metadata } from "next";
import { type ReactNode } from "react";

import { Embed } from "../embed";
import { ExampleHeader } from "../example-header";
import { Readme } from "../readme";
import { content } from "./content";

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
};

export default function HintExamplePage(): ReactNode {
  return (
    <>
      <ExampleHeader title={content.title} description={content.description} />
      <Embed {...content.embed} />
      <Readme readme={content.readme} sidebar={content.sidebar} />
      <CtaBanner />
    </>
  );
}
