"use client";

import { useEffect, ReactNode, useRef } from "react";

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function BottomSheet({ open, onClose, title, children }: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 md:items-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <div
        ref={sheetRef}
        className="relative bg-white md:max-w-[480px] w-full max-h-[90vh] overflow-y-auto rounded-t-[24px] md:rounded-[24px] shadow-[var(--shadow-ambient)] animate-slideUp md:animate-dialogIn"
      >
        <div className="flex flex-col">
          <div className="flex justify-center pt-4 pb-2">
            <div className="w-8 h-1 bg-[var(--surface-low)] rounded-full" />
          </div>
          <h2 className="text-lg font-[var(--font-display)] font-bold text-[var(--on-surface)] px-6 pb-4">
            {title}
          </h2>
        </div>
        <div className="px-6 pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}
