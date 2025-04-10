import React from 'react';
import { motion } from 'framer-motion';

const TechnologySection = () => {
  const architectureLayers = [
    {
      title: "AI & Machine Learning Core",
      items: [
        "LLM and VLM-powered cognitive processes",
        "DA and IPFS decentralized memory systems",
        "MOE characteristics task planning",
        "Verifiable AI inference execution"
      ],
      color: "bg-gradient-to-r from-purple-600 to-indigo-600",
      delay: 0.1
    },
    {
      title: "ORA Framework",
      items: [
        "OP Agent orchestration and execution",
        "Onchain AI Oracle (OAO) integration",
        "Multi-agent interaction protocol",
        "Onchain/Offchain action coordination"
      ],
      color: "bg-gradient-to-r from-blue-600 to-cyan-600",
      delay: 0.2
    },
    {
      title: "Blockchain Integration",
      items: [
        "AI Agent Contract Wallet deployment",
        "Verifiable smart contract execution",
        "Decentralized storage connections",
        "Cross-chain agent operations"
      ],
      color: "bg-gradient-to-r from-green-600 to-emerald-600",
      delay: 0.3
    },
    {
      title: "Security & Verification",
      items: [
        "OPML powered verifiable contract wallets",
        "Multi-agent consensus verification",
        "Decentralized execution auditing",
        "Context-aware security protocols"
      ],
      color: "bg-gradient-to-r from-red-600 to-orange-600",
      delay: 0.4
    },
  ];

  const [selectedMode, setSelectedMode] = React.useState('singleton');
  const [activeStackTab, setActiveStackTab] = React.useState<'all' | number>('all');
  const [expandedLayers, setExpandedLayers] = React.useState<number[]>([]);

  const toggleExpandedLayer = (index: number) => {
    if (expandedLayers.includes(index)) {
      setExpandedLayers(expandedLayers.filter((i) => i !== index));
    } else {
      setExpandedLayers([...expandedLayers, index]);
    }
  };

  return (
    <div className="py-20 px-4 bg-black/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-white/5 h-full"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ORA Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built on Verifiable <span className="text-gradient-blue">Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DefiKSA leverages the ORA Framework to ensure transparent, verifiable AI operations on the blockchain, providing a secure foundation for Sharia-compliant financial solutions.
            </p>
          </motion.div>
        </div>

        {/* Framework Visualization */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-20 glass-dark rounded-xl p-8 border border-gray-700 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="col-span-1">
              <h3 className="text-2xl font-bold mb-4">ORA Framework Architecture</h3>
              <p className="text-gray-300 mb-6">
                The ORA Framework enables AI agents to operate verifiably both onchain and offchain. This transparency and security are crucial for building trust and implementing the Sharia compliance rules embedded within DefiKSA agents.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium mr-3 mt-0.5">1</div>
                  <span className="text-gray-300">Onchain AI Agent Creation</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium mr-3 mt-0.5">2</div>
                  <span className="text-gray-300">OP Agent orchestration</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium mr-3 mt-0.5">3</div>
                  <span className="text-gray-300">Offchain and Onchain action coordination</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium mr-3 mt-0.5">4</div>
                  <span className="text-gray-300">AI Agent Contract Wallet execution</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium mr-3 mt-0.5">5</div>
                  <span className="text-gray-300">Multi-agent interaction and verification</span>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 h-full flex items-center justify-center">
              <div className="relative w-full max-w-2xl aspect-[16/9] bg-black/40 rounded-lg border border-gray-700/50 p-4 md:p-8">
                {/* Animated Framework Diagram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 relative">
                    {/* Center Circle - OP Agent */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-600/30 rounded-full flex items-center justify-center border-2 border-purple-500 shadow-lg shadow-purple-500/20 backdrop-blur-sm"
                    >
                      <div className="text-center">
                        <div className="font-bold text-lg">OP Agent</div>
                        <div className="text-xs opacity-80">Core</div>
                      </div>
                      
                      {/* Pulsing animation */}
                      <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-pulse-slow"></div>
                    </motion.div>
                    
                    {/* Connecting Lines to outer nodes */}
                    <div className="absolute inset-0">
                      {/* AI Agent Creation Node */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20, y: -20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="absolute top-0 left-0 flex flex-col items-center"
                      >
                        <div className="w-24 h-24 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500 backdrop-blur-sm">
                          <div className="text-center">
                            <div className="font-medium text-sm">Onchain</div>
                            <div className="text-xs opacity-80">Agent Creation</div>
                          </div>
                        </div>
                        <div className="h-16 w-px bg-gradient-to-b from-blue-500 to-purple-500 mt-2 animate-pulse-slow"></div>
                      </motion.div>
                      
                      {/* Verifiable AI Inference Node */}
                      <motion.div 
                        initial={{ opacity: 0, x: 20, y: -20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="absolute top-0 right-0 flex flex-col items-center"
                      >
                        <div className="w-24 h-24 bg-green-600/20 rounded-xl flex items-center justify-center border border-green-500 backdrop-blur-sm">
                          <div className="text-center">
                            <div className="font-medium text-sm">Verifiable</div>
                            <div className="text-xs opacity-80">AI Inference</div>
                          </div>
                        </div>
                        <div className="h-16 w-px bg-gradient-to-b from-green-500 to-purple-500 mt-2 animate-pulse-slow"></div>
                      </motion.div>
                      
                      {/* OAO Node */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="absolute bottom-0 left-0 flex flex-col items-center"
                      >
                        <div className="h-16 w-px bg-gradient-to-t from-red-500 to-purple-500 mb-2 animate-pulse-slow"></div>
                        <div className="w-24 h-24 bg-red-600/20 rounded-xl flex items-center justify-center border border-red-500 backdrop-blur-sm">
                          <div className="text-center">
                            <div className="font-medium text-sm">OAO</div>
                            <div className="text-xs opacity-80">(AI Oracle)</div>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Contract Wallet Node */}
                      <motion.div 
                        initial={{ opacity: 0, x: 20, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute bottom-0 right-0 flex flex-col items-center"
                      >
                        <div className="h-16 w-px bg-gradient-to-t from-cyan-500 to-purple-500 mb-2 animate-pulse-slow"></div>
                        <div className="w-24 h-24 bg-cyan-600/20 rounded-xl flex items-center justify-center border border-cyan-500 backdrop-blur-sm">
                          <div className="text-center">
                            <div className="font-medium text-sm">Agent</div>
                            <div className="text-xs opacity-80">Contract Wallet</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Data flow animation */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-full relative overflow-hidden">
                    <div className="absolute h-1 w-1 rounded-full bg-blue-500 top-1/4 left-0 animate-[dataFlow_8s_linear_infinite]"></div>
                    <div className="absolute h-1 w-1 rounded-full bg-green-500 top-1/4 right-0 animate-[dataFlow_7s_linear_1s_infinite]"></div>
                    <div className="absolute h-1 w-1 rounded-full bg-purple-500 bottom-1/4 left-0 animate-[dataFlow_9s_linear_2s_infinite]"></div>
                    <div className="absolute h-1 w-1 rounded-full bg-red-500 bottom-1/4 right-0 animate-[dataFlow_6s_linear_3s_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Operation Modes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-6">ORA Agent Operation Modes</h3>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10 max-w-4xl mx-auto"
          >
            <p className="text-gray-300">
              The ORA Framework enables AI agents to operate in different modes, each optimized for specific types of tasks and complexity levels. 
              These operation modes determine how agents interact with blockchain networks, process information, and collaborate with other agents 
              in the ecosystem.
            </p>
          </motion.div>
          
          {/* Interactive Mode Selector */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-800/70 p-1 rounded-xl backdrop-blur-sm border border-gray-700">
                <button 
                  onClick={() => setSelectedMode('singleton')}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedMode === 'singleton' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Singleton Mode
                </button>
                <button 
                  onClick={() => setSelectedMode('swarm')}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedMode === 'swarm' 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Swarm Mode
                </button>
              </div>
            </div>
            
            {/* Mode Description */}
            <motion.div
              key={selectedMode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-8"
            >
              <h4 className={`text-xl font-bold mb-2 ${
                selectedMode === 'singleton' ? 'text-blue-400' : 'text-cyan-400'
              }`}>
                {selectedMode === 'singleton' ? 'Singleton Mode' : 'Swarm Mode'}
              </h4>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {selectedMode === 'singleton'
                  ? 'A single OP Agent operates autonomously to execute specific tasks with a dedicated Contract Wallet, ideal for focused financial operations.'
                  : 'Multiple specialized AI agents work collectively through the OAO system, enabling complex multi-step operations with enhanced security and verification.'}
              </p>
            </motion.div>
          </div>
          
          {/* Mode Details - Using Conditional Rendering */}
          <div className="grid grid-cols-1 gap-8">
            {/* Singleton Mode */}
            {selectedMode === 'singleton' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 px-6">
                  <h4 className="text-xl font-bold">Singleton Mode Architecture</h4>
                </div>
                <div className="p-6 bg-gray-800/50">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="mb-4">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          In Singleton Mode, a single OP Agent operates autonomously to execute specific tasks with a dedicated Contract Wallet. 
                          This mode is optimized for focused operations requiring deep expertise in a particular domain, 
                          such as yield optimization or risk assessment for a specific portfolio.
                        </p>
                      </div>
                      
                      <div className="flex flex-col space-y-4 mt-5">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium">Cognitive Processing</h5>
                            <p className="text-sm text-gray-400">LLM/VLM brain, DA/IPFS memory systems, MOE task planning for specialized expertise</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium">Perception & Analysis</h5>
                            <p className="text-sm text-gray-400">Multi-modal inputs including market data, protocol conditions, and chain analysis</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium">Verifiable Execution</h5>
                            <p className="text-sm text-gray-400">Direct onchain actions through Contract Wallet with verifiable AI inference</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium">System Integration</h5>
                            <p className="text-sm text-gray-400">Self-contained wallet component with access to verified DeFi protocols</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="p-4 bg-black/20 rounded-xl border border-gray-700/50">
                        <h5 className="text-blue-400 font-medium mb-3">Architecture Highlights</h5>
                        <ul className="text-sm text-gray-300 space-y-3">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Single OP Agent with dedicated Contract Wallet</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Direct onchain execution with verification</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Lower resource overhead, faster decision execution</span>
                          </li>
                        </ul>
                        
                        <div className="mt-5 pt-4 border-t border-gray-700">
                          <h6 className="text-sm font-medium text-blue-400 mb-2">Ideal Use Cases:</h6>
                          <ul className="text-xs text-gray-400 space-y-1 list-disc pl-4">
                            <li>Personalized portfolio management and optimization</li>
                            <li>Focused protocol risk analysis and monitoring</li>
                            <li>Single-chain specialized DeFi strategies</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-5 flex justify-center">
                        <div className="relative w-40 h-40 bg-blue-900/10 rounded-full border border-blue-500/30 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-blue-600/20 border-2 border-blue-500 flex items-center justify-center animate-pulse-slow">
                            <div className="text-center">
                              <div className="font-medium text-blue-400">OP Agent</div>
                              <div className="text-xs text-gray-400">Singleton</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Swarm Mode */}
            {selectedMode === 'swarm' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-4 px-6">
                  <h4 className="text-xl font-bold">Swarm Mode Architecture</h4>
                </div>
                <div className="p-6 bg-gray-800/50">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="mb-4">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Swarm Mode coordinates multiple specialized AI agents working collectively through the OAO (Onchain AI Oracle) system. 
                          This distributed intelligence approach enables complex, multi-step operations across multiple chains and protocols with 
                          consensus-based verification and enhanced security through agent specialization.
                        </p>
                      </div>
                      
                      <div className="mb-5">
                        <h5 className="font-medium mb-2">Multi-Agent Networks</h5>
                        <p className="text-sm text-gray-400">Each agent focuses on a specific aspect of financial operations:</p>
                      </div>
                      
                      <div className="flex flex-col space-y-5">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium">Collective Intelligence</h5>
                            <p className="text-sm text-gray-400">
                              Agent specialization with consensus-based decision making. Each agent brings expertise in specific domains 
                              (market analysis, risk assessment, execution, monitoring) for more robust system performance.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium">Enhanced Security & Verification</h5>
                            <p className="text-sm text-gray-400">
                              Multi-agent consensus verification through the OAO system ensures greater security and 
                              reliability for complex financial operations across blockchains.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="p-4 bg-black/20 rounded-xl border border-gray-700/50">
                        <h5 className="text-cyan-400 font-medium mb-3">Architecture Highlights</h5>
                        <ul className="text-sm text-gray-300 space-y-3">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-cyan-500 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Distributed processing across specialized AI agents</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-cyan-500 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>OAO (Onchain AI Oracle) mediated consensus</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-cyan-500 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Higher security for mission-critical operations</span>
                          </li>
                        </ul>
                        
                        <div className="mt-5 pt-4 border-t border-gray-700">
                          <h6 className="text-sm font-medium text-cyan-400 mb-2">Ideal Use Cases:</h6>
                          <ul className="text-xs text-gray-400 space-y-1 list-disc pl-4">
                            <li>Cross-chain arbitrage and investment strategies</li>
                            <li>Complex multi-step DeFi operations requiring oversight</li>
                            <li>Mission-critical financial transactions</li>
                            <li>Enterprise-grade portfolio management</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-5">
                        <div className="grid grid-cols-3 gap-2">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="aspect-square rounded-lg bg-blue-900/30 border border-blue-500/30 flex items-center justify-center relative group">
                              <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center animate-floatSlow">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </div>
                              {i !== 0 && i !== 5 && (
                                <div className="absolute inset-0 pointer-events-none">
                                  <div className="absolute top-1/2 right-0 w-full h-px bg-blue-500/50"></div>
                                </div>
                              )}
                              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity top-full mt-1 text-xs text-center text-blue-400 whitespace-nowrap px-1">
                                {["Analyst", "Executor", "Monitor", "Risk", "Strategy", "Coordinator"][i]}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
                  
          {/* Interactive Feature Comparison Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 p-6 border border-gray-700 rounded-xl bg-gray-800/30"
          >
            <h4 className="text-xl font-medium mb-6 text-center">Mode Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Singleton Mode</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">Swarm Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/30">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Architecture</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Single OP Agent</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Multiple Specialized Agents</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Execution Model</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Direct contract interactions</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Consensus-mediated via OAO</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Cognitive Processing</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Self-contained</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Distributed across agents</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Security Level</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Standard verification</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Enhanced multi-agent verification</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Resource Requirements</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Lower</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Higher</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Best For</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Focused operations, single chain</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Complex operations, cross-chain</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Technology Stack Layers */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-6">Technology Stack</h3>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10 max-w-4xl mx-auto"
          >
            <p className="text-gray-300">
              Our platform combines cutting-edge technologies across multiple domains to create a secure, 
              efficient bridge between AI and blockchain networks.
            </p>
          </motion.div>
          
          {/* Technology Stack Filter Tabs */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <div className="inline-flex bg-gray-800/70 p-1 rounded-xl backdrop-blur-sm border border-gray-700">
              {['All Layers', ...architectureLayers.map(layer => layer.title)].map((tab, index) => (
                <button 
                  key={tab}
                  onClick={() => setActiveStackTab(index === 0 ? 'all' : index - 1)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    (activeStackTab === 'all' && index === 0) || 
                    (activeStackTab !== 'all' && activeStackTab === index - 1)
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architectureLayers
              .filter((_, index) => activeStackTab === 'all' || activeStackTab === index)
              .map((layer, index) => {
                // Define static color classes for each card
                const cardColors = [
                  { 
                    gradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
                    hover: "hover:border-purple-600/80",
                    icon: "text-purple-500",
                    title: "text-purple-400"
                  },
                  { 
                    gradient: "bg-gradient-to-r from-blue-600 to-cyan-600",
                    hover: "hover:border-blue-600/80",
                    icon: "text-blue-500",
                    title: "text-blue-400"
                  },
                  {
                    gradient: "bg-gradient-to-r from-green-600 to-emerald-600",
                    hover: "hover:border-green-600/80",
                    icon: "text-green-500",
                    title: "text-green-400"
                  },
                  {
                    gradient: "bg-gradient-to-r from-red-600 to-orange-600",
                    hover: "hover:border-red-600/80",
                    icon: "text-red-500",
                    title: "text-red-400"
                  }
                ];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    onClick={() => toggleExpandedLayer(index)}
                    className={`rounded-xl overflow-hidden border ${cardColors[index].hover} transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                      expandedLayers.includes(index) ? 'border-gray-500' : 'border-gray-700'
                    }`}
                  >
                    <div className={`${layer.color} py-4 px-6 flex justify-between items-center`}>
                      <h4 className="text-xl font-bold">{layer.title}</h4>
                      <svg 
                        className={`h-5 w-5 text-white transform transition-transform ${expandedLayers.includes(index) ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    <motion.div 
                      className="bg-gray-800/50 overflow-hidden"
                      initial={false}
                      animate={{ 
                        height: expandedLayers.includes(index) ? 'auto' : 'auto',
                        opacity: 1 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`p-6 ${expandedLayers.includes(index) ? 'border-b border-gray-700' : ''}`}>
                        <ul className="space-y-3">
                          {layer.items.map((item, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-center space-x-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.05 * i }}
                            >
                              <svg className={`h-5 w-5 ${cardColors[index].icon} flex-shrink-0`} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-300">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      {expandedLayers.includes(index) && (
                        <div className="p-6 bg-gray-900/30">
                          <h5 className={`${cardColors[index].title} font-medium mb-3`}>Layer Integration</h5>
                          <p className="text-sm text-gray-400 mb-4">
                            {[
                              "Provides cognitive processing and verifiable AI inference for all system operations.",
                              "Orchestrates agent interactions and provides the bridge between blockchain and AI systems.",
                              "Enables secure execution of agent operations with cross-chain capabilities.",
                              "Ensures all operations are verifiable, secure, and consensually validated."
                            ][index]}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 items-center">
                            <span className="text-xs text-gray-500">Interacts with:</span>
                            {architectureLayers.map((otherLayer, otherIndex) => {
                              if (otherIndex === index) return null;
                              
                              const interactionColors = [
                                { bg: "bg-purple-500/20", text: "text-purple-400", hover: "hover:bg-purple-500/30" },
                                { bg: "bg-blue-500/20", text: "text-blue-400", hover: "hover:bg-blue-500/30" },
                                { bg: "bg-green-500/20", text: "text-green-400", hover: "hover:bg-green-500/30" },
                                { bg: "bg-red-500/20", text: "text-red-400", hover: "hover:bg-red-500/30" }
                              ];
                              
                              return (
                                <button 
                                  key={otherIndex}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveStackTab(otherIndex);
                                    if (!expandedLayers.includes(otherIndex)) {
                                      toggleExpandedLayer(otherIndex);
                                    }
                                  }}
                                  className={`px-2 py-1 text-xs rounded ${interactionColors[otherIndex].bg} ${interactionColors[otherIndex].text} ${interactionColors[otherIndex].hover}`}
                                >
                                  {otherLayer.title.split(' ')[0]}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
          </div>
          
          {/* Call to action instead of the Technology Integration Diagram */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-gray-300 mb-6">
              Our technology stack components work together to create a seamless bridge between AI intelligence and blockchain execution.
            </p>
          </motion.div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="/whitepaper" className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg transition-all hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-600/20">
              <span className="font-semibold">Read Technical Whitepaper</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection; 