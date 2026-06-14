import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  gradient: string; // CSS gradient class for the card header
}

const projectsData: Project[] = [
  {
    title: "TaskFlow",
    description: "A comprehensive task management application designed for seamless team collaboration, featuring drag-and-drop boards and real-time updates.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/shivamgiri068/TaskFlow",
    live: "#",
    gradient: "from-blue-600 to-indigo-700"
  },
  {
    title: "ChatSphere",
    description: "Real-time chat application with WebSocket integration, offering instant messaging, typing indicators, and online status tracking.",
    tech: ["React", "Socket.io", "Node.js"],
    github: "https://github.com/shivamgiri068/ChatSphere",
    live: "#",
    gradient: "from-indigo-600 to-purple-700"
  },
  {
    title: "Sorting Visualizer",
    description: "An interactive web application that visualizes standard sorting algorithms (Bubble, Merge, Quick) step-by-step with adjustable speeds.",
    tech: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
    github: "https://github.com/shivamgiri068/sorting-visualizer",
    live: "#",
    gradient: "from-cyan-600 to-blue-700"
  },
  {
    title: "Cloudify",
    description: "Cloud-based project focusing on real-time weather updates and dynamic data fetching from external weather APIs.",
    tech: ["JavaScript", "API Integration", "CSS3"],
    github: "https://github.com/shivamgiri068/Cloudify",
    live: "#",
    gradient: "from-purple-600 to-pink-700"
  },
  {
    title: "URL Shortener",
    description: "A backend service that converts long URLs into manageable tiny links with click-tracking capabilities.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/shivamgiri068/URL-Shortener",
    live: "#",
    gradient: "from-emerald-600 to-blue-700"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-main tracking-tight mb-2">
            Featured <span className="text-[#6d5df0]">Projects</span>
          </h2>
          <p className="text-text-muted text-sm">Explore my recent work</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-bg-card border border-border-primary rounded-3xl overflow-hidden flex flex-col h-full hover:border-[#6d5df0]/30 transition-all duration-300 group"
            >
              {/* Graphic Card Header */}
              <div className={`h-40 w-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center p-6 transition-all duration-500 group-hover:scale-[1.02]`}>
                <div className="absolute inset-0 bg-black/10" />
                <span className="text-2xl font-bold text-white/95 tracking-wide drop-shadow-md z-10">
                  {project.title}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium text-[#6d5df0] bg-[#6d5df0]/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-border-primary">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-[#6d5df0] transition-colors"
                  >
                    <FaGithub size={18} />
                    <span>Source</span>
                  </a>
                  {project.live !== "#" && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 text-sm text-text-muted hover:text-[#6d5df0] transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
