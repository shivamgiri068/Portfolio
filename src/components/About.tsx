import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-semibold mb-4 text-white">Who am I?</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              I am a Final Year B.Tech CSE student (Class of 2026) with a deep passion for Software Development and Backend Engineering. My journey in tech is driven by a curiosity to understand how complex systems work under the hood.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              I specialize in Java, Spring Boot, and REST APIs, alongside a strong foundation in Database Management Systems (MySQL, MongoDB) and System Design. I'm constantly building projects to improve my problem-solving skills.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Currently, I am actively seeking opportunities as a Java Backend Developer or Software Engineer where I can contribute to innovative, technology-driven solutions.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              { icon: <Terminal size={24} className="text-cyan-400" />, title: 'Backend Development', desc: 'Building robust, scalable server-side logic using Java & Spring Boot.' },
              { icon: <Database size={24} className="text-purple-400" />, title: 'Database Architecture', desc: 'Designing efficient schemas and managing data with MySQL and MongoDB.' },
              { icon: <Code2 size={24} className="text-blue-400" />, title: 'Problem Solving', desc: 'Writing clean, optimized code with strong fundamentals in OOPs and Data Structures.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl flex gap-4 items-start"
              >
                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-100 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
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
