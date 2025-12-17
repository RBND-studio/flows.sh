import { ArrowUpRight, Figma, PlayIcon, Presentation, X } from "lucide-react";
import { Button } from "./ui/button";
import { ComponentProps } from "@flows/react";
import { toast } from "sonner";

type Props = ComponentProps<{
  title: string;
  learnLink: string;

  triggerTour: () => void;
  pluginLink: string;

  close: () => void;
}>;

export const GettingStarted = (props: Props) => {
  return (
    <div className="mb-12">
      <div className="mb-5 flex justify-between">
        <h2 className="text-lg font-bold">{props.title}</h2>
        <div className="flex gap-2">
          <Button size="xs" variant="ghost" className="gap-1 text-muted-foreground" asChild>
            <a href={props.learnLink} target="_blank" rel="noreferrer">
              Learn <ArrowUpRight size={12} />
            </a>
          </Button>
          <Button
            size="smIcon"
            variant="ghost"
            className="gap-1 text-muted-foreground"
            onClick={props.close}
          >
            <X size={16} />
          </Button>
        </div>
      </div>
      <div className="flex h-[220px] gap-4 text-white">
        <button
          className="relative h-full flex-[2] rounded-lg bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 text-left transition-transform duration-200 hover:scale-[1.02]"
          onClick={() => toast.success("That’s not a bug, it’s an interactive disappointment.")}
        >
          <div className="absolute bottom-0 flex w-full items-center justify-between p-3">
            <p className="font-semibold">How to create an Issue</p>
            <div className="w-fit rounded-md bg-[rgba(0,0,0,0.05)] px-1 py-0.5">
              <p className="text-sm font-semibold">17:30</p>
            </div>
          </div>
        </button>
        <button
          className="relative hidden h-full flex-1 rounded-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 text-left transition-transform duration-200 hover:scale-[1.02] md:block"
          onClick={() => toast.warning("You found our most useless button. Congratulations.")}
        >
          <div className="absolute bottom-0 z-10 w-full p-3">
            <p className="font-semibold">All Videos</p>
            <p className="text-xs">40+ Lessons</p>
          </div>
          <VideosBg />
        </button>
        <div className="relative flex h-full flex-1 flex-col gap-4">
          <button
            className="relative h-full flex-1 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 text-left transition-transform duration-200 hover:scale-[1.02]"
            onClick={props.triggerTour}
          >
            <div className="mb-1 inline-block rounded-md bg-white/30 p-1.5">
              <Presentation size={16} />
            </div>
            <p className="text-sm font-semibold">App Tour</p>
            <p className="text-xs">Interactive Tutorial</p>
          </button>
          <a
            href={props.pluginLink}
            target="_blank"
            rel="noreferrer"
            className="relative h-full flex-1 cursor-pointer rounded-lg bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 p-3 text-left transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="mb-1 inline-block rounded-md bg-white/30 p-1.5">
              <Figma size={16} />
            </div>
            <p className="text-sm font-semibold">Figma Plugin</p>
            <p className="text-xs">Copy Paste Designs</p>
          </a>
        </div>
      </div>
    </div>
  );
};

const VideosBg = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center gap-2 overflow-hidden opacity-20 dark:opacity-40">
      <div className="flex gap-2">
        <div className="h-[48px] w-[80px] rounded-lg bg-neutral-900" />
        <div className="h-[48px] w-[80px] rounded-lg bg-neutral-900" />
        <div className="h-[48px] w-[80px] rounded-lg bg-neutral-900" />
        <div className="h-[48px] w-[80px] rounded-lg bg-neutral-900" />
      </div>
      <div className="flex gap-2">
        <div className="h-[48px] w-[80px] rounded-lg bg-neutral-900" />
        <div className="h-[48px] w-[80px] rounded-lg bg-neutral-900" />
        <div className="flex h-[48px] w-[80px] items-center justify-center rounded-lg bg-neutral-900">
          <PlayIcon size={24} />
        </div>
        <div className="h-[48px] w-[80px] rounded-lg bg-neutral-900" />
        <div className="h-[48px] w-[80px] rounded-lg bg-neutral-900" />
      </div>
      <div className="flex gap-2">
        <div className="h-[48px] w-[80px] rounded-lg bg-neutral-900" />
        <div className="h-[48px] w-[80px] rounded-lg bg-neutral-900" />
        <div className="h-[48px] w-[80px] rounded-lg bg-neutral-900" />
        <div className="h-[48px] w-[80px] rounded-lg bg-neutral-900" />
      </div>
    </div>
  );
};
