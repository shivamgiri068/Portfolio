import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative z-10 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-main tracking-tight mb-4">
            Get In <span className="text-[#6d5df0]">Touch</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm leading-relaxed">
            I'm currently looking for new opportunities as a Backend Developer or Software Engineer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        {/* Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-bg-card border border-border-primary p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#6d5df0]/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#6d5df0]/10 rounded-full blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center">
            <a 
              href="mailto:shivamvns7985@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#6d5df0] text-white rounded-full font-bold text-lg hover:bg-[#5b4ce0] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(109,93,240,0.4)]"
            >
              <Send size={20} />
              Say Hello
            </a>

            {/* Social Icons */}
            <div className="mt-12 flex items-center justify-center gap-6">
              <a href="mailto:shivamvns7985@gmail.com" className="text-text-muted hover:text-[#6d5df0] transition-colors group">
                <div className="p-4 bg-slate-500/10 rounded-full border border-border-primary group-hover:border-[#6d5df0]/30 transition-colors">
                  <Mail size={22} />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/shivamgiri068/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-[#6d5df0] transition-colors group">
                <div className="p-4 bg-slate-500/10 rounded-full border border-border-primary group-hover:border-[#6d5df0]/30 transition-colors">
                  <FaLinkedin size={22} />
                </div>
              </a>
              <a href="https://github.com/shivamgiri068" target="_blank" rel="noreferrer" className="text-text-muted hover:text-[#6d5df0] transition-colors group">
                <div className="p-4 bg-slate-500/10 rounded-full border border-border-primary group-hover:border-[#6d5df0]/30 transition-colors">
                  <FaGithub size={22} />
                </div>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
