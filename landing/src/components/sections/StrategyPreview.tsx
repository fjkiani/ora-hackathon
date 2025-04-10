import React from 'react';
import { motion } from 'framer-motion';

const StrategyPreview = () => {
  const strategySteps = [
    {
      type: 'Screen',
      protocol: 'Halal Asset Database',
      asset: 'All Portfolio Assets',
      amountDescription: 'Compliance Step',
      description: 'Ensure all initial assets meet Sharia compliance criteria (business activity, debt ratios).'
    },
    {
      type: 'Allocate',
      protocol: 'Mudarabah Pool (Verified)',
      asset: 'USDC/SAR Pair',
      amountDescription: '70% Allocation',
      description: 'Allocate capital to a verified profit-sharing investment pool.'
    },
    {
      type: 'Diversify',
      protocol: 'Sukuk Token (AAA Rated)',
      asset: 'Digital Sukuk XYZ',
      amountDescription: '30% Allocation',
      description: 'Invest in asset-backed, Sharia-compliant digital Sukuk for diversification.'
    },
    {
      type: 'Monitor',
      protocol: 'Compliance Oracle',
      asset: 'Ongoing Portfolio',
      amountDescription: 'Continuous',
      description: 'Continuously monitor portfolio and underlying assets for Sharia compliance drift.'
    }
  ];

  const strategyMetrics = [
    { label: 'Sharia Compliance Score', value: '98%', color: 'bg-green-500' },
    { label: 'Projected Profit Share (Annualized)', value: '6.5%', color: 'bg-blue-500' },
    { label: 'Risk Assessment (Qualitative)', value: 'Low-Medium', color: 'bg-yellow-500' }
  ];

  const suggestions = [
    'Consider increasing allocation to asset-backed Sukuk for lower risk profile.',
    'Review flagged asset [Asset Name] for potential non-compliance based on recent [Criteria] change.',
    'Explore diversification into [Compliant Sector/Asset Type] to enhance risk-adjusted returns.'
  ];

  return (
    <div className="py-20 px-4 relative overflow-hidden">
      <div className="absolute -left-20 top-40 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Design Your <span className="text-gradient-blue">Sharia-Compliant</span> Financial Strategy
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Our platform allows you to build, evaluate, and deploy automated financial strategies designed to operate within Sharia guidelines.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Strategy Builder UI */}
          <div className="lg:col-span-2">
            <div className="glass-dark p-6 rounded-xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Compliant Strategy Builder</h3>
                <div className="flex space-x-2">
                  <div className="px-3 py-1 text-sm font-medium bg-blue-900/50 rounded-full">
                    Allocation: 100%
                  </div>
                  <div className="px-3 py-1 text-sm font-medium bg-green-900/50 rounded-full">
                    Compliance: Target 95%+
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {strategySteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="p-4 bg-gray-800/70 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <div className="font-medium text-blue-400">
                        Step {index + 1}: {step.type.charAt(0).toUpperCase() + step.type.slice(1)}
                      </div>
                      <div className="text-sm">{step.amountDescription}</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-gray-300">{step.protocol} • {step.asset}</div>
                    </div>
                    <div className="mt-2 text-sm text-gray-400">{step.description}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50">
                  Add Strategy Step
                </button>
                <button className="ml-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Evaluate Strategy
                </button>
              </div>
            </div>
          </div>

          {/* Strategy Analysis */}
          <div className="lg:col-span-1">
            <div className="glass-dark p-6 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-6">Compliance & Performance Analysis</h3>
              
              <div className="space-y-4 mb-8">
                {strategyMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-2 h-12 ${metric.color} rounded-full mr-4`}></div>
                    <div>
                      <div className="text-gray-400 text-sm">{metric.label}</div>
                      <div className="text-xl font-semibold">{metric.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h4 className="font-semibold text-lg mb-4">AI Suggestions</h4>
              <div className="space-y-3 mb-6">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-300">{suggestion}</div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Powered by Jedi Labs</span>
                </div>
                <p className="text-xs text-gray-400">
                  Our AI analyzes your strategy against current market conditions and historical performance to provide personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://app.cryptohedgefund.com" 
            className="btn btn-primary shadow-xl hover:shadow-blue-600/20 inline-flex items-center"
          >
            Build Your Strategy
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StrategyPreview; 