export interface WhitepaperSection {
  id: string;
  title: string;
  content: string;
  subsections?: {
    title: string;
    content: string;
  }[];
}

export const whitepaperData: WhitepaperSection[] = [
  {
    id: "abstract",
    title: "Abstract",
    content: "Our AI-powered crypto hedge fund platform represents a paradigm shift in decentralized finance (DeFi), leveraging cutting-edge artificial intelligence, machine learning algorithms, and blockchain technology to provide institutional-grade risk management and optimized returns for cryptocurrency investors. The platform integrates seamlessly with ORA infrastructure, enabling advanced risk assessment capabilities, automated strategy adjustment, and on-chain agent deployment.",
  },
  {
    id: "introduction",
    title: "Introduction",
    content: "The cryptocurrency market presents both unprecedented opportunities and significant risks for investors. While potential returns can be substantial, the volatility, complexity, and rapidly evolving nature of blockchain protocols create challenges that traditional investment approaches are ill-equipped to handle. Our platform addresses these challenges through a sophisticated AI-driven approach to cryptocurrency investment.",
    subsections: [
      {
        title: "Problem Statement",
        content: "Cryptocurrency investors face multiple challenges: extreme market volatility, lack of fundamental valuation frameworks, rapid protocol evolution, and significant smart contract risks. These factors make consistent returns difficult to achieve without deep technical expertise and constant market monitoring."
      },
      {
        title: "Solution Overview",
        content: "Our platform leverages advanced AI algorithms to monitor market conditions, assess protocol risks, and optimize investment strategies in real-time. By combining machine learning, natural language processing, and blockchain analytics, we provide a comprehensive solution that adapts to changing market conditions and identifies opportunities across the cryptocurrency ecosystem."
      }
    ]
  },
  {
    id: "technology",
    title: "Technology & Architecture",
    content: "The platform is built on a robust technological foundation that combines artificial intelligence, blockchain integration, and decentralized infrastructure.",
    subsections: [
      {
        title: "AI Framework",
        content: "Our proprietary AI framework incorporates multiple machine learning models trained on historical cryptocurrency data, market indicators, on-chain metrics, and protocol-specific information. The system employs both supervised learning for pattern recognition and reinforcement learning for strategy optimization."
      },
      {
        title: "ORA Integration",
        content: "The platform seamlessly integrates with ORA infrastructure, enabling advanced risk assessment capabilities, automated strategy adjustment, and on-chain agent deployment. This integration enhances security, reduces latency, and provides access to institutional-grade risk management tools."
      },
      {
        title: "Blockchain Analytics",
        content: "Real-time analytics monitor on-chain activity across multiple blockchains, tracking liquidity flows, protocol metrics, and smart contract interactions. This data feeds into our AI models to identify emerging trends and potential risks before they impact the broader market."
      },
      {
        title: "Security Architecture",
        content: "The platform implements a multi-layered security approach, combining secure smart contracts, formal verification methods, continuous monitoring, and automated threat detection. All smart contracts undergo rigorous auditing by leading security firms to ensure the highest level of protection for user assets."
      }
    ]
  },
  {
    id: "tokenomics",
    title: "Tokenomics & Governance",
    content: "The platform's native token serves as both a utility token within the ecosystem and a governance token for protocol decision-making.",
    subsections: [
      {
        title: "Token Utility",
        content: "The token provides access to premium features, reduces platform fees, enables participation in exclusive investment strategies, and allows staking for enhanced returns. Token holders also receive a share of protocol revenue proportional to their staked amount."
      },
      {
        title: "Governance Mechanism",
        content: "The governance system enables token holders to vote on key protocol parameters, investment strategies, risk management thresholds, and treasury allocations. Proposal creation requires a minimum token stake, and voting power is proportional to tokens held or staked."
      },
      {
        title: "Token Distribution",
        content: "Initial token distribution is designed to ensure broad participation while incentivizing long-term alignment with the protocol's success. Allocations include a public sale (25%), team and advisors (20%, subject to vesting), treasury (25%), ecosystem growth (15%), and liquidity provision (15%)."
      }
    ]
  },
  {
    id: "roadmap",
    title: "Development Roadmap",
    content: "Our development plan outlines a strategic progression from initial platform deployment to a fully decentralized investment ecosystem.",
    subsections: [
      {
        title: "Phase 1: Foundation (Q1- 2025)",
        content: "Initial platform deployment with core AI models, basic risk assessment capabilities, and integration with major DeFi protocols. Beta testing with selected users and continuous refinement of algorithms based on real-world performance following our successful NYU Hackathon win in March 2025."
      },
      {
        title: "Phase 2: Expansion (Q2 2025)",
        content: "Enhanced AI capabilities with additional machine learning models, expanded protocol coverage, and improved risk management tools. Launch of the governance token and initial governance features."
      },
      {
        title: "Phase 3: Evolution (Q3 2025)",
        content: "Deployment of autonomous investment agents, advanced strategy customization options, and cross-chain investment capabilities. Implementation of decentralized governance and expanded DAO functionality."
      },
      {
        title: "Phase 4: Maturity (Q4 2025 and beyond)",
        content: "Full decentralization of investment decision-making, advanced predictive analytics, institutional partnerships, and comprehensive regulatory compliance frameworks. Establishment of the platform as a leading decentralized investment protocol."
      }
    ]
  }
]; 