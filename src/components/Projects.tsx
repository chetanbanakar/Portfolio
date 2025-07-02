import React from 'react';
import { ExternalLink, MapPin, Smartphone, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Ezy-Day: Unified Field Service Management Platform",
      description: "Deliver an end-to-end mobile solution for managing infrastructure field operations, improving workforce productivity and service reliability.",
      icon: <Smartphone className="h-6 w-6" />,
      achievements: [
        "Built Android app modules for planning (permits, shutdowns), AI-powered scheduling, execution (digital timesheets, chatbot), and analytics.",
        "Integrated offline maps and GPS services to track field assets and optimize routes.",
        "Connected backend systems like SAP and Service Fusion via secure API layers, enabling seamless enterprise data flow.",
        "Powered dashboards and reports with machine learning-based insights for operational visibility."
      ]
    },
    {
      title: "Ezy-Forms: Digital Forms Platform",
      description: "Digitize field processes using dynamic mobile forms, enhancing accuracy and regulatory compliance.",
      icon: <Database className="h-6 w-6" />,
      achievements: [
        "Developed reusable form engine on Android to create unlimited customizable forms (e.g., audits, inspections).",
        "Integrated offline sync, location tagging, e-signature, and real-time data validation.",
        "Improved data accuracy by 30% and reduced compliance-related errors by automating rule-based form logic."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Projects</h2>
          
          <div className="mt-8 space-y-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-md animate-fade-in opacity-0"
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start mb-4">
                  <span className="text-portfolio-blue mr-3 mt-1">
                    {project.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-portfolio-navy mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                  </div>
                </div>
                
                <ul className="bullet-list text-gray-700">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;