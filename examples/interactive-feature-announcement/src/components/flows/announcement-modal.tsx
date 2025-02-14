"use client";

import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { SkeletonIllustration } from "../ui/skeleton-illustration";
import { Button } from "../ui/button";
import { Computer, Moon, Sun } from "lucide-react";

type Props = {
  apply: () => void;
};

export const AnnouncementModal = ({ apply }: Props) => {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div className="fixed inset-0 bg-neutral-900/50 dark:bg-neutral-950/80">
      <div className="fixed inset-0 z-10 grid place-items-center overflow-auto p-4">
        <div className="max-w-[480px] rounded-md border bg-card p-4 shadow-lg">
          <SkeletonIllustration />
          <ToggleGroup
            type="single"
            variant="outline"
            onValueChange={handleThemeChange}
            value={theme}
            className="mx-auto mt-4 max-w-[380px] flex-col sm:flex-row"
          >
            <ToggleGroupItem className="w-full" value="light">
              <Sun />
              Light
            </ToggleGroupItem>
            <ToggleGroupItem className="w-full" value="dark">
              <Moon />
              Dark
            </ToggleGroupItem>
            <ToggleGroupItem className="w-full" value="system">
              <Computer />
              System
            </ToggleGroupItem>
          </ToggleGroup>
          <p className="mb-1 mt-4 text-center text-lg font-bold">Dark mode is here!</p>
          <p className="text-center text-muted-foreground">
            You can now switch to dark mode, keep light mode, or let the app change based on your
            system settings.
          </p>
          <div className="mb-2 mt-4 flex justify-center">
            <Button onClick={apply}>Apply theme</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
