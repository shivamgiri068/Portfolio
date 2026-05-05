import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: "Programming", items: ["Java", "JavaScript", "HTML5", "CSS3", "SQL"] },
  { category: "Frameworks & Tools", items: ["Spring Boot", "Spring MVC", "REST APIs", "Git", "GitHub"] },
  { category: "Databases & Core", items: ["MySQL", "Oracle", "MongoDB", "System Design", "OOPs"] }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/30 relative z-10 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="gradient-text">Skills</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm font-medium text-slate-200 bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-700 hover:border-cyan-400/50 transition-all cursor-default shadow-sm hover:shadow-[0_0_10px_rgba(0,243,255,0.2)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
