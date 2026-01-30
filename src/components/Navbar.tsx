import { motion, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Spring animations for fluid motion
  const expandProgress = useSpring(0, {
    stiffness: 180,
    damping: 22,
    mass: 0.8
  });

  // Transform values for horizontal expansion - starts very small, expands to fullest width
  const navbarWidth = useTransform(expandProgress, [0, 1], [64, 1200]);
  const contentOpacity = useTransform(expandProgress, [0, 0.4, 1], [0, 0, 1]);
  const logoOpacity = useTransform(expandProgress, [0, 0.6, 1], [0, 0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    expandProgress.set(isExpanded ? 1 : 0);
  }, [isExpanded, expandProgress]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsExpanded(false);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Standalone Hamburger Button - Always Visible */}
      {!isExpanded && (
        <motion.button
          onClick={toggleExpanded}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 15 }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { type: "spring", stiffness: 400, damping: 15 }
          }}
          className="fixed top-6 right-6 z-50 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-gray-700/50 shadow-ios-lg w-14 h-14 flex flex-col justify-center items-center overflow-hidden"
        >
          {/* Hamburger Lines */}
          <motion.div className="absolute inset-0 flex flex-col justify-center items-center">
            <motion.span
              className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full mb-1.5"
            />
            <motion.span
              className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full mb-1.5"
            />
            <motion.span
              className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"
            />
          </motion.div>
        </motion.button>
      )}

      {/* Full Navbar - Only Visible When Expanded */}
      {isExpanded && (
        <motion.nav
          initial={{ width: 64, opacity: 0 }}
          animate={{ width: 1200, opacity: 1 }}
          exit={{ width: 64, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
            mass: 0.8
          }}
          className="fixed top-6 right-6 z-50 h-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-3xl border border-white/30 dark:border-gray-700/30 shadow-ios-xl rounded-3xl overflow-hidden max-w-[calc(100vw-3rem)]"
        >
          <div className="flex items-center justify-end h-full px-10 relative">
            
            {/* Logo */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.3
              }}
              onClick={() => scrollToSection('#')}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 15 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { type: "spring", stiffness: 400, damping: 15 }
              }}
              className="absolute left-12 text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Meera Vanathi
            </motion.button>
           
            {/* Navigation Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2
              }}
              className="flex items-center gap-16 absolute left-60 right-48"
            >
              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 18,
                      delay: 0.4 + index * 0.08
                    }}
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ 
                      scale: 1.08,
                      y: -3,
                      transition: { type: "spring", stiffness: 400, damping: 15 }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      transition: { type: "spring", stiffness: 400, damping: 15 }
                    }}
                    className="px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/60 dark:hover:bg-gray-800/60 rounded-2xl transition-all duration-300 relative overflow-hidden min-w-[80px] text-center"
                  >
                    {/* Liquid background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ 
                        scale: 1, 
                        opacity: 1,
                        transition: { 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 20 
                        }
                      }}
                    />
                    <span className="relative z-10 font-semibold">{link.name}</span>
                  </motion.button>
                ))}
              </div>


            </motion.div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-6">
              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.5
                }}
                className="scale-110"
              >
                <ThemeToggle />
              </motion.div>
              
              {/* Close Button (X) */}
              <motion.button
                onClick={toggleExpanded}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                className="relative p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-gray-700/50 shadow-ios-lg w-14 h-14 flex flex-col justify-center items-center overflow-hidden"
              >
                {/* X Icon */}
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <motion.span
                    className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full absolute"
                    style={{ rotate: 45 }}
                  />
                  <motion.span
                    className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full absolute"
                    style={{ rotate: -45 }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.nav>
      )}

      {/* Backdrop Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isExpanded ? 0.1 : 0,
          visibility: isExpanded ? "visible" : "hidden",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 1
        }}
        onClick={() => setIsExpanded(false)}
        className="fixed inset-0 bg-black z-30"
      />
    </>
  );
};

export default Navbar;