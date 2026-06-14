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
        <div className="min-h-screen bg-[#030014] text-slate-100 selection:bg-brand-purple/30 selection:text-white">
          <Starfield />
          <Navbar />
          <main>
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
