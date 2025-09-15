"use client";

import { useCopyButton } from "fumadocs-ui/utils/use-copy-button";
import { Check16, Copy16 } from "icons";
import { type FC, useState } from "react";
import { Button, toast } from "ui";

const cache = new Map<string, string>();

type Props = {
  markdownUrl: string;
};

export const CopyMarkdown: FC<Props> = ({ markdownUrl }) => {
  const [loading, setLoading] = useState(false);
  const [checked, onClick] = useCopyButton(async () => {
    const cached = cache.get(markdownUrl);
    if (cached) return navigator.clipboard.writeText(cached);

    setLoading(true);

    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/plain": fetch(markdownUrl).then(async (res) => {
            const content = await res.text();
            cache.set(markdownUrl, content);

            return content;
          }),
        }),
      ]);
    } catch {
      toast.error("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  });

  return (
    <Button
      variant="secondary"
      loading={loading}
      onClick={onClick}
      startIcon={checked ? <Check16 /> : <Copy16 />}
      borderRightRadius={0}
    >
      Copy page
    </Button>
  );
};
