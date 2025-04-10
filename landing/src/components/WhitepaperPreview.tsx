import React from 'react';
import Link from 'next/link';
import { whitepaperData } from '@/data/whitepaperData';

const WhitepaperPreview: React.FC = () => {
  // Get abstract and first three sections for preview
  const abstract = whitepaperData.find(section => section.id === 'abstract');
  const previewSections = whitepaperData
    .filter(section => section.id !== 'abstract')
    .slice(0, 3);

  return (
    <section id="whitepaper" className="py-20 px-4 bg-black/30 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            <span className="text-blue-400">Whitepaper</span> Overview
            <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-transparent"></span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive whitepaper detailing DefiKSA's approach to Sharia-compliant finance, AI integration, and platform architecture.
          </p>
        </div>

        {/* Abstract */}
        {abstract && (
          <div className="bg-gray-800/30 p-8 rounded-xl mb-12 max-w-4xl mx-auto border border-gray-700/30 shadow-lg hover:shadow-blue-900/20 transition-all duration-300 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-blue-400 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {abstract.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {abstract.content.length > 300 
                ? `${abstract.content.substring(0, 300)}...` 
                : abstract.content}
            </p>
          </div>
        )}

        {/* Section Previews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {previewSections.map((section, index) => (
            <div 
              key={section.id} 
              className="bg-gray-800/20 p-6 rounded-xl border border-gray-700/30 shadow-lg transition-all duration-300 hover:shadow-blue-900/20 hover:translate-y-[-8px] group"
            >
              <div className="flex items-center mb-3">
                <div className="flex justify-center items-center w-8 h-8 bg-blue-700/20 rounded-full mr-3 group-hover:bg-blue-700/40 transition-colors">
                  <span className="text-blue-400 font-medium">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
              
              <p className="text-gray-400 text-sm mb-5 pl-11">
                {section.content.length > 150 
                  ? `${section.content.substring(0, 150)}...` 
                  : section.content}
              </p>
              
              {section.subsections && section.subsections.length > 0 && (
                <div className="pl-11 mb-4">
                  <p className="text-sm text-gray-500 mb-2">Topics include:</p>
                  <ul className="space-y-1 text-xs text-gray-400">
                    {section.subsections.slice(0, 2).map(subsection => (
                      <li key={subsection.id} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {subsection.title}
                      </li>
                    ))}
                    {section.subsections.length > 2 && (
                      <li className="text-gray-500 italic text-xs">And more...</li>
                    )}
                  </ul>
                </div>
              )}
              
              <div className="pl-11">
                <Link 
                  href={`/whitepaper#${section.id}`} 
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/whitepaper" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg inline-flex items-center justify-center transition-all duration-300 font-medium hover:shadow-lg hover:shadow-blue-900/30 hover:scale-105"
          >
            Read the Full Whitepaper
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover how DefiKSA combines AI with verifiable blockchain technology to deliver innovative and compliant financial solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperPreview; 