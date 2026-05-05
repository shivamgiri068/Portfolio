import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-cyan-900/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center"
          >
            <a href="#" className="text-2xl font-bold gradient-text tracking-tighter">
              Shivam<span className="text-slate-100">Giri</span>
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Desktop Resume Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-4"
          >
            <a 
              href={`${import.meta.env.BASE_URL}assets/Shivam_Giri_Resume.pdf`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition-colors"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </a>
            
            <a 
              href={`${import.meta.env.BASE_URL}assets/Shivam_Giri_Resume.pdf`} 
              download="Shivam_Giri_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)] transition-all"
            >
              <Download size={16} />
              <span>Download</span>
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-slate-900 border-b border-slate-800"
        >
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-cyan-400 w-full text-center border-b border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex flex-col gap-3 w-full px-4 pt-4">
              <a 
                href="/assets/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 px-4 py-3 text-sm font-medium text-cyan-400 border border-cyan-400/30 rounded-lg"
              >
                <FileText size={16} />
                <span>View Resume</span>
              </a>
              <a 
                href="/assets/resume.pdf" 
                download="Shivam_Giri_Resume.pdf"
                className="flex justify-center items-center gap-2 px-4 py-3 text-sm font-medium text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
