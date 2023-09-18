import type { Metadata } from "next";
import { Button } from "ui";

export const metadata: Metadata = {
  alternates: { canonical: "https://flows.sh" },
};

export default function Page(): JSX.Element {
  return <Button>Click me</Button>;
}
