import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { emoji: "🎓", label: "Computer Science", desc: "Stanford University" },
    { emoji: "💼", label: "3+ Years", desc: "Experience" },
    { emoji: "🚀", label: "20+", desc: "Projects Shipped" },
    { emoji: "🌍", label: "Remote", desc: "Worldwide" },
  ];

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Section Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">✦</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">About Me</span>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 leading-tight"
              >
                I'm passionate about building products that make a difference 🌟
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-lg leading-relaxed mb-6"
              >
                With a background in computer science and a love for design, I bridge the gap 
                between aesthetics and functionality. I've worked with startups and established 
                companies to create digital experiences that users love.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                When I'm not coding, you'll find me exploring new coffee shops ☕️, 
                reading about design systems 📚, or playing guitar 🎸
              </motion.p>
            </div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-6 bg-secondary/50 rounded-2xl border border-border/30"
                >
                  <span className="text-3xl mb-3 block">{item.emoji}</span>
                  <div className="font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
