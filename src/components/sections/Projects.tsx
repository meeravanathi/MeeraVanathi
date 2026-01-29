import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    description: "Real-time analytics platform for financial data visualization",
    category: "Web App",
    emoji: "📊",
    color: "bg-pastel-lavender",
    year: "2024",
  },
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout flow",
    category: "Full Stack",
    emoji: "🛍️",
    color: "bg-pastel-mint",
    year: "2024",
  },
  {
    title: "Health & Wellness App",
    description: "Personal fitness tracking with AI-powered insights",
    category: "Mobile App",
    emoji: "🏃‍♂️",
    color: "bg-pastel-peach",
    year: "2023",
  },
  {
    title: "Social Platform",
    description: "Community-driven content sharing platform",
    category: "Product Design",
    emoji: "💬",
    color: "bg-pastel-sky",
    year: "2023",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            Selected Work
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group cursor-pointer h-full"
                >
                  <div className={`${project.color} rounded-3xl p-8 h-72 relative overflow-hidden transition-shadow duration-300 hover:shadow-lg`}>
                    {/* Decorative circles */}
                    <motion.div
                      className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/20 rounded-full"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                    <motion.div
                      className="absolute right-16 bottom-16 w-16 h-16 bg-white/10 rounded-full"
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-4xl">{project.emoji}</span>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </motion.div>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 bg-foreground/10 rounded-full text-xs font-medium">
                            {project.category}
                          </span>
                          <span className="text-xs text-foreground/60">{project.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-foreground/70 text-sm">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
