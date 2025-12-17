"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useEmbedParam } from "./providers/example-info";

export const Navigation = () => {
  const embed = useEmbedParam();
  const homeUrl = embed ? "/?embed=true" : "/";
  const analyticsUrl = embed ? "/analytics?embed=true" : "/analytics";
  const expensesUrl = embed ? "/expenses?embed=true" : "/expenses";

  return (
    <nav className="py-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-semibold">Fin-app</p>
        </div>
        <div className="flex items-center gap-4">
          <NavItem href={homeUrl}>Apps</NavItem>
          <NavItem href={analyticsUrl}>Analytics</NavItem>
          <NavItem href={expensesUrl}>Expenses</NavItem>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, children }: { href: string; children: ReactNode }) => {
  const isActive = usePathname() === href;
  return (
    <Link
      href={href}
      className={`font-semibold ${isActive ? "text-primary" : "text-muted-foreground"}`}
    >
      {children}
    </Link>
  );
};
