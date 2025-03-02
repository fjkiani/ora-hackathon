import axios from 'axios';
import { GoldRushClient } from "@covalenthq/client-sdk";

// Initialize GoldRush client
const goldRushClient = new GoldRushClient(process.env.REACT_APP_COVALENT_API_KEY);

// CoinGecko API for token data
export const getTokenData = async (tokenIds) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${tokenIds.join(',')}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching token data:', error);
    throw error;
  }
};

// DeFi Llama API for protocol TVL data
export const getProtocolData = async (protocols) => {
  try {
    const response = await axios.get('https://api.llama.fi/protocols');
    const filteredProtocols = response.data.filter(p => 
      protocols.includes(p.slug.toLowerCase())
    );
    return filteredProtocols;
  } catch (error) {
    console.error('Error fetching protocol data:', error);
    throw error;
  }
};

// GoldRush API for wallet token balances
export const getWalletBalances = async (chainName, walletAddress) => {
  try {
    const response = await goldRushClient.BalanceService.getTokenBalancesForWalletAddress(
      chainName, 
      walletAddress
    );
    
    if (!response.error) {
      return response.data;
    } else {
      throw new Error(response.error_message);
    }
  } catch (error) {
    console.error('Error fetching wallet balances:', error);
    throw error;
  }
};

// GoldRush API for token transfers
export const getTokenTransfers = async (chainName, walletAddress, tokenAddress) => {
  try {
    const response = await goldRushClient.TransactionService.getTransactionsForAddress(
      chainName,
      walletAddress,
      {
        contractAddress: tokenAddress
      }
    );
    
    if (!response.error) {
      return response.data;
    } else {
      throw new Error(response.error_message);
    }
  } catch (error) {
    console.error('Error fetching token transfers:', error);
    throw error;
  }
};

// GoldRush API for NFT data
export const getNftData = async (chainName, walletAddress) => {
  try {
    const response = await goldRushClient.NftService.getNftsForAddress(
      chainName,
      walletAddress
    );
    
    if (!response.error) {
      return response.data;
    } else {
      throw new Error(response.error_message);
    }
  } catch (error) {
    console.error('Error fetching NFT data:', error);
    throw error;
  }
};

// The Graph API for specific protocol data (Uniswap example)
export const getUniswapPairData = async (pairAddress) => {
  try {
    const response = await axios.post(
      'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
      {
        query: `{
          pair(id: "${pairAddress.toLowerCase()}") {
            token0 { id, symbol, name }
            token1 { id, symbol, name }
            reserve0
            reserve1
            volumeUSD
            reserveUSD
          }
        }`
      }
    );
    return response.data.data.pair;
  } catch (error) {
    console.error('Error fetching Uniswap pair data:', error);
    throw error;
  }
}; 