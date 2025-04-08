
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Mobile Development",
      skills: ["Android Development", "Android SDK", "Java", "MVP/MVVM Architecture", "React Native", "Mobile UI/UX", "App Optimization"]
    },
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      category: "Development Tools",
      skills: ["Android Studio", "Gradle", "SVN", "Git", "Postman", "JIRA", "Confluence"]
    },
    {
      category: "API & Backend",
      skills: ["REST APIs", "GraphQL", "BAPIs", "RFCs", "IDocs", "OData Services"]
    },
    {
      category: "Database & Design",
      skills: ["SQL", "Architecture Patterns", "Clean Code", "Data Visualization"]
    },
    {
      category: "SAP Technologies",
      skills: ["SAP PM", "SAP Reports", "ALV Grids", "Smart Forms", "SAP Fiori", "CDS Views"]
    },
    {
      category: "Project Management",
      skills: ["Agile Methodologies", "Cross-functional Leadership", "Project Delivery", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Skills</h2>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md animate-fade-in opacity-0"
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
              >
                <h3 className="text-lg font-bold text-portfolio-navy mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-portfolio-blue/10 text-portfolio-blue px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
