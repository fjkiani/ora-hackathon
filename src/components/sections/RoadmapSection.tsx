import React from 'react';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      quarter: 'Q1 2023',
      title: 'Foundation',
      items: [
        'Project conception and team formation',
        'Smart contract architecture design',
        'Initial tokenomics modeling',
        'Community building initiation'
      ],
      status: 'completed'
    },
    {
      quarter: 'Q2 2023',
      title: 'Smart Contract Development',
      items: [
        'Core token contracts development',
        'Staking and rewards mechanism implementation',
        'Treasury management system',
        'Security audits by leading firms'
      ],
      status: 'completed'
    },
    {
      quarter: 'Q3-Q4 2023',
      title: 'Platform Development',
      items: [
        'Frontend application development',
        'Integration with DEXes',
        'Smart contract optimization',
        'Test network deployment and internal testing'
      ],
      status: 'completed'
    },
    {
      quarter: 'Q1 2024',
      title: 'ORA Integration',
      items: [
        'ORA Builder Program application',
        'Integration with ORA Risk Management System',
        'opAgent implementation for trading strategies',
        'Expanded cross-chain support'
      ],
      status: 'in-progress'
    },
    {
      quarter: 'Q2 2024',
      title: 'Public Launch',
      items: [
        'Mainnet deployment',
        'Token launch and liquidity provision',
        'Marketing campaign kickoff',
        'Partnership announcements'
      ],
      status: 'upcoming'
    },
    {
      quarter: 'Q3-Q4 2024',
      title: 'Ecosystem Expansion',
      items: [
        'Additional algorithmic trading strategies',
        'Multi-chain portfolio management',
        'Advanced risk management features',
        'Governance mechanism activation'
      ],
      status: 'upcoming'
    },
    {
      quarter: '2025',
      title: 'Future Vision',
      items: [
        'Institutional partnerships',
        'Mobile application release',
        'Integration with TradFi systems',
        'Enhanced AI-driven analytics'
      ],
      status: 'upcoming'
    }
  ];

  // Helper function to determine background color based on status
  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-500 text-green-700';
      case 'in-progress':
        return 'bg-blue-100 border-blue-500 text-blue-700';
      case 'upcoming':
        return 'bg-gray-100 border-gray-400 text-gray-700';
      default:
        return 'bg-gray-100 border-gray-400 text-gray-700';
    }
  };

  // Helper function to determine status pill style
  const getStatusPill = (status) => {
    switch (status) {
      case 'completed':
        return (
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
            Completed
          </span>
        );
      case 'in-progress':
        return (
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
            In Progress
          </span>
        );
      case 'upcoming':
        return (
          <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
            Upcoming
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Roadmap
          </h2>
          <p className="text-xl text-gray-600">
            Our journey from concept to a fully-featured AI-powered crypto hedge fund platform.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                  {/* Time indicator - visible only on desktop */}
                  <div className="hidden md:flex justify-end md:w-1/2 pr-8">
                    <div className={`py-2 px-4 rounded-lg font-bold ${index % 2 === 0 ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}>
                      {item.quarter}
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-500"></div>
                  
                  {/* Empty div for alignment on desktop */}
                  <div className="hidden md:block md:w-1/2 pl-8"></div>
                </div>
                
                {/* Content card */}
                <div className={`mt-4 md:mt-0 md:absolute ${index % 2 === 0 ? 'md:right-1/2 md:pr-16 md:mr-4' : 'md:left-1/2 md:pl-16 md:ml-4'} md:top-0 md:w-5/12`}>
                  {/* Mobile time indicator */}
                  <div className="md:hidden mb-2 py-1 px-3 rounded-lg inline-block font-bold bg-blue-600 text-white">
                    {item.quarter}
                  </div>
                  
                  <div className={`rounded-xl shadow-md border-l-4 bg-white p-6 ${getStatusClass(item.status)}`}>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      {getStatusPill(item.status)}
                    </div>
                    <ul className="space-y-2">
                      {item.items.map((listItem, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a 
            href="https://app.cryptohedgefund.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Be Part of Our Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection; 