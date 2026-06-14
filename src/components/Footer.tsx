import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-900 bg-[#030014] text-center relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-white hover:text-[#6d5df0] transition-colors font-medium">Shivam Giri</span>. All Rights Reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Designed & Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
