import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MacButton } from "@/components/ui/mac-button";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    emoji: "💼",
    handle: "@alexdev",
    url: "#",
    color: "bg-pastel-lavender",
    description: "Let's connect professionally",
  },
  {
    name: "GitHub",
    emoji: "🐙",
    handle: "@alexdev",
    url: "#",
    color: "bg-pastel-mint",
    description: "Check out my open source work",
  },
  {
    name: "Twitter",
    emoji: "🐦",
    handle: "@alexdev",
    url: "#",
    color: "bg-pastel-sky",
    description: "Thoughts on tech & design",
  },
  {
    name: "Dribbble",
    emoji: "🏀",
    handle: "@alexdev",
    url: "#",
    color: "bg-pastel-peach",
    description: "Design explorations",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">💬</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Contact</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - CTA */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 leading-tight">
                Let's create something amazing together ✨
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Drop me a message! 📬
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <a href="mailto:hello@alexdev.com" className="hover:underline font-medium">
                    hello@alexdev.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
              </div>

              <MacButton variant="default" size="lg">
                Send Email ↗
              </MacButton>
            </div>

            {/* Right - Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`${social.color} rounded-2xl p-5 group cursor-pointer transition-shadow hover:shadow-lg`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{social.emoji}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-60 transition-opacity" />
                  </div>
                  <div className="font-semibold mb-0.5">{social.name}</div>
                  <div className="text-sm text-foreground/70">{social.handle}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
