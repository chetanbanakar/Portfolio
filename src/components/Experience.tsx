
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
                <div className="text-portfolio-blue font-medium">March 2022 - Present (3 years 2 months)</div>
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
            
            {/* SAP Developer */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-portfolio-navy">SAP Developer</h3>
                <div className="text-portfolio-blue font-medium">March 2021 - February 2022 (1 year)</div>
              </div>
              <p className="text-gray-700 mb-2">Bengaluru, Karnataka, India</p>
              
              <ul className="bullet-list text-gray-700 mt-4">
                <li>Boosted operational efficiency by 30% via optimized SAP PM Work Order & Preventive Maintenance processes.</li>
                <li>Developed custom SAP reports, ALV grids, & Smart Forms for streamlined maintenance workflows.</li>
                <li>Integrated SAP PM with external systems using BAPIs, RFCs, and IDocs for seamless data exchange.</li>
                <li>Enhanced user experience with SAP Fiori, CDS Views, and OData services.</li>
                <li>Implemented and upgraded SAP PM solutions, improving asset reliability & maintenance planning.</li>
                <li>Created user-friendly enhancements using User Exits, BADIs, and Enhancement Frameworks.</li>
                <li>Collaborated in Agile environments for smooth SAP module integrations.</li>
                <li>Streamlined asset management & maintenance processes through SAP PM solution optimisation.</li>
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
