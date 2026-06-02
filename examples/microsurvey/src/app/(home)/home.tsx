import { cn } from "@/lib/utils";

const StatCard = ({
  label,
  value,
  trend,
  positive,
}: {
  label: string;
  value: string;
  trend: string;
  positive: boolean;
}) => (
  <div className="flex flex-col gap-1 rounded-lg border bg-white p-4 dark:bg-neutral-900">
    <p className="text-xs text-neutral-500">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
    <p className={cn("text-xs font-medium", positive ? "text-emerald-600" : "text-red-500")}>{trend}</p>
  </div>
);

const chartBars = [40, 55, 35, 65, 72, 58, 80, 92, 68, 75, 88, 95];

const tableRows: [number, number][] = [
  [120, 82],
  [100, 64],
  [88, 72],
  [72, 48],
  [64, 56],
];

export const Home = () => {
  return (
    <div className="flex flex-1 flex-col overflow-auto rounded-lg border bg-white dark:bg-neutral-900">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div>
          <p className="text-base font-semibold">Q4 Performance Report</p>
          <p className="text-xs text-neutral-500">Oct 1 - Dec 31, 2024</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-7 w-20 rounded-md bg-neutral-100 dark:bg-neutral-800" />
          <div className="h-7 w-16 rounded-md bg-neutral-900 dark:bg-neutral-100" />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard label="Total Revenue" value="$142,850" trend="+12.4% vs last quarter" positive />
          <StatCard label="Active Users" value="24,310" trend="+8.1% vs last quarter" positive />
          <StatCard label="Sessions" value="98,742" trend="-2.3% vs last quarter" positive={false} />
          <StatCard label="Conversion Rate" value="4.7%" trend="+0.6pp vs last quarter" positive />
        </div>

        <div className="rounded-lg border p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium">Revenue over time</p>
            <div className="flex gap-2">
              <div className="h-2 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
              <div className="h-2 w-14 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            </div>
          </div>
          <div className="flex h-36 items-end gap-1">
            {chartBars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-neutral-200 dark:bg-neutral-700"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between">
            {["Oct", "Nov", "Dec"].map((m) => (
              <p key={m} className="text-xs text-neutral-400">
                {m}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-lg border">
          <div className="border-b px-3 py-2">
            <p className="text-sm font-medium">Top Segments</p>
          </div>
          {tableRows.map(([w, pct], i) => (
            <div key={i} className="flex items-center gap-3 border-b px-3 py-2.5 last:border-b-0">
              <div
                className="h-2.5 shrink-0 rounded-sm bg-neutral-300 dark:bg-neutral-700"
                style={{ width: w }}
              />
              <div className="flex flex-1 items-center gap-2">
                <div className="h-1.5 w-full max-w-[140px] rounded-full bg-neutral-200 dark:bg-neutral-800">
                  <div
                    className="h-full rounded-full bg-neutral-400 dark:bg-neutral-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
              <div className="h-2 w-8 rounded-sm bg-neutral-200 dark:bg-neutral-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
