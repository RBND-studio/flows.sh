"use client";

import { resetAllWorkflowsProgress } from "@flows/react";
import { Button } from "../ui/button";
import { ModeToggle } from "./theme-toggle";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import Link from "next/link";
import { usePathname } from "next/navigation";

const options = [
  { value: "sidebar", label: "Sidebar", href: "/" },
  { value: "top-banner", label: "Top banner", href: "/top-banner" },
  { value: "floating", label: "Floating", href: "/floating" },
];

export const ExampleControls = () => {
  const pathName = usePathname();

  return (
    <div className="fixed bottom-3 left-0 right-0 flex gap-2 px-2 md:left-1/2 md:right-auto md:translate-x-[-50%]">
      <ToggleGroup
        value={options.find((option) => option.href === pathName)?.value}
        type="single"
        size="sm"
        className="overflow-hidden rounded-md border bg-card p-0.5"
      >
        {options.map((option) => (
          <ToggleGroupItem key={option.value} value={option.value} asChild>
            <Link href={option.href}>{option.label}</Link>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ModeToggle />
      <Button
        className="shadow-sm"
        onClick={() => resetAllWorkflowsProgress()}
        variant="outline"
        size="sm"
      >
        Reset demo
      </Button>
    </div>
  );
};
