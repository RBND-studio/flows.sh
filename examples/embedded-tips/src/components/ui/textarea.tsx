import * as React from "react";

import { cn } from "@/lib/utils";

type Props = {
  slot?: React.ReactNode;
  className?: string;
  id?: string;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(function Textarea(
  { slot, id, className, ...props },
  ref,
) {
  return (
    <div className="relative">
      <textarea
        rows={5}
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        id={id}
        ref={ref}
        {...props}
      />
      {slot}
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
