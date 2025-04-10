"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { whitepaperData } from '@/data/whitepaperData';
import WhitepaperSection from '@/components/whitepaper/WhitepaperSection';
import WhitepaperNav from '@/components/whitepaper/WhitepaperNav';

export default function WhitepaperPage() {
  const [activeSection, setActiveSection] = useState(whitepaperData[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Observer to update active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -100px 0px',
        threshold: 0.3,
      }
    );

    const sectionElements = document.querySelectorAll('.whitepaper-section');
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Track scroll progress and show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      
      // Show back to top button after 300px scroll
      setShowBackToTop(winScroll > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-1/2 h-1/2 bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Reading progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-blue-500"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md z-40 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-white">DefiKSA</span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/#technology" className="text-gray-300 hover:text-white transition-colors">
                Technology
              </Link>
              <Link href="/#tokenomics" className="text-gray-300 hover:text-white transition-colors">
                Tokenomics
              </Link>
              <Link href="/#roadmap" className="text-gray-300 hover:text-white transition-colors">
                Roadmap
              </Link>
              <Link href="/whitepaper" className="text-blue-400 hover:text-blue-300 transition-colors">
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
            </div>
          </div>
        </div>
      </header>

      {/* Whitepaper Content */}
      <main className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CryptoHedgeFund <span className="text-blue-400">Whitepaper</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of our AI-powered crypto hedge fund platform, its technology, tokenomics, and roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation - Fixed on Desktop */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-32">
                <WhitepaperNav 
                  sections={whitepaperData} 
                  activeSection={activeSection} 
                  setActiveSection={setActiveSection} 
                />
                
                <div className="mt-6 text-center">
                  <Link 
                    href="/" 
                    className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-[-4px]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-gray-800/30 rounded-xl p-6 md:p-10 backdrop-blur-sm border border-gray-700/30 shadow-xl">
                {whitepaperData.map((section) => (
                  <WhitepaperSection key={section.id} section={section} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 z-30 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">CryptoHedgeFund</h3>
              <p className="text-gray-400 mb-4">
                AI-powered crypto investment platform with advanced risk management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link href="/#features" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link href="/#technology" className="text-gray-400 hover:text-white">Technology</Link></li>
                <li><Link href="/#roadmap" className="text-gray-400 hover:text-white">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/whitepaper" className="text-gray-400 hover:text-white">Whitepaper</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} CryptoHedgeFund. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 