
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-portfolio-navy to-portfolio-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            CHETAN BANAKAR
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Lead Android Developer | Expert in Java, MVP/MVVM Architecture, and API Integration | Skilled in Clean Code and High-Impact Mobile Solutions
          </p>
          <p className="text-lg text-gray-300 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Bengaluru, Karnataka, India
          </p>
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <a 
              href="#about" 
              className="inline-flex items-center gap-2 bg-white text-portfolio-navy px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              View My Work <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
