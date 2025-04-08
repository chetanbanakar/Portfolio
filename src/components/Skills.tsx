
import React from 'react';
import { 
  Code, 
  Database, 
  BookOpen, 
  Library, 
  BarChart3, 
  Smartphone 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Language",
      icon: <Code className="h-5 w-5" />,
      skills: ["Java", "J2EE"]
    },
    {
      category: "Android",
      icon: <Smartphone className="h-5 w-5" />,
      skills: [
        "Android Design", 
        "Android SDK", 
        "Android Architecture Components", 
        "MVP & MVVM Design patterns",
        "Navigation Framework", 
        "View components", 
        "App Modularisation",
        "Third-party service integration", 
        "App memory management", 
        "User Interface Design"
      ]
    },
    {
      category: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["SQL: Room - SQLite", "PostgreSQL", "NoSQL: Couch", "Couchbase"]
    },
    {
      category: "APIs",
      icon: <BookOpen className="h-5 w-5" />,
      skills: ["REST APIs", "GraphQL"]
    },
    {
      category: "Libraries and Tools",
      icon: <Library className="h-5 w-5" />,
      skills: [
        "Android Studio", 
        "Gradle", 
        "XML", 
        "YML", 
        "OkHttp", 
        "WebSockets", 
        "CI/CD Pipeline", 
        "RxAndroid", 
        "RxJava",
        "Dagger Hilt", 
        "Rx Event Bus", 
        "JSON", 
        "Docker", 
        "Version Control (SVN)",
        "Postman"
      ]
    },
    {
      category: "Data Visualisation",
      icon: <BarChart3 className="h-5 w-5" />,
      skills: ["MPAndroidChart", "Metabase", "DataBinding"]
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
                <div className="flex items-center mb-4">
                  <span className="text-portfolio-blue mr-2">
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-bold text-portfolio-navy">{category.category}</h3>
                </div>
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
