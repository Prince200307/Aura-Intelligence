"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Receipt, Target, Lightbulb, Clock } from "lucide-react";

const tabs = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/expenses", label: "Expenses", icon: Receipt },
  { href: "/goals", label: "Goals", icon: Target },
  { href: "/insights", label: "Insights", icon: Lightbulb },
  { href: "/history", label: "History", icon: Clock },
];

export default function BottomTabBar() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 z-50 bg-[var(--surface-lowest)] backdrop-blur-[12px] pb-safe">
      <div className="flex items-center justify-around h-full px-4">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center justify-center gap-1 transition-transform ${
                isActive ? "text-[var(--primary)] scale-110" : "text-[var(--on-surface-muted)]"
              }`}
            >
              <Icon size={20} />
              <span className="text-[10px] uppercase tracking-widest font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
