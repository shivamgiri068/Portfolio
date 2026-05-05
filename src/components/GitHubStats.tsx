import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

const GitHubStats: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/30 relative z-10 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub <span className="gradient-text">Contributions</span></h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center overflow-x-auto"
        >
          <GitHubCalendar 
            username="shivamgiri068" 
            colorScheme="dark"
            theme={{
              light: ['#f0fdfa', '#ccfbf1', '#5eead4', '#14b8a6', '#0f766e'],
              dark: ['#1e293b', '#064e3b', '#059669', '#10b981', '#34d399'],
            }}
            fontSize={14}
            blockSize={12}
            blockMargin={5}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default GitHubStats;
