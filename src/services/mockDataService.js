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

export const getMockPoolData = () => mockPoolData;
export const getMockTokenData = () => mockTokenData; 