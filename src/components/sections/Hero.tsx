import { motion } from "framer-motion";
import { MacButton } from "@/components/ui/mac-button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      {/* Background gradient orbs - subtle, Cosmos-inspired */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pastel-lavender rounded-full blur-[100px] opacity-40"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pastel-mint rounded-full blur-[100px] opacity-30"
        animate={{ 
          scale: [1, 1.15, 1],
          y: [0, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-pastel-peach rounded-full blur-[80px] opacity-25"
        animate={{ 
          x: [0, 40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/60 backdrop-blur-sm rounded-full text-sm text-muted-foreground border border-border/30">
            <span className="w-2 h-2 bg-status-online rounded-full animate-pulse" />
            Available for work
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6"
        >
          <span className="text-6xl mb-4 block">👋</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.1]"
        >
          Hey, I'm <span className="text-muted-foreground">Alex</span>
          <br />
          <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
            Creative Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft beautiful digital experiences ✨ Focused on creating 
          interfaces that people love to use. Based in San Francisco 📍
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <MacButton variant="default" size="lg">
            View Work ↓
          </MacButton>
          <MacButton variant="secondary" size="lg">
            Get in Touch →
          </MacButton>
        </motion.div>

        {/* Quick social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            LinkedIn ↗
          </a>
          <span className="text-border">•</span>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            GitHub ↗
          </a>
          <span className="text-border">•</span>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Twitter ↗
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
