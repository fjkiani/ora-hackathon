import React from 'react';
import Image from 'next/image';

const TokenomicsSection = () => {
  const tokens = [
    {
      name: 'Zoinks (HZUSD)',
      description: 'Our stablecoin pegged to BUSD with advanced price stability mechanisms.',
      features: [
        'Stablecoin pegged to BUSD',
        'TWAP-based emission',
        'Low volatility',
        'Core trading pair'
      ],
      color: 'bg-blue-500'
    },
    {
      name: 'Snacks (SNACK)',
      description: 'Reward token with utility across the entire ecosystem.',
      features: [
        'Governance',
        'Staking rewards',
        'Fee reduction',
        'Platform utility'
      ],
      color: 'bg-green-500'
    },
    {
      name: 'BtcSnacks / EthSnacks',
      description: 'BTC and ETH-pegged tokens offering stability while earning passive income.',
      features: [
        'Pegged to BTC/ETH',
        'Yield-generating',
        'Cross-chain compatibility',
        'Zero impermanent loss'
      ],
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-600">
            Our multi-token ecosystem creates balanced incentives and rewards for all participants.
          </p>
        </div>

        {/* Token Flow Visualization Placeholder */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-inner mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Token Flow Visualization</h3>
            <p className="text-gray-600 mt-2">
              Discover how value flows between our ecosystem components
            </p>
          </div>
          
          <div className="relative h-80 w-full bg-white rounded-xl shadow-md overflow-hidden">
            {/* This will be replaced with an actual interactive visualization component */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                <p className="text-gray-400 text-lg">Token Flow Visualization</p>
                <p className="text-gray-500 text-sm mt-2">Interactive diagram coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Token Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tokens.map((token, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`h-2 ${token.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{token.name}</h3>
                <p className="text-gray-600 mb-4">{token.description}</p>
                <ul className="space-y-2">
                  {token.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Token Distribution */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Token Distribution</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              {/* Placeholder for distribution chart - would be replaced with actual chart component */}
              <div className="bg-white rounded-xl p-6 shadow-sm aspect-square flex items-center justify-center">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 rounded-full border-8 border-blue-500 opacity-20"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-blue-500 border-r-blue-500" style={{clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 50% 50%)'}}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-transparent border-b-green-500 border-l-green-500" style={{clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Interactive chart coming soon</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                  <h4 className="text-lg font-medium text-gray-900">Community & Rewards (40%)</h4>
                </div>
                <p className="text-gray-600 pl-6">Allocated for staking rewards, community incentives, and ecosystem growth.</p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <h4 className="text-lg font-medium text-gray-900">Treasury & Development (30%)</h4>
                </div>
                <p className="text-gray-600 pl-6">Funds platform development, security audits, and treasury reserves.</p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                  <h4 className="text-lg font-medium text-gray-900">Team & Advisors (15%)</h4>
                </div>
                <p className="text-gray-600 pl-6">Vested over 2 years with 6-month cliff to align with long-term success.</p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                  <h4 className="text-lg font-medium text-gray-900">Liquidity & Exchanges (15%)</h4>
                </div>
                <p className="text-gray-600 pl-6">Ensures deep liquidity across multiple exchanges and DEXes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection; 