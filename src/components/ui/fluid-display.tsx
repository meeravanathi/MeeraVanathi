import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FluidDisplayProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FluidDisplay({ children, className = "", delay = 0 }: FluidDisplayProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 40,
        scale: 0.95,
        filter: "blur(10px)"
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: "blur(0px)"
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        filter: { duration: 0.6 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FluidCard({ children, className = "", delay = 0, hover = true }: FluidDisplayProps & { hover?: boolean }) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 60,
        rotateX: 15,
        scale: 0.9
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        scale: 1
      }}
      whileHover={hover ? {
        y: -8,
        scale: 1.02,
        rotateX: -2,
        transition: { duration: 0.3, ease: "easeOut" }
      } : {}}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{ perspective: "1000px" }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function FluidButton({ children, onClick, className = "", variant = "primary", type = "button" }: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit" | "reset";
}) {
  const baseClasses = "relative overflow-hidden font-semibold transition-all duration-300 transform-gpu";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-ios-lg hover:shadow-ios-xl",
    secondary: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-200 hover:bg-white/90 dark:hover:bg-gray-700/90 shadow-ios hover:shadow-ios-lg",
    ghost: "bg-transparent hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-300"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        y: -2
      }}
      whileTap={{ 
        scale: 0.98,
        y: 0
      }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0"
        whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}