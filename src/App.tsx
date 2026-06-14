import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    // Detect initial theme
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'dark';
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Update theme class on HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Track mouse coordinates for background spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030014]"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute w-full h-full border-4 border-slate-900 rounded-full" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="absolute w-full h-full border-4 border-brand-purple border-t-transparent rounded-full"
              />
              <span className="font-bold text-xl text-white">SG</span>
            </div>
            <p className="mt-4 text-slate-400 font-mono text-sm tracking-widest animate-pulse">INITIALIZING...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-bg-primary text-text-main selection:bg-brand-purple/30 selection:text-white transition-colors duration-500 relative">
          
          {/* Stars Canvas background */}
          <Starfield theme={theme} />
          
          {/* Interactive Mouse Nebula Spotlight */}
          <div 
            className="fixed inset-0 pointer-events-none z-[0] transition-opacity duration-300"
            style={{
              background: theme === 'dark'
                ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(109, 93, 240, 0.08), transparent 80%)`
                : `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(109, 93, 240, 0.05), transparent 80%)`
            }}
          />

          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <GitHubStats />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
