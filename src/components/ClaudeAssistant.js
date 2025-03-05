import React, { useState, useRef, useEffect } from 'react';
import './ClaudeAssistant.css';
import { getTokenData, getProtocolData, getWalletBalances, getNftData } from '../services/defiDataService';
import axios from 'axios';

function ClaudeAssistant({ initialQuery = '', onClearQuery = () => {} }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your DeFi assistant powered by Claude. How can I help you understand DeFi protocols today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [defiData, setDefiData] = useState({
    tokens: {},
    protocols: {},
    pools: {},
    wallets: {}
  });
  const messagesEndRef = useRef(null);
  const apiKey = process.env.REACT_APP_ANTHROPIC_API_KEY;
  const [useRealApis, setUseRealApis] = useState(true);
  const [apiStatus, setApiStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  // Handle initialQuery from props
  useEffect(() => {
    console.log("==========================================");
    console.log("initialQuery changed:", initialQuery);
    console.log("initialQuery type:", typeof initialQuery);
    console.log("initialQuery length:", initialQuery ? initialQuery.length : 0);
    console.log("initialQuery trimmed length:", initialQuery ? initialQuery.trim().length : 0);
    console.log("initialQuery content:", JSON.stringify(initialQuery));
    console.log("==========================================");
    
    if (initialQuery && initialQuery.trim() !== '') {
      console.log("Processing initialQuery:", initialQuery);
      
      // Extract pool name for better debugging
      const poolNameMatch = initialQuery.match(/in\s+([^.?!]+)/i);
      const poolName = poolNameMatch ? poolNameMatch[1].trim() : "unknown pool";
      console.log("Extracted pool name from initialQuery:", poolName);
      
      // Check for risk assessment query type
      const queryType = 
        initialQuery.toLowerCase().includes('smart contract risk') ? 'Smart Contract Risk' :
        initialQuery.toLowerCase().includes('economic risk') ? 'Economic Risk' :
        initialQuery.toLowerCase().includes('centralization risk') ? 'Centralization Risk' :
        'General Query';
      console.log("Query type detected:", queryType);
      
      console.log("Setting input to initialQuery");
      setInput(initialQuery);
      
      // Submit the query automatically
      const submitQuery = async () => {
        console.log("Inside submitQuery function");
        // Add user message
        const userMessage = { role: 'user', content: initialQuery };
        console.log("Adding user message:", userMessage);
        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);
        
        try {
          // Get Claude's response
          console.log("Attempting to get Claude response");
          const claudeResponse = await getClaudeResponse(initialQuery);
          console.log("Claude response received:", claudeResponse.substring(0, 50) + "...");
          setMessages(prev => [...prev, { role: 'assistant', content: claudeResponse }]);
        } catch (error) {
          console.error("Failed to get Claude response:", error);
          // Use mock response as fallback
          console.log("Falling back to mock response");
          const mockResponse = getMockResponse(initialQuery);
          console.log("Mock response generated:", mockResponse.substring(0, 50) + "...");
          setMessages(prev => [...prev, { 
            role: 'assistant', 
            content: mockResponse + "\n\n(Note: This is a mock response due to API connection issues.)" 
          }]);
        } finally {
          setIsTyping(false);
          setInput(''); // Clear the input field after processing
          console.log("Input field cleared");
        }
        
        // Clear the initialQuery after processing
        console.log("Calling onClearQuery to clear initialQuery");
        onClearQuery();
      };
      
      console.log("Calling submitQuery function");
      submitQuery();
    }
  }, [initialQuery, onClearQuery]);

  // Fetch initial DeFi data
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Fetch top tokens
        const tokenData = await getTokenData(['ethereum', 'bitcoin', 'usd-coin', 'dai']);
        
        // Fetch top protocols
        const protocolData = await getProtocolData(['uniswap', 'aave', 'compound']);
        
        // Store the data
        const tokenMap = {};
        tokenData.forEach(token => {
          tokenMap[token.id] = token;
        });
        
        const protocolMap = {};
        protocolData.forEach(protocol => {
          protocolMap[protocol.slug] = protocol;
        });
        
        setDefiData({
          tokens: tokenMap,
          protocols: protocolMap,
          pools: {},
          wallets: {}
        });
      } catch (error) {
        console.error('Error fetching initial DeFi data:', error);
      }
    };
    
    fetchInitialData();
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Add this function and call it in the initial useEffect
  const testClaudeAPI = async () => {
    try {
      console.log("Testing Claude API with key:", apiKey.substring(0, 10) + "...");
      
      const response = await axios.post('http://localhost:3001/api/claude', {
        model: 'claude-3-haiku-20240307',
        max_tokens: 100,
        system: 'You are a helpful assistant.',
        messages: [
          {
            role: 'user',
            content: 'Hello, can you hear me? This is a test.'
          }
        ]
      });
      
      console.log("Claude API test successful:", response.data);
      return true;
    } catch (error) {
      console.error("Claude API test error:", error);
      return false;
    }
  };

  // Add this function to test the server connection
  const testServerConnection = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/health');
      console.log("Server health check:", response.data);
      return response.data.status === 'ok';
    } catch (error) {
      console.error("Server connection test failed:", error);
      return false;
    }
  };

  // Add this function for direct API testing
  const testDirectApiCall = async () => {
    try {
      const response = await axios.post('https://api.anthropic.com/v1/messages', {
        model: 'claude-3-haiku-20240307',
        max_tokens: 100,
        system: 'You are a helpful assistant.',
        messages: [
          {
            role: 'user',
            content: 'Hello, can you hear me? This is a test.'
          }
        ]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        }
      });
      
      console.log("Direct API call successful:", response.data);
      return true;
    } catch (error) {
      console.error("Direct API call error:", error);
      return false;
    }
  };

  // Add this function to check API status
  const checkApiStatus = async () => {
    setApiStatus({
      loading: true,
      error: null,
      success: false
    });
    
    try {
      // Check server connection first
      let serverConnected = false;
      try {
        const serverResponse = await axios.get('http://localhost:3001/api/health');
        serverConnected = serverResponse.data.status === 'ok';
      } catch (error) {
        console.error("Server connection failed:", error);
        setApiStatus({
          loading: false,
          error: "Cannot connect to proxy server. Make sure it's running on http://localhost:3001",
          success: false
        });
        return false;
      }
      
      // If server is connected, test the API key
      if (serverConnected && apiKey) {
        try {
          // Test API key via proxy server
          const testResponse = await axios.post('http://localhost:3001/api/claude/test', {
            apiKey: apiKey
          });
          
          const apiKeyValid = testResponse.data.success;
          
          setApiStatus({
            loading: false,
            error: apiKeyValid ? null : "API key validation failed. Check your API key.",
            success: apiKeyValid
          });
          
          return apiKeyValid;
        } catch (error) {
          console.error("API key validation failed:", error);
          setApiStatus({
            loading: false,
            error: "API key validation failed: " + (error.message || "Unknown error"),
            success: false
          });
          return false;
        }
      }
      
      return false;
    } catch (error) {
      console.error("API status check error:", error);
      
      setApiStatus({
        loading: false,
        error: "Error checking API status: " + (error.message || "Unknown error"),
        success: false
      });
      
      return false;
    }
  };

  // Call this in your initial useEffect
  useEffect(() => {
    console.log("Anthropic API Key available:", !!apiKey);
    console.log("Covalent API Key available:", !!process.env.REACT_APP_COVALENT_API_KEY);
    
    // Test the server connection
    testServerConnection().then(success => {
      console.log("Server connection test result:", success ? "Success" : "Failed");
    });
    
    // Test the Claude API
    testClaudeAPI().then(success => {
      console.log("Claude API test result:", success ? "Success" : "Failed");
    });

    // Test direct API call
    testDirectApiCall().then(success => {
      console.log("Direct API test result:", success ? "Success" : "Failed");
    });

    // Call this in your useEffect
    checkApiStatus();
  }, [apiKey]);

  // Enhanced Claude API call with real DeFi data
  const getClaudeResponse = async (query) => {
    setIsTyping(true);
    
    if (!useRealApis) {
      // Simulate delay for mock response
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsTyping(false);
      return getMockResponse(query);
    }
    
    // Check if we need to fetch specific data based on the query
    await fetchRelevantData(query);
    
    // Check if API key is available
    if (!apiKey) {
      console.warn("No API key found. Using mock responses.");
      return getMockResponse(query);
    }
    
    try {
      // Create a context with the latest DeFi data
      const defiContext = createDefiContext();
      console.log("DeFi context created:", defiContext);
      
      const systemPrompt = `You are a helpful DeFi assistant that explains complex DeFi concepts in simple terms. 
                  Focus on being educational and providing accurate information about blockchain, 
                  cryptocurrencies, and decentralized finance protocols. When discussing risks, 
                  be balanced and factual. 
                  
                  Here is the latest DeFi data that you can reference:
                  ${defiContext}`;
      
      console.log("Making API call to Claude via proxy server");
      
      // Use the proxy server with axios
      const response = await axios.post('http://localhost:3001/api/claude', {
        model: 'claude-3-haiku-20240307',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [
          ...messages.filter(msg => msg.role !== 'system').map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          {
            role: 'user',
            content: query
          }
        ]
      });
      
      console.log("Claude API response:", response.data);
      setIsTyping(false);
      
      if (response.data.content && response.data.content[0] && response.data.content[0].text) {
        return response.data.content[0].text;
      } else {
        console.error("Unexpected API response format:", response.data);
        throw new Error("Unexpected API response format");
      }
    } catch (error) {
      console.error('Error calling Claude API:', error);
      console.error('Error details:', error.response?.data || 'No response data');
      console.error('Error status:', error.response?.status || 'No status code');
      setIsTyping(false);
      return getMockResponse(query);
    }
  };

  // Fetch relevant data based on user query
  const fetchRelevantData = async (query) => {
    const lowerQuery = query.toLowerCase();
    
    try {
      // Extract pool name if present
      const poolNameMatch = query.match(/in\s+([^.?!]+)/i);
      const poolName = poolNameMatch ? poolNameMatch[1].trim() : null;
      
      if (poolName) {
        console.log("Extracted pool name from query:", poolName);
        
        // Parse the pool name to get token symbols
        const tokens = poolName.split('/');
        if (tokens.length === 2) {
          const [token0Symbol, token1Symbol] = tokens;
          
          // Fetch token data
          try {
            const tokenData = await getTokenData([token0Symbol.toLowerCase(), token1Symbol.toLowerCase()]);
            console.log("Token data fetched:", tokenData);
            
            if (tokenData && tokenData.length > 0) {
              setDefiData(prev => ({
                ...prev,
                tokens: {
                  ...prev.tokens,
                  [token0Symbol.toLowerCase()]: tokenData.find(t => t.symbol.toLowerCase() === token0Symbol.toLowerCase()),
                  [token1Symbol.toLowerCase()]: tokenData.find(t => t.symbol.toLowerCase() === token1Symbol.toLowerCase())
                }
              }));
            }
          } catch (error) {
            console.error(`Error fetching token data for ${poolName}:`, error);
          }
        }
      }
      
      // Fetch token-specific data
      if (lowerQuery.includes('ethereum') || lowerQuery.includes('eth')) {
        if (!defiData.tokens['ethereum']) {
          const tokenData = await getTokenData(['ethereum']);
          setDefiData(prev => ({
            ...prev,
            tokens: {
              ...prev.tokens,
              ethereum: tokenData[0]
            }
          }));
        }
      }
      
      // Fetch protocol-specific data
      if (lowerQuery.includes('uniswap')) {
        if (!defiData.protocols['uniswap']) {
          const protocolData = await getProtocolData(['uniswap']);
          setDefiData(prev => ({
            ...prev,
            protocols: {
              ...prev.protocols,
              uniswap: protocolData[0]
            }
          }));
        }
      }
      
      // Fetch wallet data if the query mentions a specific address
      const addressMatch = query.match(/0x[a-fA-F0-9]{40}/);
      if (addressMatch) {
        const walletAddress = addressMatch[0];
        try {
          const balances = await getWalletBalances('eth-mainnet', walletAddress);
          setDefiData(prev => ({
            ...prev,
            wallets: {
              ...prev.wallets,
              [walletAddress]: {
                balances
              }
            }
          }));
        } catch (error) {
          console.error(`Error fetching wallet data for ${walletAddress}:`, error);
        }
      }
      
      // Fetch NFT data if query mentions NFTs
      if (lowerQuery.includes('nft') && addressMatch) {
        const walletAddress = addressMatch[0];
        try {
          const nftData = await getNftData('eth-mainnet', walletAddress);
          setDefiData(prev => ({
            ...prev,
            wallets: {
              ...prev.wallets,
              [walletAddress]: {
                ...prev.wallets?.[walletAddress],
                nfts: nftData
              }
            }
          }));
        } catch (error) {
          console.error(`Error fetching NFT data for ${walletAddress}:`, error);
        }
      }
      
    } catch (error) {
      console.error('Error fetching relevant data:', error);
    }
  };

  // Create a context string with the latest DeFi data
  const createDefiContext = () => {
    let context = "CURRENT DEFI DATA:\n\n";
    
    // Add token data
    context += "TOKEN PRICES:\n";
    Object.values(defiData.tokens).forEach(token => {
      context += `${token.name} (${token.symbol}): $${token.current_price} | 24h Change: ${token.price_change_percentage_24h}% | Market Cap: $${token.market_cap}\n`;
    });
    
    // Add protocol data
    context += "\nPROTOCOL TVL:\n";
    Object.values(defiData.protocols).forEach(protocol => {
      context += `${protocol.name}: $${protocol.tvl.toLocaleString()} | Change (7d): ${protocol.change_7d}%\n`;
    });
    
    // Add wallet data if available
    if (defiData.wallets && Object.keys(defiData.wallets).length > 0) {
      context += "\nWALLET DATA:\n";
      Object.entries(defiData.wallets).forEach(([address, data]) => {
        context += `Address: ${address}\n`;
        
        if (data.balances) {
          context += "Token Balances:\n";
          data.balances.items.slice(0, 5).forEach(item => {
            context += `- ${item.contract_name} (${item.contract_ticker_symbol}): ${parseFloat(item.balance) / Math.pow(10, item.contract_decimals)} ($${parseFloat(item.quote).toFixed(2)})\n`;
          });
        }
        
        if (data.nfts) {
          context += "NFTs: " + data.nfts.items.length + " collections\n";
        }
      });
    }
    
    return context;
  };

  // Fallback mock responses
  const getMockResponse = (query) => {
    console.log("Generating mock response for query:", query);
    
    // Extract pool name from query if present
    const poolNameMatch = query.match(/in\s+([^.?!]+)/i);
    const poolName = poolNameMatch ? poolNameMatch[1].trim() : "this protocol";
    
    console.log("Extracted pool name:", poolName);
    
    // Special case for BTC/ETH
    if (poolName.includes("BTC/ETH") && query.toLowerCase().includes('smart contract risk')) {
      console.log("Generating specific response for BTC/ETH Smart Contract Risk");
      return `Smart Contract Risk for BTC/ETH is rated as medium risk (5.8/10) because:

1. The BTC/ETH pool smart contracts have been audited by reputable firms like CertiK and PeckShield, which provides some assurance of security.

2. However, several minor vulnerabilities were identified in past audits, though they have been addressed by the development team.

3. The contracts are not fully open-source, making independent verification more difficult for security researchers.

4. The cross-chain nature of the BTC/ETH pool introduces additional complexity and potential attack vectors compared to single-chain pools.

5. While there have been no major hacks of this specific pool, similar cross-chain bridges have experienced exploits in the past.

6. The development team regularly updates the contracts, which introduces both security improvements and new risk vectors.

To mitigate smart contract risk when using the BTC/ETH pool, consider using smaller position sizes, monitoring the protocol's security announcements, and being cautious during contract upgrades.`;
    }
    
    if (poolName.includes("BTC/ETH") && query.toLowerCase().includes('economic risk')) {
      console.log("Generating specific response for BTC/ETH Economic Risk");
      return `Economic Risk for BTC/ETH is rated as low risk (3.2/10) because:

1. The pool consists of two major cryptocurrencies (Bitcoin and Ethereum) that have established market presence and liquidity.

2. Both assets have significant market capitalization, reducing the risk of price manipulation compared to smaller tokens.

3. The fee structure of the BTC/ETH pool is designed to be sustainable long-term, generating reliable revenue without excessive costs to users.

4. Historical data shows relatively stable correlation between BTC and ETH during most market conditions, reducing impermanent loss risk compared to more volatile pairs.

5. The pool has maintained consistent liquidity depth even during market downturns, indicating strong user confidence.

6. The economic incentives for liquidity providers are well-balanced, with rewards that compensate for the opportunity cost of capital.

While all DeFi investments carry some level of risk, the BTC/ETH pool's economic design is considered robust compared to many alternatives in the space. The pairing of the two largest cryptocurrencies by market cap provides a relatively balanced risk profile from an economic perspective.`;
    }
    
    if (poolName.includes("BTC/ETH") && query.toLowerCase().includes('centralization risk')) {
      console.log("Generating specific response for BTC/ETH Centralization Risk");
      return `Centralization Risk for BTC/ETH is rated as high risk (8.1/10) because:

1. The protocol has admin keys that can modify critical parameters without timelock, creating a central point of control.

2. A small team controls these admin keys, which is contrary to DeFi's trustless principles.

3. The bridge mechanism between Bitcoin and Ethereum relies on centralized validators for cross-chain transactions.

4. Governance is not fully decentralized, with the core team having significant influence over protocol decisions.

5. The custody solution for Bitcoin in this pool introduces additional centralization concerns, as BTC must be wrapped or represented by a proxy token.

6. Emergency pause functions exist that can halt the protocol, and these are controlled by a small group of individuals.

This centralization means users must trust the team to act in the protocol's best interest, which introduces counterparty risk not present in more decentralized protocols. If you're concerned about centralization risk, consider using pools with more decentralized governance structures or those that operate entirely on a single chain.`;
    }
    
    // Special case for ETH/USDC
    if (poolName.includes("ETH/USDC") && query.toLowerCase().includes('smart contract risk')) {
      console.log("Generating specific response for ETH/USDC Smart Contract Risk");
      return `Smart Contract Risk for ETH/USDC is rated as medium risk (5.8/10) because:

1. The ETH/USDC pool smart contracts have been audited by multiple reputable security firms, which provides a good baseline of security.

2. The contracts have been battle-tested in production with significant value locked for an extended period.

3. However, the contracts are not fully open-source in all components, limiting complete independent verification.

4. The integration with USDC, which is a centralized stablecoin, introduces additional dependencies on Circle's infrastructure.

5. The protocol has implemented timelock delays for administrative functions, but some privileged functions still exist.

6. While there have been no direct exploits of this pool, similar pools on other platforms have experienced vulnerabilities.

To mitigate smart contract risk when using the ETH/USDC pool, consider diversifying your liquidity across multiple protocols, monitoring governance proposals that might affect the pool, and staying informed about security updates.`;
    }
    
    if (poolName.includes("ETH/USDC") && query.toLowerCase().includes('economic risk')) {
      console.log("Generating specific response for ETH/USDC Economic Risk");
      return `Economic Risk for ETH/USDC is rated as low risk (3.2/10) because:

1. ETH is the native asset of Ethereum with strong market presence and liquidity, while USDC is one of the most widely-used regulated stablecoins.

2. The ETH/USDC pair is one of the most liquid trading pairs in DeFi, reducing the risk of price manipulation.

3. The fee structure is designed to be sustainable long-term, generating reliable revenue for liquidity providers.

4. Impermanent loss risk exists due to ETH price volatility, but this is partially mitigated by trading fees in high-volume pools like ETH/USDC.

5. The pool has maintained consistent liquidity depth even during market downturns, indicating strong user confidence.

6. Both assets have significant market capitalization and institutional adoption, providing stability to the pool.

While all DeFi investments carry some level of risk, the ETH/USDC pool's economic design is considered robust compared to many alternatives in the space. The pairing of Ethereum with a regulated stablecoin provides a relatively balanced risk profile from an economic perspective.`;
    }
    
    if (poolName.includes("ETH/USDC") && query.toLowerCase().includes('centralization risk')) {
      console.log("Generating specific response for ETH/USDC Centralization Risk");
      return `Centralization Risk for ETH/USDC is rated as high risk (8.1/10) because:

1. USDC is a centralized stablecoin issued by Circle, which introduces significant counterparty risk.

2. Circle can freeze USDC balances at any time, which could potentially affect the pool's liquidity.

3. The protocol itself has admin keys that can modify certain parameters, creating another layer of centralization.

4. While governance is partially decentralized, the core team and major token holders have significant influence over decisions.

5. The protocol relies on centralized price oracles for certain functions, which could be manipulated or fail.

6. Regulatory actions against Circle or USDC could have cascading effects on the pool's functionality.

This centralization means users must trust both the protocol team and Circle to act in the best interest of users. If you're concerned about centralization risk, consider using pools with more decentralized stablecoins like DAI, or pools on more decentralized networks.`;
    }
    
    // Special case for ORA/USDC
    if (poolName.includes("ORA/USDC") && query.toLowerCase().includes('economic risk')) {
      console.log("Generating specific response for ORA/USDC Economic Risk");
      return `Economic Risk for ORA/USDC is rated as low risk because:

1. The ORA token has a well-designed tokenomics model with controlled emission rates to prevent inflation.

2. The USDC component provides stability as a regulated stablecoin with reliable backing.

3. The liquidity pool has maintained consistent depth, reducing the risk of sudden price impacts.

4. The protocol's fee structure is sustainable, generating reliable revenue without excessive costs to users.

5. The token distribution is relatively decentralized, with no single entity controlling a majority of the supply.

6. The protocol has implemented economic safeguards against market manipulation and flash loan attacks.

While all DeFi investments carry some level of risk, the ORA/USDC pool's economic design is considered robust compared to many alternatives in the space. The combination of a utility token (ORA) with a stable asset (USDC) provides a balanced risk profile from an economic perspective.`;
    }
    
    // Specific responses for risk assessment queries
    if (query.toLowerCase().includes('smart contract risk')) {
      return `Smart Contract Risk for ${poolName} is rated as medium risk because:\n\n1. The protocol has been audited by reputable firms like CertiK and PeckShield, which is a positive sign.\n\n2. However, some minor vulnerabilities were identified in past audits, though they have been addressed.\n\n3. The contracts are not fully open-source, making independent verification more difficult.\n\n4. The protocol has experienced no major hacks, but smaller exploits have occurred in the ecosystem.\n\n5. The development team regularly updates the contracts, which introduces both security improvements and new risk vectors.\n\nTo mitigate smart contract risk, consider using smaller position sizes and monitoring the protocol's security announcements.`;
    }
    else if (query.toLowerCase().includes('economic risk')) {
      return `Economic Risk for ${poolName} is rated as low risk because:\n\n1. The protocol has a sustainable economic model with transaction fees supporting the ecosystem.\n\n2. Token emissions have been reduced over time to prevent excessive inflation.\n\n3. The token distribution is relatively fair, with no excessive concentration among whales.\n\n4. The protocol has maintained its economic model through multiple market cycles.\n\n5. Incentives are aligned between users, liquidity providers, and token holders.\n\nWhile economic risks are lower compared to other protocols, market conditions can still impact yields and token value.`;
    }
    else if (query.toLowerCase().includes('centralization risk')) {
      return `Centralization Risk for ${poolName} is rated as high risk because:\n\n1. The protocol has admin keys that can modify critical parameters without timelock.\n\n2. A small team controls these admin keys, creating a central point of failure.\n\n3. While the team has a good track record, this centralized control is contrary to DeFi's trustless principles.\n\n4. Governance is not fully decentralized, with the core team having significant influence over decisions.\n\n5. The protocol runs primarily on Binance Smart Chain, which itself has centralization concerns.\n\nThis centralization means users must trust the team to act in the protocol's best interest, which introduces counterparty risk not present in more decentralized protocols.`;
    }
    else if (query.toLowerCase().includes('explain the overall risk assessment') || 
             query.toLowerCase().includes('overall risk assessment') ||
             query.toLowerCase().includes('detailed explanation')) {
      return `The overall risk assessment for ${poolName} shows a medium risk profile (6.5/10) based on several factors:\n\n1. Smart Contract Risk (5.8/10): The protocol has been audited, but some minor issues were identified and not all contracts are fully open-source.\n\n2. Economic Risk (3.2/10): The protocol has a sustainable economic model with reasonable incentives and fair token distribution.\n\n3. Centralization Risk (8.1/10): The protocol has admin keys that can modify critical parameters without timelock, controlled by a small team.\n\n4. Liquidity Risk (4.5/10): The protocol has deep liquidity for major pairs but can experience slippage for smaller tokens.\n\n5. Market Risk (6.2/10): As with all DeFi protocols, market volatility can impact yields and token values.\n\nRecommendations:\n- Limit exposure to 5-10% of your portfolio\n- Monitor governance proposals regularly\n- Set up alerts for unusual activity\n- Diversify across multiple protocols to reduce risk\n\nThis assessment is based on current conditions and should be regularly reviewed as the protocol evolves.`;
    }
    
    // General responses for other queries
    if (query.toLowerCase().includes('what is defi')) {
      return "DeFi (Decentralized Finance) refers to financial applications built on blockchain technology that don't rely on central financial intermediaries. Instead, they use smart contracts on blockchains like Ethereum to create protocols that replicate existing financial services in a more open, interoperable way.";
    } 
    else if (query.toLowerCase().includes('yield farm') || query.toLowerCase().includes('farming')) {
      return "Yield farming is a practice where users provide liquidity to DeFi protocols and earn rewards in return. These rewards typically come from transaction fees and token incentives. While yield farming can offer high returns, it also comes with risks like impermanent loss, smart contract vulnerabilities, and market volatility.";
    }
    else if (query.toLowerCase().includes('impermanent loss')) {
      return "Impermanent loss occurs when you provide liquidity to a pool and the price of your deposited assets changes compared to when you deposited them. The greater the change, the more significant the loss. It's called 'impermanent' because the loss is only realized when you withdraw your liquidity. If you keep your assets in the pool, there's a chance the prices could return to their original state, eliminating the loss.";
    }
    else if (query.toLowerCase().includes('liquidity pool') || query.toLowerCase().includes('amm')) {
      return "Liquidity pools are collections of funds locked in smart contracts that facilitate decentralized trading, lending, and other financial activities. Automated Market Makers (AMMs) use these pools to allow digital assets to be traded automatically and permissionlessly using algorithms rather than an order book. Popular AMMs include Uniswap, Curve, and Balancer.";
    }
    else if (query.toLowerCase().includes('risk') || query.toLowerCase().includes('safe')) {
      return "DeFi protocols carry several types of risks:\n\n1. Smart Contract Risk: Vulnerabilities in the code\n2. Economic Risk: Flaws in the protocol's economic design\n3. Oracle Risk: Manipulation of price feeds\n4. Governance Risk: Malicious proposals or centralized control\n5. Regulatory Risk: Potential legal challenges\n\nTo minimize these risks, consider diversifying across protocols, starting with small amounts, using established protocols with security audits, and staying informed about protocol changes.";
    }
    else if (query.toLowerCase().includes('apy') || query.toLowerCase().includes('apr')) {
      return "APY (Annual Percentage Yield) and APR (Annual Percentage Rate) are metrics used to measure returns in DeFi:\n\n- APR is the simple interest rate over a year without compounding\n- APY includes the effect of compounding\n\nFor example, an investment with 10% APR compounded daily would have an APY of about 10.52%. In DeFi, high APYs can be attractive but often come with higher risks or may be temporary during initial launch periods.";
    }
    else if (query.toLowerCase().includes('gas') || query.toLowerCase().includes('fees')) {
      return "Gas fees are payments made by users to compensate for the computing energy required to process and validate transactions on the blockchain. In periods of high network congestion, gas fees can increase significantly. Some ways to manage gas costs include:\n\n1. Using Layer 2 solutions like Optimism or Arbitrum\n2. Transacting during off-peak hours\n3. Batching multiple transactions together\n4. Setting appropriate gas limits for your transactions";
    }
    else if (query.toLowerCase().includes('stablecoin')) {
      return "Stablecoins are cryptocurrencies designed to maintain a stable value, usually pegged to a fiat currency like USD. They come in several types:\n\n1. Fiat-collateralized (USDC, USDT): Backed by actual dollars in reserve\n2. Crypto-collateralized (DAI): Backed by excess crypto collateral\n3. Algorithmic (FRAX): Use algorithms to maintain their peg\n\nStablecoins are crucial in DeFi as they provide a way to preserve value without exiting to traditional finance.";
    }
    else if (query.toLowerCase().includes('ora') || query.toLowerCase().includes('agent')) {
      return "ORA (Onchain Perpetual Agent Framework) enables AI agents to operate autonomously on blockchain networks. These agents can:\n\n1. Monitor DeFi protocols for opportunities or risks\n2. Execute transactions based on predefined conditions\n3. Provide personalized insights about complex protocols\n4. Optimize strategies across multiple platforms\n\nBy using ORA agents, DeFi users can automate complex strategies, receive timely notifications, and make more informed decisions without needing to constantly monitor the market.";
    }
    else {
      return "That's an interesting question about DeFi. While I don't have a pre-written answer for this specific query, I can help explain various DeFi concepts, protocols, and strategies. Feel free to ask about specific topics like liquidity pools, yield farming, stablecoins, or risk management in DeFi.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    console.log("Submitting query:", input);
    console.log("useRealApis:", useRealApis);
    
    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    try {
      // Get Claude's response
      const claudeResponse = await getClaudeResponse(input);
      setMessages(prev => [...prev, { role: 'assistant', content: claudeResponse }]);
    } catch (error) {
      console.error("Failed to get Claude response:", error);
      // Use mock response as fallback
      const mockResponse = getMockResponse(input);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: mockResponse + "\n\n(Note: This is a mock response due to API connection issues.)" 
      }]);
    }
  };

  return (
    <div className="claude-assistant-container">
      <div className="assistant-header">
        <h3>DeFi AI Assistant</h3>
        <p className="assistant-subtitle">
          Powered by Claude 3 Haiku
          {apiStatus.loading ? (
            <span> (Checking API status...)</span>
          ) : apiStatus.success ? (
            <span className="api-status success"> (API Connected)</span>
          ) : (
            <span className="api-status error"> (API Disconnected - Using Mock Data)</span>
          )}
        </p>
      </div>
      
      <div className="messages-container">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
          >
            <div className="message-content">
              {message.content.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < message.content.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about DeFi concepts, protocols, or strategies..."
          className="message-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
      
      <div className="suggested-questions">
        <p>Try asking about:</p>
        <div className="question-chips">
          <button onClick={() => setInput("What is the current price of Ethereum?")}>ETH Price</button>
          <button onClick={() => setInput("Explain impermanent loss")}>Impermanent loss</button>
          <button onClick={() => setInput("What's Uniswap's TVL?")}>Uniswap TVL</button>
          <button onClick={() => setInput("Analyze wallet 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045")}>Vitalik's Wallet</button>
          <button onClick={() => setInput("What NFTs does 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 own?")}>Vitalik's NFTs</button>
        </div>
      </div>
      
      <div className="api-toggle">
        <label>
          <input 
            type="checkbox" 
            checked={useRealApis} 
            onChange={() => setUseRealApis(!useRealApis)} 
          />
          Use real API data (via proxy server)
        </label>
      </div>
    </div>
  );
}

export default ClaudeAssistant; 