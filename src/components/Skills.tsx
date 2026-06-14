import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillItem {
  name: string;
  percentage: number;
  category: 'Frontend' | 'Backend' | 'Tools';
}

const skillsData: SkillItem[] = [
  // Frontend
  { name: 'HTML', percentage: 90, category: 'Frontend' },
  { name: 'CSS', percentage: 85, category: 'Frontend' },
  { name: 'JavaScript', percentage: 85, category: 'Frontend' },
  { name: 'TypeScript', percentage: 80, category: 'Frontend' },
  // Backend
  { name: 'Node.js', percentage: 80, category: 'Backend' },
  { name: 'Express', percentage: 80, category: 'Backend' },
  { name: 'MongoDB', percentage: 75, category: 'Backend' },
  { name: 'MySQL', percentage: 80, category: 'Backend' },
  { name: 'REST APIs', percentage: 85, category: 'Backend' },
  // Tools
  { name: 'Git', percentage: 85, category: 'Tools' },
  { name: 'GitHub', percentage: 85, category: 'Tools' },
  { name: 'VS Code', percentage: 90, category: 'Tools' },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Frontend' | 'Backend' | 'Tools'>('All');

  const filteredSkills = skillsData.filter(
    (skill) => activeTab === 'All' || skill.category === activeTab
  );

  return (
    <section id="skills" className="py-24 relative z-10 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-text-main tracking-tight">
            My <span className="text-[#6d5df0]">Skills</span>
          </h2>
        </motion.div>

        {/* Tab Selectors */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {(['All', 'Frontend', 'Backend', 'Tools'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#6d5df0] text-white shadow-[0_0_15px_rgba(109,93,240,0.5)]'
                  : 'text-text-muted hover:text-text-main hover:bg-slate-500/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-bg-card border border-border-primary rounded-2xl p-6 hover:border-[#6d5df0]/30 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-text-main text-base">{skill.name}</span>
                </div>
                
                {/* Progress Bar Track */}
                <div className="w-full h-2 bg-slate-500/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-[#6d5df0] rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
