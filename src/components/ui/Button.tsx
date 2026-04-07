import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "destructive";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", fullWidth, children, className = "", disabled, ...props }, ref) => {
    const sizeClasses = {
      sm: "h-8 px-3 text-xs",
      md: "h-11 px-4 text-sm",
      lg: "h-[52px] px-6 text-base",
    };

    const variantClasses = {
      primary: "bg-gradient-to-br from-[var(--primary)] to-[var(--primary-end)] text-white border-none hover:brightness-110 active:scale-[0.98]",
      secondary: "bg-[var(--surface-low)] text-[var(--primary)] border-none hover:bg-[var(--surface)]",
      tertiary: "bg-transparent text-[var(--primary)] border-none hover:bg-[var(--surface-low)]",
      destructive: "bg-[var(--danger-bg)] text-[var(--danger)] border-none hover:bg-[var(--danger-bg)]/80",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${fullWidth ? "w-full" : ""}
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          rounded-[12px] font-[var(--font-display)] font-medium transition-all duration-200
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
