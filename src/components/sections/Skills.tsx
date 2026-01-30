import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FluidDisplay, FluidCard } from "@/components/ui/fluid-display";

const skills = [
  { name: "Python", level: 95, color: "from-blue-500 to-blue-600" },
  { name: "LangChain & LangGraph", level: 92, color: "from-green-500 to-green-600" },
  { name: "React & Node.js", level: 90, color: "from-purple-500 to-purple-600" },
  { name: "Gen-AI Models", level: 88, color: "from-orange-500 to-orange-600" },
  { name: "Java Backend", level: 85, color: "from-red-500 to-red-600" },
  { name: "Cybersecurity", level: 87, color: "from-pink-500 to-pink-600" },
];

const technologies = [
  "Python", "Java", "SQL", "React", 
  "Node.js", "LangChain", "Azure AI", "Docker",
  "Git", "AWS", "FAISS", "Qdrant", "PyTorch", "scikit-learn"
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <FluidDisplay>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full shadow-ios mb-6">
              <div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold">Expertise</span>
            </div>
            <h2 className="ios-large-title mb-6 text-gray-900 dark:text-gray-100">
              Skills & Technologies
            </h2>
            <p className="ios-body text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks for building intelligent, scalable solutions
            </p>
          </div>
        </FluidDisplay>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill Progress Bars */}
          <FluidDisplay delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Core Skills</h3>
              {skills.map((skill, index) => (
                <FluidCard
                  key={skill.name}
                  delay={0.3 + index * 0.1}
                  hover={false}
                  className="ios-card p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"
                      />
                    </motion.div>
                  </div>
                </FluidCard>
              ))}
            </div>
          </FluidDisplay>

      
          <FluidDisplay delay={0.4}>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-ios text-sm font-medium cursor-default text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </FluidDisplay>
        </div>
      </div>
    </section>
  );
};

export default Skills;
