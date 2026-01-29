import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Apple",
    logo: "🍎",
    role: "Software Engineering Intern",
    period: "Summer 2024",
    location: "Cupertino, CA",
    description: "Worked on the iOS design system team, contributing to SwiftUI components used by millions of users.",
    color: "bg-pastel-lavender",
    tags: ["Swift", "SwiftUI", "Design Systems"],
  },
  {
    company: "Stripe",
    logo: "💳",
    role: "Frontend Engineering Intern",
    period: "Summer 2023",
    location: "San Francisco, CA",
    description: "Built payment dashboard features and improved checkout conversion rates by 12%.",
    color: "bg-pastel-mint",
    tags: ["React", "TypeScript", "Payments"],
  },
  {
    company: "Figma",
    logo: "🎨",
    role: "Product Design Intern",
    period: "Winter 2023",
    location: "Remote",
    description: "Designed new collaboration features for FigJam, shipped to 4M+ users.",
    color: "bg-pastel-peach",
    tags: ["Product Design", "Prototyping", "User Research"],
  },
  {
    company: "Notion",
    logo: "📝",
    role: "Full Stack Intern",
    period: "Summer 2022",
    location: "San Francisco, CA",
    description: "Developed API integrations and contributed to the Notion SDK.",
    color: "bg-pastel-sky",
    tags: ["Node.js", "PostgreSQL", "APIs"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 bg-secondary/20" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">💼</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Experience</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            Where I've worked ✨
          </h2>

          {/* Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-card rounded-2xl p-6 border border-border/30 hover:border-border/60 transition-colors cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Logo */}
                    <div className={`w-14 h-14 ${exp.color} rounded-2xl flex items-center justify-center text-2xl shrink-0`}>
                      {exp.logo}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold text-lg flex items-center gap-2">
                            {exp.company}
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity" />
                          </h3>
                          <p className="text-muted-foreground">{exp.role}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{exp.period}</div>
                          <div className="text-sm text-muted-foreground">{exp.location}</div>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-secondary/80 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
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

export default Experience;
