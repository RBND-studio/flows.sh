import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const stats = [
  { label: "Monthly Visitors", value: "124,389", change: "+12.4%" },
  { label: "Conversion Rate", value: "3.7%", change: "+0.3%" },
  { label: "Avg. Session", value: "4m 21s", change: "-0.8%" },
  { label: "Revenue", value: "$48,210", change: "+8.1%" },
];

export function Home() {
  return (
    <div className="h-full [--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex h-full flex-col">
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <p id="dashboard-title" className="text-lg font-bold">
                  Overview
                </p>
                <Button id="create-report-button" size="sm">
                  Create report
                </Button>
              </div>

              <div id="stats-row" className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border bg-card p-4 shadow-sm"
                  >
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
                    <p
                      className={`mt-0.5 text-xs font-medium ${stat.change.startsWith("+") ? "text-green-600 dark:text-green-400" : "text-red-500"}`}
                    >
                      {stat.change} vs last month
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid flex-1 gap-3 md:grid-cols-3">
                <div
                  id="main-chart"
                  className="col-span-2 flex min-h-48 flex-col gap-2 rounded-xl border bg-card p-4 shadow-sm"
                >
                  <p className="text-sm font-medium">Visitors over time</p>
                  <div className="flex flex-1 items-end gap-1">
                    {[40, 55, 48, 72, 60, 85, 78, 95, 88, 110, 102, 124].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-primary/20 dark:bg-primary/30"
                        style={{ height: `${(h / 130) * 100}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Jan</span>
                    <span>Jun</span>
                    <span>Dec</span>
                  </div>
                </div>

                <div
                  id="top-pages"
                  className="flex flex-col gap-2 rounded-xl border bg-card p-4 shadow-sm"
                >
                  <p className="text-sm font-medium">Top pages</p>
                  <ul className="flex flex-col gap-2">
                    {[
                      { path: "/dashboard", views: "32,104" },
                      { path: "/pricing", views: "18,890" },
                      { path: "/docs", views: "14,230" },
                      { path: "/blog", views: "9,441" },
                      { path: "/signup", views: "7,802" },
                    ].map((page) => (
                      <li key={page.path} className="flex items-center justify-between text-sm">
                        <span className="truncate text-muted-foreground">{page.path}</span>
                        <span className="ml-2 shrink-0 font-medium">{page.views}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
