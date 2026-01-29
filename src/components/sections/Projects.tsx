import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern shopping experience with seamless checkout",
    category: "Web Development",
    color: "bg-pastel-lavender",
  },
  {
    title: "Finance Dashboard",
    description: "Real-time analytics and data visualization",
    category: "UI/UX Design",
    color: "bg-pastel-mint",
  },
  {
    title: "Social Media App",
    description: "Connecting communities through engaging content",
    category: "Mobile App",
    color: "bg-pastel-peach",
  },
  {
    title: "Health & Wellness",
    description: "Personal wellness tracking and insights",
    category: "Product Design",
    color: "bg-pastel-sky",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-pastel-mint rounded-full text-sm mb-6">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group cursor-pointer"
              >
                <div className={`${project.color} rounded-3xl p-8 h-80 relative overflow-hidden shadow-ios hover:shadow-ios-xl transition-shadow duration-300`}>
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                  <motion.div
                    className="absolute right-20 bottom-20 w-20 h-20 bg-white/10 rounded-full"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-xs mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-foreground/70">{project.description}</p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        View Project
                      </span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
