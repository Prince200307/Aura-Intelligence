interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: "sm" | "md" | "full";
}

export default function Skeleton({ width = "100%", height = "1rem", className = "", rounded = "sm" }: SkeletonProps) {
  const roundedClasses = {
    sm: "rounded-[8px]",
    md: "rounded-[16px]",
    full: "rounded-[9999px]",
  };

  return (
    <div
      className={`skeleton-shimmer bg-[#e5e7eb] ${roundedClasses[rounded]} ${className}`}
      style={{ width, height }}
    />
  );
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-[var(--surface-lowest)] backdrop-blur-[12px] rounded-[16px] shadow-[var(--shadow-ambient)] p-5 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <Skeleton width="60%" height="0.75rem" rounded="sm" />
        <Skeleton width="20%" height="0.75rem" rounded="sm" />
      </div>
      <Skeleton width="40%" height="1.5rem" rounded="sm" />
      <div className="mt-4">
        <Skeleton width="100%" height="0.5rem" rounded="full" />
      </div>
    </div>
  );
}
