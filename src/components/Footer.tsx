import { motion } from "framer-motion";

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Dribbble", href: "#" },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="text-lg font-semibold mb-1 flex items-center justify-center md:justify-start gap-2">
              <span>⚡</span>
              <span>Alex.dev</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 • Designed & Built with 💜
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
