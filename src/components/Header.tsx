import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">CryptoHedgeFund</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#technology" className="text-gray-300 hover:text-white transition-colors">
              Technology
            </Link>
            <Link href="#tokenomics" className="text-gray-300 hover:text-white transition-colors">
              Tokenomics
            </Link>
            <Link href="#roadmap" className="text-gray-300 hover:text-white transition-colors">
              Roadmap
            </Link>
            <Link href="#whitepaper" className="text-gray-300 hover:text-white transition-colors">
              Whitepaper
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <a 
              href="https://app.cryptohedgefund.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Launch App
            </a>
            
            {/* Mobile menu button */}
            <button className="md:hidden ml-4 text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 