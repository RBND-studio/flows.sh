import { Frame, MessageCircle, MousePointer2, Pen, Sparkles, Square, Text } from "lucide-react";
import { Button } from "./button";

export const FloatingBar = () => {
  return (
    <div className="absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-lg border bg-white p-2 shadow-md dark:bg-neutral-900">
      <Button size="icon" variant="ghost">
        <MousePointer2 size={16} />
      </Button>
      <Button size="icon" variant="ghost">
        <Frame size={16} />
      </Button>
      <Button size="icon" variant="ghost">
        <Square size={16} />
      </Button>
      <Button size="icon" variant="ghost">
        <Pen size={16} />
      </Button>
      <Button size="icon" variant="ghost">
        <Text size={16} />
      </Button>
      <Button size="icon" variant="ghost">
        <MessageCircle size={16} />
      </Button>
      <Button id="ai-feature" size="icon" variant="ghost">
        <Sparkles size={16} />
      </Button>
    </div>
  );
};
