import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

const macButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background rounded-full hover:opacity-90",
        secondary: "bg-secondary text-foreground rounded-full border border-border/50 hover:bg-secondary/80",
        outline: "border border-foreground/20 bg-transparent rounded-full hover:bg-secondary",
        ghost: "text-foreground rounded-full hover:bg-secondary",
        pill: "bg-secondary/80 text-foreground rounded-full backdrop-blur-sm",
        lavender: "bg-pastel-lavender text-foreground rounded-full",
        mint: "bg-pastel-mint text-foreground rounded-full",
        peach: "bg-pastel-peach text-foreground rounded-full",
        sky: "bg-pastel-sky text-foreground rounded-full",
      },
      size: {
        default: "h-10 px-5 text-sm",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface MacButtonProps extends VariantProps<typeof macButtonVariants> {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
}

const MacButton = React.forwardRef<HTMLButtonElement, MacButtonProps>(
  ({ className, variant, size, children, onClick, type = "button", disabled, href, ...props }, ref) => {
    const Component = href ? motion.a : motion.button;
    
    return (
      <Component
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(macButtonVariants({ variant, size, className }))}
        onClick={onClick}
        type={href ? undefined : type}
        disabled={disabled}
        href={href}
        ref={ref as any}
      >
        {children}
      </Component>
    );
  }
);
MacButton.displayName = "MacButton";

export { MacButton, macButtonVariants };
