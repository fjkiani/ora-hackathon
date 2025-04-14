import React from 'react';

// Define roadmap milestone type
interface Milestone {
  id: string;
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  items: string[];
}

const RoadmapSection = () => {
  // Roadmap data
  const roadmapData: Milestone[] = [
    {
      id: 'phase-1',
      phase: 'Phase 1',
      title: 'Foundation',
      description: 'Establishing the core infrastructure, Sharia compliance framework, and initial AI models.',
      status: 'completed',
      items: [
        'Core platform development',
        'Sharia screening engine v1',
        'Establish Sharia advisory board',
        'Compliant portfolio tracking',
        'Initial AI monitoring agents',
        'Testnet deployment (KSA focus)',
        'NYU Hackathon Winner',
      ],
    },
    {
      id: 'phase-2',
      phase: 'Phase 2',
      title: 'Compliance & Expansion',
      description: 'Enhancing compliance engine, expanding protocol support, and launching governance.',
      status: 'in-progress',
      items: [
        'Refined compliance engine (Advisory board input)',
        'Integrate verified compliant protocols/pools',
        'Governance token launch',
        'Initial DAO voting (Compliance parameters)',
        'Basic cross-border payment agent (POC)',
      ],
    },
    {
      id: 'phase-3',
      phase: 'Phase 3',
      title: 'Intelligence & Payments',
      description: 'Deploying advanced compliant agents and expanding payment capabilities.',
      status: 'upcoming',
      items: [
        'Advanced autonomous agents (Profit-sharing, Zakat)',
        'Expanded payment agent features (FX, Multi-currency)',
        'Full decentralized governance implementation',
        'Cross-chain compliant strategies',
        'Initial KSA partnerships',
      ],
    },
    {
      id: 'phase-4',
      phase: 'Phase 4',
      title: 'Ecosystem Growth',
      description: 'Achieving wider adoption, institutional integration, and continuous innovation.',
      status: 'upcoming',
      items: [
        'Institutional partnerships (KSA Banks/Finance)',
        'Compliance certifications/audits',
        'Integration with Islamic finance ecosystem',
        'Advanced predictive compliance analytics',
        'Expand compliant product offerings',
      ],
    },
  ];

  // Function to determine status styling
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Function to generate status text/pill
  const getStatusPill = (status: string) => {
    let bgColor = '';
    let text = '';

    switch (status) {
      case 'completed':
        bgColor = 'bg-green-500/20 text-green-400';
        text = 'Completed';
        break;
      case 'in-progress':
        bgColor = 'bg-blue-500/20 text-blue-400';
        text = 'In Progress';
        break;
      case 'upcoming':
        bgColor = 'bg-gray-500/20 text-gray-400';
        text = 'Upcoming';
        break;
    }

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${bgColor}`}>
        {text}
      </span>
    );
  };

  return (
    <section id="roadmap" className="py-20 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Development <span className="text-blue-400">Roadmap</span>
        </h2>
        
        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-700 hidden md:block"></div>
          
          {/* Phases */}
          <div className="space-y-16">
            {roadmapData.map((milestone, index) => (
              <div key={milestone.id} className="relative">
                {/* Timeline dot for desktop */}
                <div className={`absolute left-8 w-5 h-5 rounded-full border-4 border-gray-900 transform -translate-x-1/2 hidden md:block ${getStatusClass(milestone.status)}`}></div>
                
                <div className="md:grid md:grid-cols-5 gap-8 items-start">
                  {/* Phase title - mobile only */}
                  <div className="flex items-center mb-4 md:hidden">
                    <div className={`w-5 h-5 rounded-full ${getStatusClass(milestone.status)} mr-3`}></div>
                    <h3 className="text-xl font-bold">{milestone.phase}</h3>
                    <div className="ml-3">{getStatusPill(milestone.status)}</div>
                  </div>
                  
                  {/* Phase column - desktop only */}
                  <div className="hidden md:block text-right pr-8">
                    <h3 className="text-2xl font-bold mb-2">{milestone.phase}</h3>
                    <div>{getStatusPill(milestone.status)}</div>
                  </div>
                  
                  {/* Content column */}
                  <div className="md:col-span-4">
                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300">
                      <h4 className="text-xl md:text-2xl font-bold mb-2 text-blue-400">{milestone.title}</h4>
                      <p className="text-gray-400 mb-4">{milestone.description}</p>
                      
                      <ul className="space-y-2">
                        {milestone.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center">
                            <svg 
                              className={`h-5 w-5 mr-2 ${
                                milestone.status === 'completed' ? 'text-green-500' :
                                milestone.status === 'in-progress' && itemIndex < 3 ? 'text-blue-500' : 'text-gray-600'
                              }`}
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              {milestone.status === 'completed' ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              ) : milestone.status === 'in-progress' && itemIndex < 3 ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              )}
                            </svg>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Future indicator */}
          <div className="relative mt-8 pt-8 md:pl-16">
            <div className="flex justify-center">
              <div className="bg-blue-900/20 px-6 py-3 rounded-lg text-center max-w-xl">
                <h3 className="text-xl font-bold mb-2">Future Development</h3>
                <p className="text-gray-400">
                  Our roadmap prioritizes Sharia compliance, user security, and KSA market needs, evolving with community feedback and regulatory guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection; 