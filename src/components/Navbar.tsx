import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'backdrop-blur-md shadow-lg border-border-primary' 
          : 'border-transparent'
      }`}
      style={{ backgroundColor: isScrolled ? (theme === 'dark' ? 'rgba(3, 0, 20, 0.7)' : 'rgba(250, 248, 255, 0.7)') : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center"
          >
            <a href="#" className="text-2xl font-bold tracking-tight text-text-main hover:text-brand-purple transition-colors">
              Shivam<span className="text-brand-purple">Giri</span>
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
                className="text-sm font-medium text-text-muted hover:text-brand-purple transition-colors"
              >
                {link.name}
              </motion.a>
            ))}

            {/* Desktop Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="p-2 rounded-full hover:bg-slate-500/10 transition-colors text-text-muted hover:text-brand-purple focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </nav>

          {/* Mobile menu and toggle controls */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-500/10 transition-colors text-text-muted hover:text-brand-purple focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-muted hover:text-brand-purple focus:outline-none"
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
          className="md:hidden border-b border-border-primary shadow-xl"
          style={{ backgroundColor: theme === 'dark' ? 'rgba(3, 0, 20, 0.95)' : 'rgba(250, 248, 255, 0.95)' }}
        >
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-text-muted hover:text-brand-purple w-full text-center border-b border-border-primary/50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
