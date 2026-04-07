"use client";

import { useEffect, ReactNode, useRef } from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  size?: "sm" | "md";
}

export default function Dialog({ open, onClose, title, description, children, size = "md" }: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const maxWidth = size === "sm" ? "max-w-[480px]" : "max-w-[560px]";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        className={`relative bg-white rounded-[24px] shadow-[var(--shadow-ambient)] ${maxWidth} w-full p-8 animate-dialogIn`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[var(--on-surface-muted)] hover:text-[var(--on-surface)] transition-colors"
        >
          ✕
        </button>
        <h2 className="text-xl font-[var(--font-display)] font-bold text-[var(--on-surface)] mb-2">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-[var(--on-surface-muted)] font-[family:var(--font-body)] mb-6">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
