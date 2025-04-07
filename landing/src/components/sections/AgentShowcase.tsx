import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AgentMetric {
  label: string;
  value: string | number;
  unit?: string;
}

interface Agent {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'paused' | 'error';
  protocols: string[];
  description: string;
  metrics: AgentMetric[];
}

export default function AgentShowcase() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [agents] = useState<Agent[]>([
    {
      id: 'agent-001',
      name: 'ETH/USDC Risk Monitor',
      type: 'Risk Assessment',
      status: 'active',
      protocols: ['Uniswap V3', 'Aave'],
      description: 'Monitors ETH/USDC liquidity pools for risk factors and provides real-time alerts on market conditions.',
      metrics: [
        { label: 'Transactions Monitored', value: 1245 },
        { label: 'Alerts Generated', value: 8 },
        { label: 'Success Rate', value: 99.2, unit: '%' }
      ]
    },
    {
      id: 'agent-002',
      name: 'BTC/ETH Yield Optimizer',
      type: 'Yield Strategy',
      status: 'paused',
      protocols: ['Curve', 'Convex', 'Yearn'],
      description: 'Automatically rebalances BTC/ETH positions across protocols to maximize yield while managing risk exposure.',
      metrics: [
        { label: 'Transactions Executed', value: 28 },
        { label: 'Yield Generated', value: 3.4, unit: '%' },
        { label: 'Gas Optimization', value: 12.5, unit: '%' }
      ]
    },
    {
      id: 'agent-003',
      name: 'ORA/USDC Liquidity Manager',
      type: 'Liquidity Management',
      status: 'active',
      protocols: ['Balancer', 'Uniswap V3'],
      description: 'Manages ORA/USDC liquidity positions by optimizing price ranges and fee collection strategies.',
      metrics: [
        { label: 'Rebalances', value: 12 },
        { label: 'Fees Collected', value: 245.8, unit: 'USDC' },
        { label: 'Impermanent Loss', value: -0.8, unit: '%' }
      ]
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
          See how our autonomous AI agents work 24/7 to monitor, optimize, and execute your crypto strategies.
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

                <p className="text-gray-300 mb-6">
                  {currentAgent.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Protocols</h4>
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

                <h4 className="text-lg font-semibold mb-3">Performance Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentAgent.metrics.map((metric, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-lg text-center"
                    >
                      <div className="text-2xl font-bold text-blue-400">
                        {typeof metric.value === 'number' ? metric.value.toFixed(1) : metric.value}
                        {metric.unit}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                  <div className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">How it works</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    This AI agent autonomously monitors blockchain data, makes decisions based on market conditions, and executes strategies according to predefined parameters. All actions are verifiable on-chain and can be customized to your risk tolerance.
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
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
            Our platform enables you to create, customize, and monitor AI agents that operate 24/7 on your behalf, executing strategies and managing risk while you retain full control.
          </p>
        </div>
      </div>
    </div>
  );
} 