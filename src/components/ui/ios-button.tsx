import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const iosButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-ios hover:shadow-ios-lg rounded-2xl",
        secondary:
          "bg-secondary text-secondary-foreground shadow-ios hover:shadow-ios-lg rounded-2xl",
        outline:
          "border border-foreground/20 bg-transparent hover:bg-secondary rounded-2xl",
        ghost:
          "hover:bg-secondary rounded-xl",
        pastel:
          "bg-pastel-lavender text-foreground shadow-ios hover:shadow-ios-lg rounded-2xl",
        mint:
          "bg-pastel-mint text-foreground shadow-ios hover:shadow-ios-lg rounded-2xl",
        peach:
          "bg-pastel-peach text-foreground shadow-ios hover:shadow-ios-lg rounded-2xl",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface IOSButtonProps
  extends VariantProps<typeof iosButtonVariants> {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const IOSButton = React.forwardRef<HTMLButtonElement, IOSButtonProps>(
  ({ className, variant, size, children, onClick, type = "button", disabled, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(iosButtonVariants({ variant, size, className }))}
        onClick={onClick}
        type={type}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </motion.button>
    );
  }
);
IOSButton.displayName = "IOSButton";

export { IOSButton, iosButtonVariants };
