import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "Figma", level: 92 },
  { name: "Next.js", level: 87 },
];

const technologies = [
  "JavaScript", "Python", "GraphQL", "PostgreSQL", 
  "AWS", "Docker", "Git", "Tailwind CSS"
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-pastel-peach rounded-full text-sm mb-6">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-foreground to-foreground/70 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Tags */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-3 content-start"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-3 bg-card rounded-2xl shadow-ios text-sm font-medium cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
