import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

const GitHubStats: React.FC = () => {
  return (
    <section className="py-24 relative z-10 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
            GitHub <span className="text-[#6d5df0]">Contributions</span>
          </h2>
        </motion.div>

        {/* Calendar Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0c0c1e]/65 border border-slate-900 p-8 rounded-3xl flex flex-col items-center justify-center overflow-x-auto hover:border-[#6d5df0]/30 transition-all duration-300"
        >
          <div className="w-full flex justify-center min-w-[700px] overflow-x-auto">
            <GitHubCalendar 
              username="shivamgiri068" 
              colorScheme="dark"
              theme={{
                light: ['#f5f3ff', '#ddd6fe', '#c084fc', '#a855f7', '#7e22ce'],
                dark: ['#0f0d26', '#3b2f9f', '#5243c7', '#6d5df0', '#8e81f5'],
              }}
              fontSize={14}
              blockSize={12}
              blockMargin={5}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GitHubStats;
