import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ExternalLink, Download } from "lucide-react";
import { FluidDisplay, FluidCard, FluidButton } from "@/components/ui/fluid-display";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "GoML",
      role: "Fullstack AI Developer Intern",
      duration: "Dec 2025 - Present",
      location: "Coimbatore, India",
      type: "Current Internship",
      description: "Developing full-stack AI applications with modern frameworks, implementing machine learning solutions, and building scalable web applications with AI integration.",
      technologies: ["Python", "AI/ML", "Fast API", "AWS bedrock"],
    },
  ];

  const downloadResume = () => {

    window.open('resume.pdf', '_blank');
  };

  const viewLinkedIn = () => {
    window.open('https://www.linkedin.com/in/meera-vanathi-1450aa258/', '_blank');
  };

  return (
    <section id="experience" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <FluidDisplay>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full shadow-ios mb-6">
              <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold">Professional Journey</span>
            </div>
            <h2 className="ios-large-title mb-6 text-gray-900 dark:text-gray-100">
              Experience
            </h2>
            <p className="ios-body text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Full-stack developer with experience in AI/ML, renewable energy solutions, enterprise systems, and modern web technologies
            </p>
          </div>
        </FluidDisplay>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <FluidCard
              key={exp.company}
              delay={index * 0.2}
              className="ios-card p-8 group"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="md:col-span-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <motion.h3 
                        whileHover={{ scale: 1.02 }}
                        className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1"
                      >
                        {exp.company}
                      </motion.h3>
                      <p className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-medium mb-2`}>
                        {exp.role}
                      </p>
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className={`inline-block px-3 py-1 ${
                          exp.type === 'Current Internship' 
                            ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                            : exp.type === 'Training Program'
                            ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                            : 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        } rounded-full text-xs font-medium`}
                      >
                        {exp.type}
                      </motion.span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="md:col-span-2">
                  <p className="ios-body text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: (index * 0.2) + (i * 0.1) + 0.5 }}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.2 }}
                            className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" 
                          />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ delay: (index * 0.2) + (i * 0.05) + 0.7 }}
                          className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FluidCard>
          ))}
        </div>

        {/* Interactive Call to Action */}
        <FluidDisplay delay={0.8}>
          <div className="text-center mt-16">
            <FluidCard className="ios-card p-8 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Ready for New Opportunities</h3>
              <p className="ios-body text-gray-600 dark:text-gray-300 mb-6">
                Looking for challenging full-time roles in AI/ML, full-stack development, or Java enterprise development where I can contribute to innovative projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FluidButton
                  onClick={downloadResume}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium"
                  variant="primary"
                >
                
                  <span>Download Resume</span>
                </FluidButton>
                <FluidButton
                  onClick={viewLinkedIn}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium"
                  variant="secondary"
                >
             
                  <span>View LinkedIn</span>
                </FluidButton>
              </div>
            </FluidCard>
          </div>
        </FluidDisplay>
      </div>
    </section>
  );
};

export default Experience;