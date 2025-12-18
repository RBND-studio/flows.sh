import { ComponentProps } from "@flows/react";
import Link from "next/link";
import { useEmbedParam } from "./providers/example-info";

type Props = ComponentProps<{
  title: string;
  description: string;

  href: string;

  continue: () => void;
}>;

export const NewFeatureCard = (props: Props) => {
  const embed = useEmbedParam();
  const updateHref = embed ? `/embed${props.href}` : props.href;

  return (
    <div className="background-gradient rounded-[9px] p-[1px] transition-all hover:scale-[1.02]">
      <Link
        href={updateHref}
        className="flex flex-row-reverse gap-0.5 rounded-lg border bg-white shadow-md transition-all hover:shadow-lg dark:bg-neutral-900 md:flex-col"
        onClick={() => props.continue()}
      >
        <Illustration />
        <div className="flex w-full flex-col justify-center gap-1 p-2">
          <p className="text-sm font-semibold">{props.title}</p>
          <p className="text-xs">{props.description}</p>
        </div>
      </Link>
    </div>
  );
};

const Illustration = () => {
  return (
    <div className="relative h-16 w-[140px] flex-shrink-0 overflow-hidden md:w-full">
      <div className="first-gradient absolute bottom-[7px] left-1/2 h-[48px] w-[48px] shrink-0 translate-x-[-50%] rounded-full" />
      <div className="absolute bottom-[8px] left-1/2 h-[46px] w-[46px] shrink-0 translate-x-[-50%] rounded-full bg-background" />
      <div className="absolute bottom-1 left-1/2 h-[80px] w-[80px] shrink-0 translate-x-[-50%] rounded-full border" />
      <div className="absolute bottom-0 left-1/2 h-[120px] w-[120px] shrink-0 translate-x-[-50%] rounded-full border" />
    </div>
  );
};
