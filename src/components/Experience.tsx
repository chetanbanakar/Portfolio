
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Experience</h2>
          
          <div className="mt-8">
            {/* Saartha - Lead Android Engineer */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-portfolio-navy">Lead Android Engineer</h3>
                <div className="text-portfolio-blue font-medium">Mar 2023 - Present · 2 yrs 5 mos</div>
              </div>
              <p className="text-gray-700 mb-2">Saartha Labs Pvt Ltd - Bengaluru</p>
              
              <ul className="bullet-list text-gray-700 mt-4">
                <li>Led the design, development, and optimization of Android applications, improving performance by up to 33% and reducing app sizes by 3x.</li>
                <li>Spearheaded the migration of a React Native app to Android Native (Java), enhancing performance on low-cost devices.</li>
                <li>Published multiple successful Android app on the Google Play Store, achieving over 1000+ active users.</li>
                <li>Architected mobile solutions using MVP/MVVM design patterns, ensuring scalable and maintainable codebases.</li>
                <li>Integrated REST and GraphQL APIs, enabling seamless backend services and data handling.</li>
                <li>Optimised application battery usage by 15% through effective utilisation of Android's built-in tools.</li>
                <li>Led cross-functional Agile teams, ensuring timely project delivery and fostering collaboration across departments.</li>
                <li>Enhanced data visualization with MPAndroidChart, improving the presentation of complex data for better user insights.</li>
                <li>Utilized tools like Gradle, SVN, and Postman for efficient project management, version control, and API testing.</li>
              </ul>
            </div>
            
            {/* Java Developer */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-portfolio-navy">Java Developer</h3>
                <div className="text-portfolio-blue font-medium">March 2021 - February 2023 (2 years)</div>
              </div>
              <p className="text-gray-700 mb-2">Bengaluru, Karnataka, India</p>
              
              <ul className="bullet-list text-gray-700 mt-4">
                <li>Developed core functionalities for enterprise-grade applications using Java technologies including Multithreading, Collections, and JDBC.</li>
                <li>Proficient in the Spring ecosystem, including Spring MVC and Spring Boot, for building scalable backend solutions.</li>
                <li>Designed and implemented robust RESTful APIs, facilitating seamless integration with internal modules and third-party systems.</li>
                <li>Applied OpenAPI specifications to standardize and document API contracts effectively.</li>
                <li>Led the architecture and development of critical microservices using Spring Boot, contributing to enhanced scalability, maintainability, and system performance.</li>
                <li>Integrated services within CI/CD pipelines to support continuous deployment and quality assurance.</li>
                <li>Increased data processing efficiency by 20% through optimized Java code and multithreaded operations.</li>
                <li>Reduced production bugs by 30% through implementation of automated testing and proactive code reviews.</li>
                <li>Improved overall system performance by 25% by identifying and resolving performance bottlenecks.</li>
              </ul>
            </div>
            
            {/* JSpiders - Training & Development Center */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-portfolio-navy">Java Full Stack Development</h3>
                <div className="text-portfolio-blue font-medium">October 2020 - March 2021 (6 months)</div>
              </div>
              <p className="text-gray-700 mb-2">JSpiders - Training & Development Center - Bengaluru, Karnataka, India</p>
            </div>
            
            {/* A2F Ignitive Labs India Pvt Limited */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-portfolio-navy">Intern</h3>
                <div className="text-portfolio-blue font-medium">November 2019 - January 2020 (3 months)</div>
              </div>
              <p className="text-gray-700 mb-2">A2F Ignitive Labs India Pvt Limited - Davangere, Karnataka, India</p>
            </div>
            
            {/* Skyrim Innovation */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-portfolio-navy">Intern</h3>
                <div className="text-portfolio-blue font-medium">July 2019 - August 2019 (2 months)</div>
              </div>
              <p className="text-gray-700 mb-2">Skyrim Innovation - Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
