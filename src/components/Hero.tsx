import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">Available for Opportunities</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Hi, I'm <span className="gradient-text">Shivam Giri</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-slate-400 mb-8 h-[40px]"
          >
            Software & Java Backend Developer
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Final Year B.Tech CSE student passionate about building scalable backend applications, designing REST APIs, and solving complex problems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-slate-900 font-semibold bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            
            <a 
              href={`${import.meta.env.BASE_URL}assets/Shivam_Giri_Resume.pdf`} 
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-white font-semibold glass-card rounded-lg hover:bg-slate-800 transition-colors"
            >
              <FileText size={18} className="text-cyan-400" />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex items-center justify-center gap-6"
          >
            <a href="https://github.com/shivamgiri068" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shivamgiri068/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-slate-800 rounded-full">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:shivamvns7985@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors p-2 hover:bg-slate-800 rounded-full">
              <Mail size={24} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
