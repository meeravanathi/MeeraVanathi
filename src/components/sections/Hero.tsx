import { motion } from "framer-motion";
import { Sparkles, Download, Mail } from "lucide-react";
import { FluidDisplay, FluidCard, FluidButton } from "@/components/ui/fluid-display";
import { quickContact } from "@/utils/email";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // You can replace this with actual resume download link
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-900/50 dark:to-gray-900">
      {/* iOS-style Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-100/60 to-purple-100/40 dark:from-blue-900/30 dark:to-purple-900/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-green-100/50 to-blue-100/30 dark:from-green-900/25 dark:to-blue-900/15 rounded-full blur-3xl"
        animate={{ 
          y: [0, 40, 0],
          scale: [1, 1.05, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-orange-100/40 to-pink-100/30 dark:from-orange-900/20 dark:to-pink-900/15 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl">
        <FluidDisplay delay={0}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-full shadow-ios mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Available for work</span>
          </div>
        </FluidDisplay>

        <FluidDisplay delay={0.1}>
          <h1 className="ios-large-title mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent">
            Meera
            <br />
            <span className="text-gray-500 dark:text-gray-400">Vanathi</span>
          </h1>
        </FluidDisplay>

        <FluidDisplay delay={0.2}>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
             style={{ letterSpacing: '-0.01em' }}>
            AI developer • Cybersecurity Enthusiast
            <br />
            <span className="text-lg text-gray-500 dark:text-gray-400 mt-2 block">
              Building intelligent systems and beautiful digital experiences
            </span>
          </p>
        </FluidDisplay>

        <FluidDisplay delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <FluidButton
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-2xl text-base font-semibold"
              variant="primary"
            >
              View My Work
            </FluidButton>
            <FluidButton
              onClick={quickContact}
              className="px-8 py-4 rounded-2xl text-base font-semibold inline-flex items-center gap-2"
              variant="secondary"
            >
              
              Get in Touch
            </FluidButton>
          </div>
        </FluidDisplay>

        {/* Interactive Stats Cards */}
        <FluidDisplay delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { number: "3+", label: "Internships", color: "from-blue-500 to-blue-600" },
              { number: "8.62", label: "CGPA",  color: "from-green-500 to-green-600" },
              { number: "4+", label: "Major Projects", color: "from-purple-500 to-purple-600" }
            ].map((stat, index) => (
              <FluidCard
                key={stat.label}
                delay={0.5 + index * 0.1}
                className="ios-card p-6 text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-2xl mb-2"
                >
                
                </motion.div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
              </FluidCard>
            ))}
          </div>
        </FluidDisplay>
      </div>

      {/* Enhanced Scroll Indicator */}
      <FluidDisplay delay={0.8}>
        <div className="absolute bottom-8">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
              />
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Scroll</span>
          </motion.div>
        </div>
      </FluidDisplay>
    </section>
  );
};

export default Hero;
