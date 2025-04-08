
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-portfolio-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; {currentYear} Chetan Banakar. All Rights Reserved.</p>
          <p className="mt-2 text-gray-400 text-sm">Lead Android Developer & Mobile Application Expert</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
