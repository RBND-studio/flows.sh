import { cn } from "@/lib/utils";
import { CancelButton } from "./cancel-button";

const tabs = ["Overview", "Members", "Billing", "Settings"];

const usageItems = [
  { label: "Active users", used: 68, total: 100, unit: "seats" },
  { label: "Storage", used: 42, total: 50, unit: "GB" },
  { label: "API calls", used: 87, total: 100, unit: "k / month" },
];

export const Home = () => {
  return (
    <div className="flex flex-1 flex-col overflow-auto rounded-lg border bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-0.5 border-b px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={cn(
              "px-3 py-2.5 text-sm font-medium",
              tab === "Billing"
                ? "border-b-2 border-neutral-900 text-neutral-900 dark:border-white dark:text-white"
                : "text-neutral-500 dark:text-neutral-400",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6 p-6">
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Current plan</h2>
          <div className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-neutral-900 dark:text-white">
                  Pro Plan
                </span>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  Active
                </span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                $49 per month - next billing on Jun 15, 2026
              </p>
            </div>
            <div className="flex gap-2">
              <button className="self-start rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 sm:self-auto">
                Change plan
              </button>
              <CancelButton />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Usage</h2>
          <div className="flex flex-col gap-3 rounded-lg border p-4">
            {usageItems.map(({ label, used, total, unit }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">{label}</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {used} / {total} {unit}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      used / total > 0.8 ? "bg-amber-500" : "bg-neutral-900 dark:bg-white",
                    )}
                    style={{ width: `${(used / total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
