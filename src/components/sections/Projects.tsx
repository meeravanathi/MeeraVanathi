import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FluidDisplay, FluidCard } from "@/components/ui/fluid-display";

const projects = [
  {
    title: "Multi-Agent E-commerce Chatbot",
    description: "Autonomous LLM-powered chatbot for orders, product lookup, and support using LangChain and Groq API",
    category: "AI/ML",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    githubUrl: "https://github.com/meeravanathi/Multi-agent-Ecommerce-chatbot",
  },
  {
    title: "CloneX - Social Platform",
    description: "Full-stack social app with Firebase auth, Redux state management, and responsive Tailwind UI",
    category: "Web Development",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    githubUrl: "https://github.com/meeravanathi/CloneX",
  },
  {
    title: "Sentiment Analysis NLP Pipeline",
    description: "TensorFlow-based NLP system with tokenization, TF-IDF extraction, and high accuracy metrics",
    category: "AI/ML",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    githubUrl: "https://github.com/meeravanathi/Sentiment-analysis",
  },
  {
    title: "Intrusion Detection System",
    description: "ML model benchmarking achieving 92% accuracy in network security threat detection",
    category: "Cybersecurity",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    githubUrl: "https://github.com/meeravanathi/IDS",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleProjectClick = (project: typeof projects[0]) => {
    window.open(project.githubUrl, '_blank');
  };

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <FluidDisplay>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full shadow-ios mb-6">
              <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold">Selected Work</span>
            </div>
            <h2 className="ios-large-title mb-6 text-gray-900 dark:text-gray-100">
              Featured Projects
            </h2>
            <p className="ios-body text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of innovative solutions across AI/ML, web development, and cybersecurity
            </p>
          </div>
        </FluidDisplay>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <FluidCard
              key={project.title}
              delay={index * 0.15}
              className="group cursor-pointer"
            >
              <div 
                onClick={() => handleProjectClick(project)}
                className={`${project.bgColor} rounded-3xl p-8 h-80 relative overflow-hidden border border-white/20 dark:border-gray-700/20 shadow-ios hover:shadow-ios-xl transition-all duration-300`}
              >
                {/* Decorative elements */}
                <motion.div
                  className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 dark:bg-white/5 rounded-full"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <motion.div
                  className="absolute right-20 bottom-20 w-20 h-20 bg-white/5 dark:bg-white/3 rounded-full"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-full text-xs font-medium mb-4`}>
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
              </div>
            </FluidCard>
          ))}
        </div>

        {/* Call to Action */}
        <FluidDisplay delay={0.8}>
          <div className="text-center mt-16">
            <FluidCard className="ios-card p-8 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">More Projects</h3>
              <p className="ios-body text-gray-600 dark:text-gray-300 mb-6">
                Explore more of my work and contributions on GitHub and other platforms.
              </p>
              <button 
                onClick={() => window.open('https://github.com/meeravanathi', '_blank')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-ios"
              >
                <span>View GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </FluidCard>
          </div>
        </FluidDisplay>
      </div>
    </section>
  );
};

export default Projects;
