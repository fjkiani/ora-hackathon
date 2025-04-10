import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Agent {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'paused' | 'error';
  protocols: string[];
  problemStatement: string;
  howItWorksCompliant: string;
  keyBenefits: string;
}

export default function AgentShowcase() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [agents] = useState<Agent[]>([
    {
      id: 'agent-001',
      name: 'Halal Asset Screener',
      type: 'Compliance Monitoring',
      status: 'active',
      protocols: ['Cross-Chain Data Feeds', 'AAOIFI Standards API'],
      problemStatement: 'Ensuring investments align with Sharia principles is complex and time-consuming, requiring constant monitoring of assets against specific criteria (e.g., avoiding businesses involved in prohibited activities, checking debt levels).',
      howItWorksCompliant: 'This agent utilizes real-time data feeds and pre-defined Sharia screening parameters (based on standards like AAOIFI) to automatically analyze assets. It checks business activities, financial ratios (like debt-to-equity), and other relevant factors to flag potentially non-compliant assets, without engaging in prohibited speculation (Maysir) or excessive uncertainty (Gharar).',
      keyBenefits: 'Automates compliance checks, reduces manual effort, provides peace of mind, helps maintain a Sharia-compliant portfolio, provides clear flags for review.',
    },
    {
      id: 'agent-002',
      name: 'Profit-Sharing Pool Manager',
      type: 'Compliant Yield Generation',
      status: 'active',
      protocols: ['DefiKSA Compliant Pools', 'Verified DEXs'],
      problemStatement: 'Generating returns in DeFi often involves interest (Riba)-based lending/borrowing or liquidity provision in pools with impermanent loss risk and unclear profit sources, which may not be Sharia-compliant.',
      howItWorksCompliant: 'This agent interacts with vetted, Sharia-compliant pools designed around profit-and-loss sharing models (like Mudarabah or Musharakah). It allocates capital to ventures where profits are generated from permissible underlying economic activity (e.g., trading fees from compliant pairs, asset appreciation). It avoids interest and focuses on sharing actual business profits/losses according to agreed ratios.',
      keyBenefits: 'Provides access to potentially compliant yield generation, avoids interest (Riba), promotes risk-sharing, aligns with Islamic finance principles, offers transparency into profit sources.',
    },
    {
      id: 'agent-003',
      name: 'Zakat Calculation Assistant',
      type: 'Financial Obligation Tool',
      status: 'active',
      protocols: ['Portfolio Tracker', 'Nisab Data Feed'],
      problemStatement: 'Calculating Zakat accurately on diverse and fluctuating crypto assets can be challenging, requiring tracking asset types, hold times, and current market values against the Nisab threshold.',
      howItWorksCompliant: 'This agent securely tracks your designated portfolio assets, identifies Zakat-eligible assets (based on type and holding period), retrieves current market values and the applicable Nisab value, and calculates the potential Zakat due. It can integrate with compliant distribution channels or provide clear reports, ensuring the calculation adheres to established Fiqh principles.',
      keyBenefits: 'Simplifies Zakat calculation for crypto assets, improves accuracy, saves time, helps fulfill a religious obligation correctly, provides clear reporting for record-keeping or distribution.',
    }
  ]);

  useEffect(() => {
    // Auto-cycle through the agents
    const interval = setInterval(() => {
      setSelectedAgent(prevAgent => {
        if (!prevAgent) return agents[0].id;
        const currentIndex = agents.findIndex(agent => agent.id === prevAgent);
        const nextIndex = (currentIndex + 1) % agents.length;
        return agents[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [agents]);

  // Set initial selected agent
  useEffect(() => {
    if (!selectedAgent && agents.length > 0) {
      setSelectedAgent(agents[0].id);
    }
  }, [agents, selectedAgent]);

  const getStatusColor = (status: 'active' | 'paused' | 'error') => {
    switch(status) {
      case 'active':
        return 'bg-green-500';
      case 'paused':
        return 'bg-amber-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusAnimation = (status: 'active' | 'paused' | 'error') => {
    if (status === 'active') {
      return {
        scale: [1, 1.05, 1],
        opacity: [0.7, 1, 0.7],
        transition: { 
          repeat: Infinity, 
          duration: 2
        }
      };
    }
    return {};
  };

  const currentAgent = selectedAgent 
    ? agents.find(agent => agent.id === selectedAgent) 
    : null;

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient-blue">AI Agents in Action</span>
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Discover how DefiKSA's intelligent agents operate autonomously within Sharia guidelines to screen assets, manage portfolios, and execute compliant financial operations.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Agent Selection */}
          <div className="lg:col-span-2">
            <div className="glass-dark p-6 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-6">Available Agents</h3>
              
              <div className="space-y-4">
                {agents.map(agent => (
                  <div 
                    key={agent.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all hover:bg-blue-900/30 ${
                      agent.id === selectedAgent ? 'bg-blue-900/30 border-l-4 border-blue-500' : 'bg-gray-800/40'
                    }`}
                    onClick={() => setSelectedAgent(agent.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{agent.name}</div>
                      <motion.div 
                        className={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(agent.status)}`}
                        animate={getStatusAnimation(agent.status)}
                      >
                        {agent.status}
                      </motion.div>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{agent.type}</div>
                    <div className="text-xs text-gray-500 mt-2">
                      Protocols: {agent.protocols.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agent Details */}
          <div className="lg:col-span-3">
            {currentAgent && (
              <motion.div 
                className="glass-dark p-6 rounded-xl h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                key={currentAgent.id}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">{currentAgent.name}</h3>
                  <motion.div 
                    className={`px-3 py-1 rounded-full text-sm text-white ${getStatusColor(currentAgent.status)}`}
                    animate={getStatusAnimation(currentAgent.status)}
                  >
                    {currentAgent.status}
                  </motion.div>
                </div>

                {/* Display Detailed Content Instead of Description/Metrics */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">The Problem</h4>
                    <p className="text-gray-300 text-sm">
                      {currentAgent.problemStatement}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">How it Works (Sharia-Compliant)</h4>
                    <p className="text-gray-300 text-sm">
                      {currentAgent.howItWorksCompliant}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Key Benefits</h4>
                    <p className="text-gray-300 text-sm">
                      {currentAgent.keyBenefits}
                    </p>
                  </div>
                </div>

                {/* Keep Protocols Section */}
                <div className="mt-6 mb-6">
                  <h4 className="text-lg font-semibold mb-3">Integrates With</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentAgent.protocols.map(protocol => (
                      <span 
                        key={protocol} 
                        className="px-3 py-1 bg-blue-900/30 rounded-full text-sm"
                      >
                        {protocol}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <a 
                    href="https://app.cryptohedgefund.com" 
                    className="btn btn-primary inline-flex items-center"
                  >
                    Create Your Own Agent
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-6 max-w-2xl mx-auto">
            The DefiKSA platform enables you to create, customize, and monitor AI agents designed to operate within Sharia principles, executing compliant strategies and managing risk 24/7 on your behalf.
          </p>
        </div>
      </div>
    </div>
  );
} 