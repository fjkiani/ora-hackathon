import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden bg-gray-900 text-white">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-80 z-0"></div>
      
      {/* Animated particles or grid (placeholder) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                AI-Powered
              </span>
              <br />
              Crypto Hedge Fund
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Institutional-grade risk management and AI-driven strategies for optimal crypto returns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://app.cryptohedgefund.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Launch App
              </a>
              
              <Link href="#features"
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            {/* Placeholder for an interactive visualization */}
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-blue-500/30 bg-black/30 backdrop-blur shadow-2xl shadow-blue-500/20">
              {/* This will be replaced with an actual visualization component */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block p-3 rounded-full bg-blue-900/50 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-blue-300 text-lg">Interactive Data Flow Visualization</p>
                  <p className="text-gray-400 text-sm mt-2">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-black/30 backdrop-blur rounded-lg p-6 border border-blue-500/20">
            <p className="text-3xl md:text-4xl font-bold text-blue-400">$240M+</p>
            <p className="text-gray-400 mt-2">Total Value Locked</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur rounded-lg p-6 border border-blue-500/20">
            <p className="text-3xl md:text-4xl font-bold text-blue-400">12.4%</p>
            <p className="text-gray-400 mt-2">Average APY</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur rounded-lg p-6 border border-blue-500/20">
            <p className="text-3xl md:text-4xl font-bold text-blue-400">24/7</p>
            <p className="text-gray-400 mt-2">Market Monitoring</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur rounded-lg p-6 border border-blue-500/20">
            <p className="text-3xl md:text-4xl font-bold text-blue-400">10K+</p>
            <p className="text-gray-400 mt-2">Active Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 