import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import sections
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TechnologySection from './components/sections/TechnologySection';
import TokenomicsSection from './components/sections/TokenomicsSection';
import RoadmapSection from './components/sections/RoadmapSection';
import ContactSection from './components/sections/ContactSection';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Navigation */}
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <img 
                  src="/logo.svg" 
                  alt="CryptoHedgeFund Logo" 
                  className="h-10 w-auto" 
                />
                <span className="ml-3 text-xl font-bold">CryptoHedgeFund</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-10">
                <a href="#features" className="text-sm font-medium hover:text-blue-400 transition-colors">Features</a>
                <a href="#technology" className="text-sm font-medium hover:text-blue-400 transition-colors">Technology</a>
                <a href="#tokenomics" className="text-sm font-medium hover:text-blue-400 transition-colors">Tokenomics</a>
                <a href="#roadmap" className="text-sm font-medium hover:text-blue-400 transition-colors">Roadmap</a>
                <a href="#contact" className="text-sm font-medium hover:text-blue-400 transition-colors">Contact</a>
              </nav>
              
              {/* CTA Button */}
              <div className="hidden md:flex items-center">
                <a 
                  href="https://app.cryptohedgefund.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Launch App
                </a>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  className="text-gray-200 hover:text-white focus:outline-none"
                >
                  {mobileMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#features" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#technology" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Technology
              </a>
              <a 
                href="#tokenomics" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tokenomics
              </a>
              <a 
                href="#roadmap" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmap
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="https://app.cryptohedgefund.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Launch App
              </a>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <FeaturesSection />
          <TechnologySection />
          <TokenomicsSection />
          <RoadmapSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and info */}
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center">
                  <img 
                    src="/logo.svg" 
                    alt="CryptoHedgeFund Logo" 
                    className="h-8 w-auto" 
                  />
                  <span className="ml-2 text-lg font-bold">CryptoHedgeFund</span>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  AI-powered crypto investment platform. Transforming DeFi through advanced analytics and automated strategies.
                </p>
              </div>
              
              {/* Links */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Product
                </h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#features" className="text-sm text-gray-400 hover:text-white">Features</a></li>
                  <li><a href="#technology" className="text-sm text-gray-400 hover:text-white">Technology</a></li>
                  <li><a href="#tokenomics" className="text-sm text-gray-400 hover:text-white">Tokenomics</a></li>
                  <li><a href="#roadmap" className="text-sm text-gray-400 hover:text-white">Roadmap</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">Whitepaper</a></li>
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">Documentation</a></li>
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">FAQs</a></li>
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">Cookies</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 border-t border-gray-800 pt-8">
              <p className="text-sm text-gray-400 text-center">
                &copy; {new Date().getFullYear()} CryptoHedgeFund. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App; 