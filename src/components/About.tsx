import React from 'react';
import { motion } from 'framer-motion';
import { Code2, User, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-main tracking-tight">
            About <span className="text-[#6d5df0]">Me</span>
          </h2>
        </motion.div>

        {/* Section Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-text-main leading-tight">
              Passionate Full Stack Developer & Problem Solver
            </h3>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                className="bg-[#6d5df0] hover:bg-[#5b4ce0] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(109,93,240,0.4)]"
              >
                Get In Touch
              </a>
              <a 
                href={`${import.meta.env.BASE_URL}assets/Shivam_Giri_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#6d5df0] text-[#6d5df0] hover:bg-[#6d5df0]/10 font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Column: Stacked Cards */}
          <div className="space-y-6">
            {[
              { 
                icon: <Code2 size={22} />, 
                title: 'Web Development', 
                desc: 'Building responsive and user-friendly full stack web applications using modern technologies.' 
              },
              { 
                icon: <User size={22} />, 
                title: 'Problem Solving', 
                desc: 'Solving coding challenges and developing efficient solutions using Java.' 
              },
              { 
                icon: <Briefcase size={22} />, 
                title: 'Continuous Learning', 
                desc: 'Exploring new technologies and improving skills in frontend, backend, and software development.' 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-bg-card border border-border-primary rounded-2xl p-6 flex gap-5 items-center hover:border-[#6d5df0]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#6d5df0]/15 text-[#6d5df0] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-main mb-1">{item.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
