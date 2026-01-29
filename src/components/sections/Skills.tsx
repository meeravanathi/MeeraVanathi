import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    emoji: "🎨",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    skills: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis"],
  },
  {
    title: "Design",
    emoji: "✏️",
    skills: ["Figma", "UI/UX", "Design Systems", "Prototyping", "Animation"],
  },
  {
    title: "Tools",
    emoji: "🛠️",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 bg-secondary/20" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">⚡</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Skills</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            What I work with 🔧
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/30"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.emoji}</span>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-secondary/80 rounded-full text-sm font-medium cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
