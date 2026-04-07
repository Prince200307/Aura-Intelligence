import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "danger" | "warning" | "info" | "primary";
  size?: "sm" | "md";
}

export default function Badge({ children, variant = "default", size = "md" }: BadgeProps) {
  const variantClasses = {
    default: "bg-[var(--surface-low)] text-[var(--on-surface-muted)]",
    success: "bg-[var(--success-bg)] text-[var(--success)]",
    danger: "bg-[var(--danger-bg)] text-[var(--danger)]",
    warning: "bg-[var(--warning-bg)] text-[var(--warning)]",
    info: "bg-[var(--info-bg)] text-[var(--info)]",
    primary: "bg-[var(--primary)]/10 text-[var(--primary)]",
  };

  const sizeClasses = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-3 py-1",
  };

  return (
    <span className={`inline-flex items-center rounded-[8px] font-[family:var(--font-body)] uppercase tracking-wider font-medium ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {children}
    </span>
  );
}
