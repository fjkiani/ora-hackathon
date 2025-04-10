import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUsSection = () => {
  return (
    <div className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🏆 NYU Hackathon Winner
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pioneering <span className="text-gradient-blue">Intelligent Compliant Finance</span> for <span className="text-gradient-purple">KSA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            DefiKSA provides intelligent, Sharia-compliant financial solutions powered by AI and blockchain, specifically tailored for the needs of the Saudi Arabian market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              Our mission is to leverage cutting-edge AI and blockchain technology to build a secure, transparent, and efficient intelligent financial ecosystem, fully aligned with Sharia principles.
            </p>
            <p className="text-gray-300">
              Using the verifiable ORA Framework, our AI agents execute financial tasks autonomously while adhering to strict compliance rules, offering users unparalleled control and peace of mind.
            </p>
          </div>
          <div className="glass-dark p-8 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 opacity-50"></div>
            <div className="relative">
              <h4 className="text-xl font-bold mb-4">Key Problems We Solve</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mt-1 mr-3">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Navigating the complexity of Sharia compliance in digital finance.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mt-1 mr-3">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Lack of transparent and verifiable Islamic financial tools.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mt-1 mr-3">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Need for efficient and secure financial management tailored for KSA.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mt-1 mr-3">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Difficulty accessing permissible digital financial opportunities.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Agent Walkthrough Section (updated titles and text) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-gradient-blue">Your Journey with Compliant AI Agents</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-dark rounded-xl p-8 transform hover:-translate-y-2 transition-transform duration-300 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <h4 className="text-xl font-bold mb-4 mt-2">Define Compliant Goals</h4>
              <p className="text-gray-300 mb-4">
                Design your personalized AI agent by selecting permissible assets, setting Sharia-compliant risk parameters, and defining compliant financial objectives. No coding required.
              </p>
              <div className="mt-6 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
            </div>
            
            <div className="glass-dark rounded-xl p-8 transform hover:-translate-y-2 transition-transform duration-300 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <h4 className="text-xl font-bold mb-4 mt-2">Monitor Compliance & Performance</h4>
              <p className="text-gray-300 mb-4">
                Track your agent's actions, compliance status, and performance through an intuitive dashboard. Get real-time notifications about important events and compliance alerts.
              </p>
              <div className="mt-6 text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            
            <div className="glass-dark rounded-xl p-8 transform hover:-translate-y-2 transition-transform duration-300 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <h4 className="text-xl font-bold mb-4 mt-2">Optimize within Guidelines</h4>
              <p className="text-gray-300 mb-4">
                Receive AI-powered suggestions to improve your agent's strategy based on market conditions *and* Sharia guidelines. Implement adjustments with confidence.
              </p>
              <div className="mt-6 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-400 max-w-3xl mx-auto mb-6">
              All agent actions are verifiable on-chain, providing complete transparency while our AI assistant helps you understand compliant finance concepts and market trends.
            </p>
            <Link 
              href="#agents"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              See AI Agents in Action
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="https://app.cryptohedgefund.com" 
            className="btn btn-primary shadow-xl hover:shadow-blue-600/20 inline-flex items-center"
          >
            Start Using Our Platform
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection; 