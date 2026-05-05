import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities as a Backend Developer or Software Engineer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl text-center border border-slate-700/50 relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center">
            <a 
              href="mailto:shivamvns7985@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <Send size={20} />
              Say Hello
            </a>

            <div className="mt-12 flex items-center justify-center gap-8">
              <a href="mailto:shivamvns7985@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors group">
                <div className="p-4 glass rounded-full group-hover:border-cyan-400/50 transition-colors">
                  <Mail size={24} />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/shivamgiri068/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors group">
                <div className="p-4 glass rounded-full group-hover:border-blue-400/50 transition-colors">
                  <FaLinkedin size={24} />
                </div>
              </a>
              <a href="https://github.com/shivamgiri068" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors group">
                <div className="p-4 glass rounded-full group-hover:border-purple-400/50 transition-colors">
                  <FaGithub size={24} />
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
