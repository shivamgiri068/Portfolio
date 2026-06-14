import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = ["Full Stack Developer", "Backend Engineer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const currentFullText = roles[roleIndex];

    const type = () => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 1800); // pause at the end
        } else {
          timer = setTimeout(type, 80);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        } else {
          timer = setTimeout(type, 40);
        }
      }
    };

    timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-28 overflow-hidden px-4">
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        
        {/* Main Title Heading (styled after reference screenshot) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 leading-tight text-center"
        >
          <span className="text-text-main block text-3xl md:text-5xl font-bold mb-4">Hi, I'm</span>
          <span className="text-[#6d5df0] drop-shadow-[0_0_25px_rgba(109,93,240,0.45)]">Shivam</span>
          <span className="text-text-main inline-block ml-6 md:ml-8">Giri</span>
        </motion.h1>

        {/* Typewriter Subtitle Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-8 mb-8 flex items-center justify-center"
        >
          <span className="text-[#6d5df0] font-semibold text-lg md:text-xl tracking-widest uppercase">
            {displayedText}
          </span>
          <span className="w-[3px] h-6 bg-[#6d5df0] ml-1.5 animate-pulse" />
        </motion.div>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-text-muted font-normal leading-relaxed max-w-2xl mx-auto mb-12 px-4 md:px-0"
        >
          Aspiring full stack developer passionate about building modern, scalable, 
          and user-friendly web applications. Skilled in frontend and backend 
          technologies, with a focus on creating seamless and efficient digital experiences.
        </motion.p>

        {/* View My Work Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <a
            href="#projects"
            className="inline-block bg-[#6d5df0] hover:bg-[#5b4ce0] text-white font-semibold text-base px-9 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(109,93,240,0.65)] cursor-pointer"
          >
            View My Work
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center text-text-muted mt-4"
        >
          <span className="text-xs font-semibold tracking-widest uppercase mb-2">Scroll</span>
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-[#6d5df0] hover:text-text-main transition-colors"
          >
            <ArrowDown size={18} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
