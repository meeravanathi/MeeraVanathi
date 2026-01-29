import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MacButton } from "@/components/ui/mac-button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-2xl border-b border-border/50" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg font-semibold flex items-center gap-2"
          >
            <span className="text-xl">⚡</span>
            <span>Alex.dev</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <MacButton variant="default" size="sm">
              Hire Me 🚀
            </MacButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-2xl border-t border-border/50"
      >
        <div className="px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <MacButton variant="default" size="sm" className="w-full">
              Hire Me 🚀
            </MacButton>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
