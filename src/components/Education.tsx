
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Education</h2>
          
          <div className="mt-8">
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-portfolio-navy">GM Institute of Technology</h3>
                <div className="text-portfolio-blue font-medium">2016 - 2020</div>
              </div>
              <p className="text-gray-700">Bachelor of Engineering - BE, Computer Science</p>
              <p className="text-gray-600 mt-2">Graduated with a 7.1 GPA. Focused on software engineering principles and mobile application development.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
