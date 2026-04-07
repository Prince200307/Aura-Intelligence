"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Toast {
  message: string;
  variant: "success" | "error" | "info";
}

interface ToastContextType {
  toast: (options: Toast) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [currentToast, setCurrentToast] = useState<Toast | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showToast = (options: Toast) => {
    setCurrentToast(options);
    setIsVisible(true);
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setCurrentToast(null), 200);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <ToastContext.Provider value={{ toast: showToast }}>
      {children}
      {currentToast && (
        <div
          role="status"
          aria-live="polite"
          className={`
            fixed bottom-4 md:bottom-6 left-1/2 md:left-auto md:right-6 -translate-x-1/2 md:translate-x-0
            w-[340px] max-w-[90vw] bg-[var(--surface-lowest)] backdrop-blur-[12px] rounded-[16px] shadow-[var(--shadow-ambient)]
            p-4 flex items-center gap-3 border-l-[4px] z-[100]
            transition-all duration-300
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            ${currentToast.variant === "success" ? "border-l-[var(--success)]" : currentToast.variant === "error" ? "border-l-[var(--danger)]" : "border-l-[var(--primary)]"}
          `}
        >
          <span className={`
            ${currentToast.variant === "success" ? "text-[var(--success)]" : currentToast.variant === "error" ? "text-[var(--danger)]" : "text-[var(--primary)]"}
          `}>
            {currentToast.variant === "success" ? "✓" : currentToast.variant === "error" ? "✕" : "ℹ"}
          </span>
          <span className="text-sm text-[var(--on-surface)] font-[family:var(--font-body)]">{currentToast.message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
