import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  elevated?: boolean;
}

export default function Card({ children, className = "", onClick, elevated }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-[var(--surface-lowest)] backdrop-blur-[12px] rounded-4xl
        ${onClick ? "cursor-pointer hover:opacity-100 hover:scale-[1.01] transition-all duration-200" : ""}
        ${elevated ? "shadow-[var(--shadow-ambient)]" : "shadow-[var(--shadow-ambient)]"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
