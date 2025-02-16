"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const Navigation = () => {
  return (
    <nav className="py-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-semibold">Fin-app</p>
        </div>
        <div className="flex items-center gap-4">
          <NavItem href="/">Apps</NavItem>
          <NavItem href="/analytics">Analytics</NavItem>
          <NavItem href="/expenses">Expenses</NavItem>
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
