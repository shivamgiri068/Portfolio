import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden px-4">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-10 px-4 md:px-0"
        >
          Aspiring full stack developer passionate about building modern, scalable, 
          and user-friendly web applications. Skilled in frontend and backend 
          technologies, with a focus on creating seamless and efficient digital experiences.
        </motion.p>

        {/* View My Work Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <a
            href="#projects"
            className="inline-block bg-[#6d5df0] hover:bg-[#5b4ce0] text-white font-medium text-base px-8 py-3.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(109,93,240,0.6)] cursor-pointer"
          >
            View My Work
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center text-slate-400 mt-8"
        >
          <span className="text-xs font-medium tracking-widest uppercase mb-2">Scroll</span>
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-brand-purple hover:text-white transition-colors"
          >
            <ArrowDown size={18} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
