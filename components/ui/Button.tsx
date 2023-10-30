import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
        <button 
          className={cn(
            "w-auto text-white font-semibold py-3 px-5 rounded-full border border-transparent bg-black transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50", disabled && 'opacity-75 cursor-not-allowed', className
          )}
          ref={ref} 
          disabled={disabled}
          {...props}
        >
            {children}
        </button>
    );
  }
);

Button.displayName = "Button";

export default Button;