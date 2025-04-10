import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TokenomicsSection = () => {
  // Token distribution data with added descriptions
  const tokenDistribution = [
    { category: 'Community & Ecosystem', percentage: 40, color: 'bg-blue-500', description: 'Funding grants, partnerships, and initiatives to grow the DefiKSA user base and compliant ecosystem.' },
    { category: 'Team & Advisors', percentage: 20, color: 'bg-purple-500', description: 'Allocated to the core team and advisors, subject to vesting schedules to ensure long-term commitment.' },
    { category: 'Treasury', percentage: 15, color: 'bg-cyan-500', description: 'Reserved for future platform development, operational costs, and strategic initiatives, governed by token holders.' },
    { category: 'Liquidity Provision', percentage: 15, color: 'bg-green-500', description: 'Used to ensure sufficient liquidity for the token on compliant exchanges and platforms.' },
    { category: 'Early Backers', percentage: 10, color: 'bg-yellow-500', description: 'Allocation for early supporters and investors who helped bootstrap the project.' },
  ];

  // Expanded Token utility features with careful phrasing
  const tokenUtility = [
    {
      title: 'Governance',
      description: 'Participate in platform governance, focusing on maintaining compliance and guiding ecosystem development.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Profit Share Distribution',
      description: 'Receive a share of distributable profits generated from permissible platform activities (e.g., compliant service fees), distributed proportionally.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Fee Discounts',
      description: 'Utilize tokens to receive discounts on fees charged for permissible platform services like advanced agent execution or reporting.',
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18M10.5 6v.75m0 3v.75m0 3v.75M10.5 18v-1.5m6-3V15M6 6v.75m0 3v.75m0 3V15m0 3V18m11.25-6H3.75M9 3.75H15" />
         </svg>
      ),
    },
    {
      title: 'Premium Features',
      description: 'Access advanced compliant AI models, strategy tools, and in-depth analytics.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  // State for hover effect on pie chart
  const [hoveredSlice, setHoveredSlice] = useState<{ category: string; percentage: number } | null>(null);

  return (
    <section id="tokenomics" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-blue-400">Platform Token</span> & Governance
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Token Distribution */}
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">Token Distribution</h3>
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-64">
                {/* Create circular chart */}
                <svg className="w-full h-full" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                  <circle className="fill-gray-700/50" cx="50" cy="50" r="50" />
                  
                  {/* Generate pie sections based on token distribution data */}
                  {tokenDistribution.map((item, index) => {
                    const previousPercentages = tokenDistribution
                      .slice(0, index)
                      .reduce((acc, curr) => acc + curr.percentage, 0);
                    
                    const startAngle = (previousPercentages / 100) * 360;
                    const endAngle = ((previousPercentages + item.percentage) / 100) * 360;
                    
                    // Use stroke-dasharray for arc calculation - simpler for animation
                    const circumference = 2 * Math.PI * 45; // Radius 45 for the stroke
                    const arcLength = (item.percentage / 100) * circumference;
                    const offset = (previousPercentages / 100) * circumference;

                    return (
                      <motion.circle
                        key={item.category}
                        cx="50"
                        cy="50"
                        r="45"
                        fill="transparent"
                        strokeWidth="10"
                        className={`${item.color} transition-opacity duration-200 cursor-pointer`}
                        strokeDasharray={`${arcLength} ${circumference - arcLength}`}
                        strokeDashoffset={-offset}
                        // Add hover effect using framer-motion
                        whileHover={{ scale: 1.05, strokeWidth: 11 }} 
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredSlice({ category: item.category, percentage: item.percentage })}
                        onMouseLeave={() => setHoveredSlice(null)}
                      />
                    );
                  })}
                  
                  {/* Add circle in center for aesthetic and hover info */}
                  <circle className="fill-gray-900" cx="50" cy="50" r="40" /> 
                </svg>
                {/* Display total supply or hovered info in the center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-3/5">
                  {hoveredSlice ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                       <div className="text-lg font-bold text-white truncate" title={hoveredSlice.category}>{hoveredSlice.category}</div>
                       <div className="text-3xl font-bold text-gray-300">{hoveredSlice.percentage}%</div>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <div className="text-3xl font-bold">100M</div>
                      <div className="text-sm text-gray-400">Total Supply</div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Distribution Legend & Descriptions */}
            <div className="space-y-4">
              {tokenDistribution.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 p-2 rounded hover:bg-gray-800/30"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className={`w-4 h-4 rounded-full ${item.color} mt-1 flex-shrink-0`}></div>
                  <div>
                    <span className="text-gray-100 font-medium">{item.category} <span className="font-bold">({item.percentage}%)</span></span>
                    <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Token Utility */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Token Utility</h3>
            <div className="grid grid-cols-1 gap-8">
              {tokenUtility.map((utility, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex-shrink-0 text-blue-400">
                    {utility.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{utility.title}</h4>
                    <p className="text-gray-300">{utility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Tokenomics Info */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-800/20 to-blue-600/20 p-6 rounded-lg border border-blue-700/30">
              <h4 className="font-bold text-xl mb-3 text-blue-400">Governance Model</h4>
              <p className="text-gray-300">
                Token holders participate in key decisions regarding platform integrity, compliance parameters, and ecosystem development through a transparent voting mechanism.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800/20 to-blue-600/20 p-6 rounded-lg border border-blue-700/30">
              <h4 className="font-bold text-xl mb-3 text-blue-400">Vesting Schedule</h4>
              <p className="text-gray-300">
                Team and investor tokens are subject to a 3-year vesting period with a 1-year cliff to ensure long-term alignment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection; 