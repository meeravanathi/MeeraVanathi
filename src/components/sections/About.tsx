import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FluidDisplay, FluidCard } from "@/components/ui/fluid-display";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "3+", label: "Internships", color: "from-blue-500 to-blue-600" },
    { number: "4+", label: "Major Projects", color: "from-green-500 to-green-600" },
    { number: "8.62", label: "CGPA", color: "from-purple-500 to-purple-600" },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <FluidDisplay>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Bitmoji Video Section */}
            <div className="relative order-2 lg:order-1">
              <FluidCard delay={0.2} className="relative">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl blur-2xl opacity-60 scale-110" />
                
                {/* Video Container */}
                <div className="relative ios-card p-2 aspect-square max-w-md mx-auto">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/xyz.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600 rounded-2xl shadow-ios-lg flex items-center justify-center"
                >
                  <div className="w-6 h-6 bg-white rounded-lg" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-green-400 to-green-500 dark:from-green-500 dark:to-green-600 rounded-2xl shadow-ios-lg flex items-center justify-center"
                >
                  <div className="w-4 h-4 bg-white rounded-md" />
                </motion.div>
              </FluidCard>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <FluidDisplay delay={0.1}>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full shadow-ios mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"
                  />
                  <span className="text-sm font-semibold">About Me</span>
                </div>
              </FluidDisplay>

              <FluidDisplay delay={0.2}>
                <h2 className="ios-title mb-6 text-gray-900 dark:text-gray-100">
                  B.Tech in CSE
                  <br />
                  <span className="text-blue-600 dark:text-blue-400">(Cybersecurity)</span>
                </h2>
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Shiv Nadar University Chennai</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">2022 - 2026</p>
                    </div>
                  </div>
                </div>
              </FluidDisplay>

              <FluidDisplay delay={0.3}>
                <p className="ios-body text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm an AI/ML specialist and full-stack developer currently interning at <strong className="text-blue-600 dark:text-blue-400">Ericsson</strong> as a Data Scientist. 
                  I build autonomous AI agents for enterprise systems, craft responsive web applications, and develop intelligent solutions for real-world challenges. 
                  With expertise in Gen-AI, RAG pipelines, and secure backend development, I transform ideas into impactful digital products.
                </p>
              </FluidDisplay>

              {/* Interactive Stats Grid */}
              <FluidDisplay delay={0.4}>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {stats.map((stat, index) => (
                    <FluidCard
                      key={stat.label}
                      delay={0.5 + index * 0.1}
                      className="ios-card p-4 text-center group cursor-pointer"
                    >
                      <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform`}>
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
                    </FluidCard>
                  ))}
                </div>
              </FluidDisplay>

              {/* Interactive Skills Preview */}
              <FluidDisplay delay={0.6}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Core Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "AI/ML", color: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700" },
                      { name: "Full-Stack", color: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700" },
                      { name: "Cybersecurity", color: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700" },
                      { name: "Gen-AI", color: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700" },
                      { name: "RAG Pipelines", color: "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-700" }
                    ].map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        className={`px-4 py-2 rounded-xl text-sm font-medium border ${skill.color} cursor-default`}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </FluidDisplay>
            </div>
          </div>
        </FluidDisplay>
      </div>
    </section>
  );
};

export default About;
