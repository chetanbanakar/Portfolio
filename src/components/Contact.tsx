
import React from 'react';
import { Mail, Linkedin, Phone, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Contact</h2>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <a 
              href="mailto:chetanb2517@gmail.com" 
              className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <Mail size={36} className="text-portfolio-blue mb-3" />
              <h3 className="text-lg font-semibold text-portfolio-navy mb-2">Email</h3>
              <p className="text-gray-600 text-center">chetanb2517@gmail.com</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/chetanbanakar17"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <Linkedin size={36} className="text-portfolio-blue mb-3" />
              <h3 className="text-lg font-semibold text-portfolio-navy mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-center">chetanbanakar17</p>
            </a>
            
            <a 
              href="https://github.com/chetanbanakar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <Github size={36} className="text-portfolio-blue mb-3" />
              <h3 className="text-lg font-semibold text-portfolio-navy mb-2">GitHub</h3>
              <p className="text-gray-600 text-center">chetanbanakar</p>
            </a>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <Phone size={36} className="text-portfolio-blue mb-3" />
              <h3 className="text-lg font-semibold text-portfolio-navy mb-2">Location</h3>
              <p className="text-gray-600 text-center">Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
