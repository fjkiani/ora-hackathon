"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState, useEffect, Suspense } from 'react';

// Dynamic imports for all components with correct paths
const FeaturesSection = dynamic(() => import('@/components/sections/FeaturesSection'), {
  loading: () => <div className="py-20 text-center">Loading features...</div>,
});

const TechnologySection = dynamic(() => import('@/components/sections/TechnologySection'), {
  loading: () => <div className="py-20 text-center">Loading technology information...</div>,
});

const TokenomicsSection = dynamic(() => import('@/components/sections/TokenomicsSection'), {
  loading: () => <div className="py-20 text-center">Loading tokenomics information...</div>,
});

const RoadmapSection = dynamic(() => import('@/components/sections/RoadmapSection'), {
  loading: () => <div className="py-20 text-center">Loading roadmap information...</div>,
});

const AboutUsSection = dynamic(() => import('@/components/sections/AboutUsSection'), {
  loading: () => <div className="py-20 text-center">Loading about us information...</div>,
});

const TeamSection = dynamic(() => import('@/components/sections/TeamSection'), {
  loading: () => <div className="py-20 text-center">Loading team information...</div>,
});

const WhitepaperPreview = dynamic(() => import('@/components/WhitepaperPreview'), {
  loading: () => <div className="py-20 text-center">Loading whitepaper preview...</div>,
});

const AgentShowcase = dynamic(() => import('@/components/sections/AgentShowcase'), {
  loading: () => <div className="py-20 text-center">Loading agent showcase...</div>,
});

const MobileMenu = dynamic(() => import('@/components/MobileMenu'), {
  loading: () => null,
});

const StrategyPreview = dynamic(() => import('@/components/sections/StrategyPreview'), {
  loading: () => <div className="py-20 text-center">Loading Strategy Builder...</div>,
});

const ProtocolMonitoringPreview = dynamic(() => import('@/components/sections/ProtocolMonitoringPreview'), {
  loading: () => <div className="py-20 text-center">Loading Protocol Monitoring Dashboard...</div>,
});

const WalletIntegrationPreview = dynamic(() => import('@/components/sections/WalletIntegrationPreview'), {
  loading: () => <div className="py-20 text-center">Loading Wallet Integration...</div>,
});

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Handle scroll events for header transparency and active section
  useEffect(() => {
    const handleScroll = () => {
      // Handle header background
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Handle active section highlight
      const sections = [
        'about',
        'features',
        'technology',
        'agents',
        'strategy',
        'monitoring',
        'wallet',
        'tokenomics',
        'roadmap',
        'team'
      ];
      
      // Find the section that is currently most visible in the viewport
      let currentSection = '';
      let maxVisibility = 0;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > 0;
          
          if (isVisible) {
            // Calculate how much of the section is visible (as a ratio of the viewport height)
            const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
            const visibilityRatio = visibleHeight / window.innerHeight;
            
            if (visibilityRatio > maxVisibility) {
              maxVisibility = visibilityRatio;
              currentSection = section;
            }
          }
        }
      });
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Run once on mount to set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection]);

  // Function to check if a section is active
  const isActive = (section: string) => {
    const element = document.getElementById(section);
    if (!element) return false;
    return activeSection === section;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="decoration-circle w-[500px] h-[500px] -left-[200px] -top-[200px] opacity-20"></div>
        <div className="decoration-circle w-[300px] h-[300px] right-[10%] top-[20%] opacity-10"></div>
        <div className="decoration-circle w-[400px] h-[400px] left-[5%] bottom-[30%] opacity-15"></div>
        <div className="decoration-circle w-[600px] h-[600px] right-[10%] -bottom-[300px] opacity-20"></div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Header/Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-black/10 py-2' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-xl">DK</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">DefiKSA</span>
                  
                </div>
              </Link>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-gray-700/50 shadow-inner shadow-black/10 mx-4">
                <div className="flex space-x-1">
                  <Link href="#about" className={`nav-link px-4 py-2 rounded-full text-sm font-medium ${isActive('about') ? 'text-white bg-gray-700/50' : 'hover:text-white hover:bg-gray-700/50 transition-all duration-200'}`}>
                    About
                  </Link>
                  <Link href="#features" className={`nav-link px-4 py-2 rounded-full text-sm font-medium ${isActive('features') ? 'text-white bg-gray-700/50' : 'hover:text-white hover:bg-gray-700/50 transition-all duration-200'}`}>
                    Features
                  </Link>
                  <Link href="#technology" className={`nav-link px-4 py-2 rounded-full text-sm font-medium ${isActive('technology') ? 'text-white bg-gray-700/50' : 'hover:text-white hover:bg-gray-700/50 transition-all duration-200'}`}>
                    Technology
                  </Link>
                  <Link href="#agents" className={`nav-link px-4 py-2 rounded-full text-sm font-medium ${isActive('agents') ? 'text-white bg-gray-700/50' : 'hover:text-white hover:bg-gray-700/50 transition-all duration-200'}`}>
                    Agents
                  </Link>
                  <div className="group relative">
                    <button className={`nav-link px-4 py-2 rounded-full text-sm font-medium ${isActive('strategy') ? 'text-white bg-gray-700/50' : 'hover:text-white hover:bg-gray-700/50 transition-all duration-200 flex items-center'}`}>
                      Platform
                      <svg className="ml-1 h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 border border-gray-700 backdrop-blur-lg opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                      <Link href="#strategy" className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/70 hover:text-white ${isActive('strategy') ? 'bg-gray-700/70 text-white' : ''}`}>
                        Strategy Builder
                      </Link>
                      <Link href="#monitoring" className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/70 hover:text-white ${isActive('monitoring') ? 'bg-gray-700/70 text-white' : ''}`}>
                        Protocol Monitoring
                      </Link>
                      <Link href="#wallet" className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/70 hover:text-white ${isActive('wallet') ? 'bg-gray-700/70 text-white' : ''}`}>
                        Wallet Integration
                      </Link>
                    </div>
                  </div>
                  <Link href="#tokenomics" className={`nav-link px-4 py-2 rounded-full text-sm font-medium ${isActive('tokenomics') ? 'text-white bg-gray-700/50' : 'hover:text-white hover:bg-gray-700/50 transition-all duration-200'}`}>
                    Tokenomics
                  </Link>
                  <Link href="#roadmap" className={`nav-link px-4 py-2 rounded-full text-sm font-medium ${isActive('roadmap') ? 'text-white bg-gray-700/50' : 'hover:text-white hover:bg-gray-700/50 transition-all duration-200'}`}>
                    Roadmap
                  </Link>
                  <Link href="#team" className={`nav-link px-4 py-2 rounded-full text-sm font-medium ${isActive('team') ? 'text-white bg-gray-700/50' : 'hover:text-white hover:bg-gray-700/50 transition-all duration-200'}`}>
                    Team
                  </Link>
                </div>
              </div>
              <Link href="/whitepaper" className="nav-link ml-2 px-5 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white hover:bg-blue-600/20 transition-all duration-200">
                Whitepaper
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white p-2 rounded-full hover:bg-blue-600/20 transition-all duration-200 border border-blue-500/20 hover:border-blue-500/50"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center ml-4">
              <a 
                href="https://app.cryptohedgefund.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/30 font-medium text-sm flex items-center"
              >
                Launch App
                <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              DefiKSA: <span className="text-gradient-blue">Intelligent</span> <span className="text-gradient-purple">Sharia-Compliant</span><br/> Financial Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto animate-slideUp">
              Leveraging AI and blockchain for secure, transparent financial solutions tailored for the KSA market, designed with Sharia principles in mind.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn">
              <a 
                href="https://app.cryptohedgefund.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary shadow-xl hover:shadow-blue-600/20"
              >
                Launch Application
              </a>
              <Link 
                href="/whitepaper" 
                className="btn btn-secondary"
              >
                Read Whitepaper
              </Link>
            </div>
          </div>
          
          {/* Platform Bridge Description - Enhanced with better layout */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="glass-dark p-8 rounded-xl border border-blue-500/20 transform md:translate-y-4 hover:translate-y-0 transition-transform duration-300">
              <div className="text-blue-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Financial Principles</h3>
              <p className="text-gray-300">
                DefiKSA integrates established risk management and financial structuring principles, adapted for Sharia compliance, ensuring reliability and security.
              </p>
            </div>
            
            <div className="glass-dark p-8 rounded-xl border border-purple-500/20 md:-translate-y-6 hover:translate-y-0 transition-transform duration-300 md:z-20">
              <div className="text-purple-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Intelligent AI Engine</h3>
              <p className="text-gray-300">
                Our AI engine powers autonomous agents that operate within Sharia guidelines, analyzing data, managing compliance, and executing permissible financial operations efficiently.
              </p>
            </div>
            
            <div className="glass-dark p-8 rounded-xl border border-blue-500/20 transform md:translate-y-4 hover:translate-y-0 transition-transform duration-300">
              <div className="text-blue-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Decentralized Finance</h3>
              <p className="text-gray-300">
                Leveraging the power of DeFi protocols, our platform provides a comprehensive dashboard for monitoring protocols, assessing risks, and creating customized AI agents across multiple chains.
              </p>
            </div>
          </div>
        </div>
        
        {/* Hero decorations */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
      </section>
      
      {/* Features Section */}
      <section id="features">
        <FeaturesSection />
      </section>
      
      {/* Technology Section */}
      <section id="technology">
        <TechnologySection />
      </section>
      
      {/* Agent Showcase Section */}
      <section id="agents">
        <Suspense fallback={<div className="py-20 text-center">Loading AI Agents...</div>}>
          <AgentShowcase />
        </Suspense>
      </section>
      
      {/* Strategy Preview Section */}
      <section id="strategy">
        <Suspense fallback={<div className="py-20 text-center">Loading Strategy Builder...</div>}>
          <StrategyPreview />
        </Suspense>
      </section>
      
      {/* Protocol Monitoring Preview Section */}
      <section id="monitoring">
        <Suspense fallback={<div className="py-20 text-center">Loading Protocol Monitoring...</div>}>
          <ProtocolMonitoringPreview />
        </Suspense>
      </section>
      
      {/* Wallet Integration Preview Section */}
      <section id="wallet">
        <Suspense fallback={<div className="py-20 text-center">Loading Wallet Integration...</div>}>
          <WalletIntegrationPreview />
        </Suspense>
      </section>
      
      {/* Tokenomics Section */}
      <section id="tokenomics">
        <TokenomicsSection />
      </section>
      
      {/* Roadmap Section */}
      <section id="roadmap">
        <RoadmapSection />
      </section>
      
      {/* About Us Section */}
      <section id="about">
        <AboutUsSection />
      </section>
      
      {/* Team Section */}
      <section id="team">
        <Suspense fallback={<div className="py-20 text-center">Loading Team...</div>}>
          <TeamSection />
        </Suspense>
      </section>
      
      {/* Whitepaper Preview */}
      <section id="whitepaper">
        <WhitepaperPreview />
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-700 to-blue-600 relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Crypto Investment Strategy?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join our platform today and experience the power of AI-driven investment strategies with institutional-grade risk management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://app.cryptohedgefund.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block shadow-xl hover:shadow-white/20"
            >
              Launch Application
            </a>
            <Link 
              href="/whitepaper" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
            >
              Read Whitepaper
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="font-bold text-xl mb-5">DefiKSA</h3>
              <p className="text-gray-400 mb-6">
                DefiKSA provides intelligent, Sharia-compliant financial solutions powered by AI and blockchain technology, tailored for the KSA market.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0,010 10.64v.052a4.105 4.105 0,0,0,3.292 4.022,4.095 4.095,0,0,1-1.853.07 4.108 4.108,0,0,0,3.834 2.85A8.233 8.233,0,0,1,2 19.008a11.616 11.616,0,0,0,6.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Platform</h4>
              <ul className="space-y-3">
                <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#technology" className="text-gray-400 hover:text-white transition-colors">Technology</Link></li>
                <li><Link href="#roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</Link></li>
                <li><Link href="#team" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Resources</h4>
              <ul className="space-y-3">
                <li><Link href="/whitepaper" className="text-gray-400 hover:text-white transition-colors">Whitepaper</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Connect</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} DefiKSA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-6 bottom-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all z-30"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
