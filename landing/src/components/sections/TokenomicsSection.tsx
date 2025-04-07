import React from 'react';

const TokenomicsSection = () => {
  // Token distribution data
  const tokenDistribution = [
    { category: 'Community & Ecosystem', percentage: 40, color: 'bg-blue-500' },
    { category: 'Team & Advisors', percentage: 20, color: 'bg-purple-500' },
    { category: 'Treasury', percentage: 15, color: 'bg-cyan-500' },
    { category: 'Liquidity', percentage: 15, color: 'bg-green-500' },
    { category: 'Early Investors', percentage: 10, color: 'bg-yellow-500' },
  ];

  // Token utility features
  const tokenUtility = [
    {
      title: 'Governance',
      description: 'Vote on protocol upgrades, risk parameters, and treasury allocations',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Revenue Sharing',
      description: 'Earn a share of platform fees proportional to your staked tokens',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Premium Features',
      description: 'Access advanced AI models, strategy builders, and risk metrics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Staking Rewards',
      description: 'Earn additional tokens for providing platform liquidity and security',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="tokenomics" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-blue-400">Tokenomics</span> & Governance
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Token Distribution */}
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">Token Distribution</h3>
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-64">
                {/* Create circular chart */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="fill-gray-700" cx="50" cy="50" r="50" />
                  
                  {/* Generate pie sections based on token distribution data */}
                  {tokenDistribution.map((item, index) => {
                    // Calculate positions for pie slices
                    const previousPercentages = tokenDistribution
                      .slice(0, index)
                      .reduce((acc, curr) => acc + curr.percentage, 0);
                    
                    const startAngle = (previousPercentages / 100) * 360;
                    const endAngle = ((previousPercentages + item.percentage) / 100) * 360;
                    
                    // Convert angles to radians
                    const startRad = (startAngle - 90) * (Math.PI / 180);
                    const endRad = (endAngle - 90) * (Math.PI / 180);
                    
                    // Calculate points
                    const x1 = 50 + 50 * Math.cos(startRad);
                    const y1 = 50 + 50 * Math.sin(startRad);
                    const x2 = 50 + 50 * Math.cos(endRad);
                    const y2 = 50 + 50 * Math.sin(endRad);
                    
                    // Determine if the arc is large
                    const largeArc = item.percentage > 50 ? 1 : 0;
                    
                    return (
                      <path
                        key={index}
                        d={`M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArc} 1 ${x2} ${y2} Z`}
                        className={`${item.color} hover:opacity-90 transition-opacity cursor-pointer`}
                      />
                    );
                  })}
                  
                  {/* Add circle in center for aesthetic */}
                  <circle className="fill-gray-900" cx="50" cy="50" r="25" />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-3xl font-bold">100M</div>
                  <div className="text-sm text-gray-400">Total Supply</div>
                </div>
              </div>
            </div>
            
            {/* Distribution Legend */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tokenDistribution.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-4 h-4 rounded-full ${item.color} mr-2`}></div>
                  <span className="text-gray-300">{item.category} <span className="font-bold">{item.percentage}%</span></span>
                </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-800/20 to-blue-600/20 p-6 rounded-lg border border-blue-700/30">
              <h4 className="font-bold text-xl mb-3 text-blue-400">Deflationary Mechanism</h4>
              <p className="text-gray-300">
                A portion of all transaction fees is used to buy back and burn tokens, creating scarcity and increasing value over time.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800/20 to-blue-600/20 p-6 rounded-lg border border-blue-700/30">
              <h4 className="font-bold text-xl mb-3 text-blue-400">Governance Model</h4>
              <p className="text-gray-300">
                Token holders vote on protocol changes with weighted voting based on tokens staked and holding duration.
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