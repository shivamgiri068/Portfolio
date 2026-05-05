import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-800/50 bg-slate-950 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Shivam Giri. All Rights Reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Designed & Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
