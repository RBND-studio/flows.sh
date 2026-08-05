import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Active projects", value: "12" },
  { label: "Tasks due today", value: "5" },
  { label: "Team members", value: "8" },
  { label: "Completed this week", value: "27" },
];

const tasks = [
  { title: "Finalize Q3 roadmap", assignee: "AM", status: "In progress" },
  { title: "Design onboarding flow", assignee: "JD", status: "In review" },
  { title: "Migrate billing service", assignee: "KP", status: "Todo" },
  { title: "Write release notes", assignee: "RS", status: "In progress" },
  { title: "Fix dashboard filters", assignee: "TL", status: "Done" },
];

const statusStyles: Record<string, string> = {
  Todo: "bg-muted text-muted-foreground",
  "In progress": "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  "In review": "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  Done: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
};

const Avatar = ({ initials, className }: { initials: string; className?: string }) => (
  <div
    className={cn(
      "flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground",
      className,
    )}
  >
    {initials}
  </div>
);

export const Home = () => {
  return (
    <div className="flex h-full w-full flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b bg-background px-6 py-3">
        <div className="flex items-center gap-6">
          <span className="text-lg font-bold">Tasker</span>
          <nav className="hidden items-center gap-4 text-sm text-muted-foreground md:flex">
            <span className="font-medium text-foreground">Dashboard</span>
            <span>Projects</span>
            <span>Team</span>
            <span>Reports</span>
          </nav>
        </div>
        <Avatar initials="YO" className="bg-primary text-primary-foreground" />
      </header>

      {/* Content */}
      <main className="flex-1 overflow-auto px-6 py-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Good morning</h1>
              <p className="text-sm text-muted-foreground">
                Here is what is happening across your workspace today.
              </p>
            </div>
            <Button>New project</Button>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border bg-muted/50 p-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Task list */}
          <div className="rounded-xl border bg-background">
            <div className="border-b px-4 py-3">
              <h2 className="font-semibold">My tasks</h2>
            </div>
            <ul>
              {tasks.map((task, index) => (
                <li
                  key={task.title}
                  className={cn(
                    "flex items-center justify-between gap-4 px-4 py-3",
                    index !== tasks.length - 1 && "border-b",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Avatar initials={task.assignee} />
                    <span className="text-sm font-medium">{task.title}</span>
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium",
                      statusStyles[task.status],
                    )}
                  >
                    {task.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
