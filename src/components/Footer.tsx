import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/meeravanathi", 
    label: "GitHub",
    color: "hover:bg-gray-100 dark:hover:bg-gray-800"
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/meera-vanathi-1450aa258/", 
    label: "LinkedIn",
    color: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
  },
  { 
    icon: Twitter, 
    href: "https://x.com/MeeraVanathi", 
    label: "Twitter/X",
    color: "hover:bg-sky-50 dark:hover:bg-sky-900/30"
  },
  { 
    icon: Mail, 
    href: "mailto:meeravanathi259@gmail.com", 
    label: "Email",
    color: "hover:bg-green-50 dark:hover:bg-green-900/30"
  },
  { 
    icon: Phone, 
    href: "tel:+919385724932", 
    label: "Phone",
    color: "hover:bg-purple-50 dark:hover:bg-purple-900/30"
  },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Meera Vanathi
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2026 All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 ${social.color} transition-all duration-200 shadow-ios hover:shadow-ios-lg`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        
      </div>
    </footer>
  );
};

export default Footer;
