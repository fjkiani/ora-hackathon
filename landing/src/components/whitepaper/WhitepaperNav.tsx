import React from 'react';
import { WhitepaperSection } from '@/data/whitepaperData';

interface WhitepaperNavProps {
  sections: WhitepaperSection[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const WhitepaperNav: React.FC<WhitepaperNavProps> = ({ 
  sections, 
  activeSection, 
  setActiveSection 
}) => {
  const handleClick = (id: string) => {
    setActiveSection(id);
    
    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="whitepaper-nav bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50 shadow-xl transition-all duration-300 hover:shadow-blue-900/20">
      <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id} className="transition-all duration-200">
            <button
              onClick={() => handleClick(section.id)}
              className={`text-left w-full px-3 py-2 rounded-md transition-all duration-200 flex items-center ${
                activeSection === section.id
                  ? 'bg-blue-700/30 text-white font-medium shadow-inner'
                  : 'hover:bg-gray-700/50 text-gray-300 hover:translate-x-1'
              }`}
            >
              <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 transition-all duration-300 ${
                activeSection === section.id ? 'bg-blue-400' : 'bg-gray-500'
              }`}></span>
              {section.title}
            </button>
            
            {section.subsections && section.subsections.length > 0 && (
              <ul className={`ml-4 mt-2 space-y-1 border-l-2 border-gray-700/50 overflow-hidden transition-all duration-300 ${
                activeSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {section.subsections.map((subsection) => (
                  <li key={subsection.id} className="pl-3">
                    <button 
                      className="text-sm text-gray-400 hover:text-white py-1 px-2 rounded-md w-full text-left transition-all duration-200 hover:bg-gray-700/30 hover:translate-x-1"
                      onClick={() => {
                        const element = document.getElementById(section.id);
                        if (element) {
                          // Find the subsection heading (which is the 3rd level heading)
                          const subsectionHeading = Array.from(element.querySelectorAll('h3')).find(
                            h3 => h3.textContent === subsection.title
                          );
                          if (subsectionHeading) {
                            subsectionHeading.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                    >
                      {subsection.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default WhitepaperNav; 