import { BlockState, ComponentProps } from "@flows/react";
import { ChecklistProps } from "./checklist/checklist-types";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { Progress } from "./ui/progress";
import { useEmbedParam } from "./providers/example-info";

type Props = ComponentProps<{
  gettingStartedState: BlockState<ChecklistProps>;
  title: string;
}>;

// Sidebar widget that display the progress of the getting started checklist. The progress is loaded using a BlockState that is pointed to the checklist block.
export const SidebarWidget = ({ gettingStartedState, title }: Props) => {
  const embed = useEmbedParam();
  const totalItems = gettingStartedState?.items?.length || 0;
  const completedItems =
    gettingStartedState?.items?.filter((item) => item.completed.value === true).length || 0;
  return (
    <Link
      href={routes.gettingStarted(embed)}
      className="flex flex-col gap-1 rounded-md border border-blue-500 bg-background px-1.5 pb-2.5 pt-1.5 transition-all hover:border-blue-300 hover:shadow-sm dark:border-blue-400 dark:hover:border-blue-500"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground">
          {completedItems} / {totalItems}
        </p>
      </div>
      <Progress value={totalItems > 0 ? (completedItems / totalItems) * 100 : 0} className="h-2" />
    </Link>
  );
};
