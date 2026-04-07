import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  prefix?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, prefix, className = "", disabled, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-xs uppercase tracking-wider font-medium text-[var(--on-surface-muted)]">
            {label}
          </label>
        )}
        <div className="relative">
          {prefix && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--on-surface)] font-medium">
              {prefix}
            </span>
          )}
          <input
            ref={ref}
            disabled={disabled}
            className={`
              w-full h-12 rounded-[12px] bg-[var(--surface-low)] text-[var(--on-surface)]
              font-[family:var(--font-body)] text-sm px-4
              ${prefix ? "pl-8" : ""}
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}
              ${error ? "border border-[var(--danger)]/20" : "focus:bg-[var(--surface-lowest)] focus:border focus:border-[var(--primary)] focus:border-opacity-20"}
              outline-none transition-all duration-200
              ${className}
            `}
            {...props}
          />
        </div>
        {error && (
          <span className="text-xs text-[var(--danger)]">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
