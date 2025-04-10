import React from 'react';
import Image from 'next/image';

const TechnologySection = () => {
  return (
    <section id="technology" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600">
            Built on cutting-edge blockchain and AI technologies to provide institutional-grade crypto investing solutions.
          </p>
        </div>

        {/* ORA Integration */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center mb-4 bg-blue-50 py-1 px-3 rounded-full">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.5 1.5A2.5 2.5 0 003 4v12a2.5 2.5 0 005 0V4a2.5 2.5 0 00-2.5-2.5zm11 0A2.5 2.5 0 0014 4v12a2.5 2.5 0 005 0V4a2.5 2.5 0 00-2.5-2.5z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800 text-sm font-semibold">ORA INTEGRATION</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Powered by ORA Infrastructure
              </h3>
              
              <p className="text-gray-600 mb-6">
                Our platform integrates with ORA's institutional-grade infrastructure to deliver unparalleled security, reliability, and performance in the DeFi space.
              </p>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">ORA Risk Management System (RMS)</h4>
                    <p className="text-gray-600">Comprehensive risk assessment for smart contracts and protocols.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">opAgent Framework</h4>
                    <p className="text-gray-600">Autonomous trading agents that execute strategies with precision.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900 p-8 lg:p-12 flex items-center justify-center">
              <div className="relative h-64 w-full max-w-sm">
                {/* Placeholder for ORA integration diagram */}
                <div className="w-full h-full flex items-center justify-center bg-blue-800/50 rounded-lg border border-blue-700">
                  <div className="text-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    <p className="text-xl font-bold">ORA Infrastructure Integration</p>
                    <p className="text-sm opacity-70 mt-2">Interactive diagram coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Technologies */}
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Core Technologies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blockchain */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Multi-Chain Support</h4>
            <p className="text-gray-600">
              Built on Binance Smart Chain with cross-chain compatibility with Ethereum, Polygon, and other major blockchains. Our platform leverages the unique advantages of each network.
            </p>
          </div>
          
          {/* AI & Machine Learning */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">AI & Machine Learning</h4>
            <p className="text-gray-600">
              Claude-powered AI for strategy development, market analysis, and risk assessment. Our ML models continuously learn from market patterns to optimize trading performance.
            </p>
          </div>
          
          {/* Smart Contract System */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Advanced Smart Contracts</h4>
            <p className="text-gray-600">
              Our ecosystem includes sophisticated smart contracts for staking, rewards, treasury management, and more. All audited by leading security firms and analyzed by ORA RMS.
            </p>
          </div>
        </div>

        {/* Whitepaper CTA */}
        <div className="mt-16 text-center">
          <a 
            href="/whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Read Our Whitepaper
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection; 