import React from 'react';
import { WhitepaperSection as WhitepaperSectionType } from '@/data/whitepaperData';

interface WhitepaperSectionProps {
  section: WhitepaperSectionType;
}

const WhitepaperSection: React.FC<WhitepaperSectionProps> = ({ section }) => {
  return (
    <div id={section.id} className="whitepaper-section mb-20 scroll-mt-32 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      {/* Section title with decoration */}
      <div className="flex items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400 relative inline-block">
          {section.title}
          <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-transparent"></span>
        </h2>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-10 text-lg leading-relaxed">{section.content}</p>
        
        {section.subsections && section.subsections.length > 0 && (
          <div className="mt-10 space-y-12">
            {section.subsections.map((subsection, index) => (
              <div key={subsection.id} className="subsection">
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center w-8 h-8 bg-blue-700/20 rounded-full mr-3">
                    <span className="text-blue-400 font-medium">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{subsection.title}</h3>
                </div>
                
                <div className="pl-11">
                  <div className="pl-4 border-l-2 border-blue-500/30 py-2">
                    <p className="text-gray-300 leading-relaxed">{subsection.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Section bottom decoration for all but the last section */}
      <div className="mt-16 flex justify-center">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default WhitepaperSection; 