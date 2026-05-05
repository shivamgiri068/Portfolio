import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: "TaskFlow",
    description: "A comprehensive task management application designed for seamless team collaboration, featuring drag-and-drop boards and real-time updates.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/shivamgiri068",
    live: "#"
  },
  {
    title: "ChatSphere",
    description: "Real-time chat application with WebSocket integration, offering instant messaging, typing indicators, and online status tracking.",
    tech: ["React", "Socket.io", "Node.js"],
    github: "https://github.com/shivamgiri068",
    live: "#"
  },
  {
    title: "Sorting Visualizer",
    description: "An interactive web application that visualizes standard sorting algorithms (Bubble, Merge, Quick) step-by-step with adjustable speeds.",
    tech: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
    github: "https://github.com/shivamgiri068",
    live: "#"
  },
  {
    title: "Cloudify",
    description: "Cloud-based project focusing on real-time weather updates and dynamic data fetching from external weather APIs.",
    tech: ["JavaScript", "API Integration", "CSS3"],
    github: "https://github.com/shivamgiri068",
    live: "#"
  },
  {
    title: "URL Shortener",
    description: "A backend service that converts long URLs into manageable tiny links with click-tracking capabilities.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/shivamgiri068",
    live: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-800/50 rounded-lg text-cyan-400 group-hover:text-purple-400 transition-colors">
                  <FolderGit2 size={28} />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs font-mono text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
