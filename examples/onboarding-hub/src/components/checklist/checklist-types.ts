import { ComponentProps, StateMemory } from "@flows/react";

export type ChecklistProps = ComponentProps<{
  title: string;
  description: string;
  items: ChecklistItemProps[];

  complete: () => void;
  close: () => void;
}>;

export type ChecklistItemProps = ItemActionProps & {
  title: string;
  description: string;
};

export type ItemActionProps = {
  buttonLabel: string;
  buttonOnClick?: () => void;
  buttonUrl?: string;
  buttonVariant: "default" | "outline";
  completed: StateMemory;
};
