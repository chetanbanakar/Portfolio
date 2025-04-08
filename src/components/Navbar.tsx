
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-portfolio-navy">
          Chetan Banakar
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-portfolio-navy hover:text-portfolio-blue transition-colors">Home</a>
          <a href="#about" className="text-portfolio-navy hover:text-portfolio-blue transition-colors">About</a>
          <a href="#experience" className="text-portfolio-navy hover:text-portfolio-blue transition-colors">Experience</a>
          <a href="#education" className="text-portfolio-navy hover:text-portfolio-blue transition-colors">Education</a>
          <a href="#skills" className="text-portfolio-navy hover:text-portfolio-blue transition-colors">Skills</a>
          <a href="#contact" className="text-portfolio-navy hover:text-portfolio-blue transition-colors">Contact</a>
        </div>
        
        <button className="md:hidden text-portfolio-navy" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-portfolio-navy hover:text-portfolio-blue transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-portfolio-navy hover:text-portfolio-blue transition-colors" onClick={toggleMenu}>About</a>
            <a href="#experience" className="text-portfolio-navy hover:text-portfolio-blue transition-colors" onClick={toggleMenu}>Experience</a>
            <a href="#education" className="text-portfolio-navy hover:text-portfolio-blue transition-colors" onClick={toggleMenu}>Education</a>
            <a href="#skills" className="text-portfolio-navy hover:text-portfolio-blue transition-colors" onClick={toggleMenu}>Skills</a>
            <a href="#contact" className="text-portfolio-navy hover:text-portfolio-blue transition-colors" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
