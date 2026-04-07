interface ProgressBarProps {
  value: number;
  color?: "blue" | "green" | "amber" | "red";
  showLabel?: boolean;
  height?: "sm" | "md";
}

export default function ProgressBar({ value, color = "blue", showLabel, height = "md" }: ProgressBarProps) {
  const colorClasses = {
    blue: "bg-gradient-to-r from-[var(--primary)] to-[var(--primary-end)]",
    green: "bg-gradient-to-r from-[#16a34a] to-[#22c55e]",
    amber: "bg-gradient-to-r from-[#d97706] to-[#f59e0b]",
    red: "bg-gradient-to-r from-[var(--danger)] to-[#dc2626]",
  };

  const heightClasses = {
    sm: "h-1.5",
    md: "h-2.5",
  };

  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className="flex items-center gap-3">
      <div className={`flex-1 bg-[var(--surface-low)] rounded-full overflow-hidden ${heightClasses[height]}`}>
        <div
          className={`h-full rounded-full ${colorClasses[color]} transition-all duration-[600ms] ease-out`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-[var(--on-surface-muted)] font-[family:var(--font-body)] min-w-[3rem]">
          {clampedValue}%
        </span>
      )}
    </div>
  );
}
