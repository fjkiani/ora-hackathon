// Mock data based on your contract structure
const mockPoolData = {
  pancakeSwap: {
    name: 'PancakeSwap Pool',
    tvl: '1,234,567 USD',
    apr: '12.5%',
    totalStaked: '456,789 ZOINKS',
    rewards: ['CAKE', 'ZOINKS']
  },
  biSwap: {
    name: 'BiSwap Pool',
    tvl: '987,654 USD',
    apr: '15.2%',
    totalStaked: '234,567 ZOINKS',
    rewards: ['BSW', 'ZOINKS']
  },
  apeSwap: {
    name: 'ApeSwap Pool',
    tvl: '876,543 USD',
    apr: '14.8%',
    totalStaked: '345,678 ZOINKS',
    rewards: ['BANANA', 'ZOINKS']
  }
};

const mockTokenData = {
  ZOINKS: {
    price: '$0.12',
    marketCap: '$12,345,678',
    totalSupply: '100,000,000',
    circulatingSupply: '45,000,000'
  },
  SNACKS: {
    price: '$0.34',
    marketCap: '$5,678,901',
    totalSupply: '50,000,000',
    circulatingSupply: '16,700,000'
  },
  BTCSnacks: {
    price: '$0.89',
    marketCap: '$4,567,890',
    totalSupply: '5,000,000',
    circulatingSupply: '3,200,000'
  }
};

// ... rest of the file content

export const getMockPoolData = () => {
  return [
    {
      name: "ETH/USDC",
      tvl: "$245.7M",
      apr: "4.2%",
      totalStaked: "75,432 ETH",
      rewards: ["ORA", "ETH"],
      riskLevel: "low"
    },
    {
      name: "BTC/ETH",
      tvl: "$189.3M",
      apr: "3.8%",
      totalStaked: "3,654 BTC",
      rewards: ["ORA"],
      riskLevel: "medium"
    },
    {
      name: "ORA/USDC",
      tvl: "$56.8M",
      apr: "12.5%",
      totalStaked: "12.5M ORA",
      rewards: ["ORA", "USDC"],
      riskLevel: "high"
    },
    {
      name: "ETH/ORA",
      tvl: "$78.2M",
      apr: "8.7%",
      totalStaked: "24,321 ETH",
      rewards: ["ORA"],
      riskLevel: "medium"
    }
  ];
};

export const getMockTokenData = () => {
  return [
    {
      name: "ETH",
      price: "$3,245.67",
      change24h: "+2.5%",
      marketCap: "$389.5B",
      volume: "$15.7B"
    },
    {
      name: "BTC",
      price: "$51,234.89",
      change24h: "+1.2%",
      marketCap: "$978.3B",
      volume: "$28.4B"
    },
    {
      name: "USDC",
      price: "$1.00",
      change24h: "0.0%",
      marketCap: "$45.2B",
      volume: "$3.1B"
    },
    {
      name: "ORA",
      price: "$4.56",
      change24h: "+15.3%",
      marketCap: "$1.2B",
      volume: "$456.7M"
    }
  ];
};

// Add more mock data functions as needed
export const getMockTransactionHistory = () => {
  return [
    {
      id: "0x1a2b3c...",
      type: "Swap",
      from: "ETH",
      to: "USDC",
      amount: "2.5 ETH",
      value: "$8,114.18",
      timestamp: "2023-05-15 14:23:45",
      status: "Confirmed",
      gas: "0.005 ETH"
    },
    {
      id: "0x4d5e6f...",
      type: "Liquidity Add",
      from: "ETH + USDC",
      to: "ETH/USDC LP",
      amount: "1.2 ETH + 3,894.60 USDC",
      value: "$7,789.20",
      timestamp: "2023-05-14 09:12:33",
      status: "Confirmed",
      gas: "0.008 ETH"
    },
    {
      id: "0x7g8h9i...",
      type: "Stake",
      from: "ORA",
      to: "Staked ORA",
      amount: "500 ORA",
      value: "$2,280.00",
      timestamp: "2023-05-12 18:45:21",
      status: "Confirmed",
      gas: "0.003 ETH"
    },
    {
      id: "0xj0k1l...",
      type: "Claim Rewards",
      from: "Protocol",
      to: "Wallet",
      amount: "25 ORA",
      value: "$114.00",
      timestamp: "2023-05-10 11:33:27",
      status: "Confirmed",
      gas: "0.002 ETH"
    }
  ];
};

export const getMockRiskAssessment = (poolName) => {
  const riskData = {
    "ETH/USDC": {
      overall: "low",
      smartContract: "low",
      impermanentLoss: "medium",
      marketVolatility: "low",
      liquidityDepth: "high",
      recommendations: [
        "This pool is well-established with deep liquidity",
        "Smart contracts have been audited multiple times",
        "Consider as a core position in your portfolio"
      ]
    },
    "BTC/ETH": {
      overall: "medium",
      smartContract: "low",
      impermanentLoss: "high",
      marketVolatility: "medium",
      liquidityDepth: "medium",
      recommendations: [
        "Be cautious of impermanent loss due to price divergence",
        "Monitor market conditions regularly",
        "Consider hedging your position"
      ]
    },
    "ORA/USDC": {
      overall: "high",
      smartContract: "medium",
      impermanentLoss: "high",
      marketVolatility: "high",
      liquidityDepth: "low",
      recommendations: [
        "High risk due to potential ORA price volatility",
        "Only allocate a small portion of your portfolio",
        "Set stop-loss orders to protect your investment"
      ]
    },
    "ETH/ORA": {
      overall: "medium",
      smartContract: "low",
      impermanentLoss: "high",
      marketVolatility: "medium",
      liquidityDepth: "medium",
      recommendations: [
        "Monitor the price relationship between ETH and ORA",
        "Be prepared for potential impermanent loss",
        "Consider a dollar-cost averaging strategy"
      ]
    }
  };
  
  return riskData[poolName] || {
    overall: "unknown",
    smartContract: "unknown",
    impermanentLoss: "unknown",
    marketVolatility: "unknown",
    liquidityDepth: "unknown",
    recommendations: [
      "Insufficient data to provide risk assessment",
      "Research this pool thoroughly before investing",
      "Consider starting with a small position"
    ]
  };
}; 