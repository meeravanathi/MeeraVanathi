import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { FluidDisplay, FluidCard, FluidButton } from "@/components/ui/fluid-display";
import { sendEmail, quickContact, EmailData } from "@/utils/email";

const Contact = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState<EmailData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "meeravanathi259@gmail.com",
      action: () => window.open('mailto:meeravanathi259@gmail.com', '_blank'),
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+91 9385724932",
      action: () => window.open('tel:+919385724932', '_blank'),
      color: "from-green-500 to-green-600"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Chennai, India",
      action: () => window.open('https://maps.google.com/?q=Chennai,India', '_blank'),
      color: "from-purple-500 to-purple-600"
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await sendEmail(formData);
      if (success) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-900" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <FluidDisplay>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full shadow-ios mb-6">
              <div className="w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold">Get in Touch</span>
            </div>
            <h2 className="ios-large-title mb-6 text-gray-900 dark:text-gray-100">
              Let's Work Together
            </h2>
            <p className="ios-body text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </div>
        </FluidDisplay>

        {/* Interactive Contact Cards */}
        <FluidDisplay delay={0.2}>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {contactInfo.map((info, index) => (
              <FluidCard
                key={info.label}
                delay={0.3 + index * 0.1}
                className="ios-card p-6 text-center cursor-pointer group"
              >
                <div onClick={info.action} className="w-full h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-ios`}
                  >
                    <info.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</div>
                  <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {info.value}
                  </div>
                </div>
              </FluidCard>
            ))}
          </div>
        </FluidDisplay>

        {/* Enhanced Contact Form */}
        <FluidDisplay delay={0.4}>
          <FluidCard className="ios-card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none placeholder-gray-400 dark:placeholder-gray-500"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none placeholder-gray-400 dark:placeholder-gray-500"
                  />
                </motion.div>
              </div>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none placeholder-gray-400 dark:placeholder-gray-500"
                />
              </motion.div>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none placeholder-gray-400 dark:placeholder-gray-500"
                />
              </motion.div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <FluidButton
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                  variant="primary"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : submitStatus === 'success' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : submitStatus === 'error' ? (
                    <AlertCircle className="w-4 h-4" />
                  ) : ( 
                    null
                  )}
                  <span>
                    {isSubmitting ? 'Sending...' : 
                     submitStatus === 'success' ? 'Message Sent!' :
                     submitStatus === 'error' ? 'Try Again' : 'Send Message'}
                  </span>
                </FluidButton>
                
                <FluidButton
                  type="button"
                  onClick={quickContact}
                  className="px-6 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                  variant="secondary"
                >
                  <span>Quick Email</span>
                </FluidButton>
              </div>
            </form>
          </FluidCard>
        </FluidDisplay>
      </div>
    </section>
  );
};

export default Contact;
