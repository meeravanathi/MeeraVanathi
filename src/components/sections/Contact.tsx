import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IOSButton } from "@/components/ui/ios-button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@example.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-pastel-rose rounded-full text-sm mb-6">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card p-6 rounded-2xl shadow-ios text-center"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-5 h-5" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
              <div className="font-medium">{info.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-card p-8 md:p-12 rounded-3xl shadow-ios-lg"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-secondary rounded-xl border-0 focus:ring-2 focus:ring-foreground/20 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-secondary rounded-xl border-0 focus:ring-2 focus:ring-foreground/20 transition-all outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full px-4 py-3 bg-secondary rounded-xl border-0 focus:ring-2 focus:ring-foreground/20 transition-all outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-secondary rounded-xl border-0 focus:ring-2 focus:ring-foreground/20 transition-all outline-none resize-none"
              />
            </div>
            <IOSButton type="submit" size="lg" className="w-full">
              Send Message
            </IOSButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
