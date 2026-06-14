import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-border-primary bg-bg-primary text-center relative z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} <span className="text-text-main hover:text-[#6d5df0] transition-colors font-medium">Shivam Giri</span>. All Rights Reserved.
        </p>
        <p className="text-text-muted/70 text-xs mt-2">
          Designed & Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
