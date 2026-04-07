"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/expenses", label: "Expenses" },
  { href: "/goals", label: "Goals" },
  { href: "/insights", label: "Insights" },
  { href: "/history", label: "History" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 h-16 z-50 bg-[var(--surface-lowest)] backdrop-blur-[12px]">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-8">
        <Link href="/dashboard" className="text-2xl font-[var(--font-display)] font-bold tracking-tight text-[var(--primary)]">
          Aura
        </Link>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--on-surface-muted)] hover:text-[var(--primary)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--primary)] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
