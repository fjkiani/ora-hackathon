import React, { useState, useRef, useEffect } from 'react';
import './ClaudeAssistant.css';
import { getTokenData, getProtocolData, getWalletBalances, getNftData } from '../services/defiDataService';

function ClaudeAssistant() {
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
  const [useRealApis, setUseRealApis] = useState(false);

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
      
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-sonnet-20240229',
          max_tokens: 100,
          messages: [
            {
              role: 'user',
              content: 'Hello, can you hear me? This is a test.'
            }
          ]
        })
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Claude API test failed:", errorText);
        return false;
      }
      
      const data = await response.json();
      console.log("Claude API test successful:", data);
      return true;
    } catch (error) {
      console.error("Claude API test error:", error);
      return false;
    }
  };

  // Update the initial useEffect to call this test
  useEffect(() => {
    console.log("Anthropic API Key available:", !!apiKey);
    console.log("Covalent API Key available:", !!process.env.REACT_APP_COVALENT_API_KEY);
    
    // Test the Claude API
    testClaudeAPI().then(success => {
      console.log("Claude API test result:", success ? "Success" : "Failed");
    });
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
      
      console.log("Making API call to Claude with API key:", apiKey.substring(0, 10) + "...");
      
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-sonnet-20240229',
          max_tokens: 1000,
          messages: [
            {
              role: 'system',
              content: `You are a helpful DeFi assistant that explains complex DeFi concepts in simple terms. 
                        Focus on being educational and providing accurate information about blockchain, 
                        cryptocurrencies, and decentralized finance protocols. When discussing risks, 
                        be balanced and factual. 
                        
                        Here is the latest DeFi data that you can reference:
                        ${defiContext}`
            },
            ...messages.filter(msg => msg.role !== 'system').map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            {
              role: 'user',
              content: query
            }
          ]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`API request failed with status ${response.status}:`, errorText);
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("Claude API response:", data);
      setIsTyping(false);
      
      if (data.content && data.content[0] && data.content[0].text) {
        return data.content[0].text;
      } else {
        console.error("Unexpected API response format:", data);
        throw new Error("Unexpected API response format");
      }
    } catch (error) {
      console.error('Error calling Claude API:', error);
      return getMockResponse(query);
    }
  };

  // Fetch relevant data based on user query
  const fetchRelevantData = async (query) => {
    const lowerQuery = query.toLowerCase();
    
    try {
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
    // Simulate delay
    setTimeout(() => setIsTyping(false), 1000);
    
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
    
    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Get Claude's response
    const claudeResponse = await getClaudeResponse(input);
    setMessages(prev => [...prev, { role: 'assistant', content: claudeResponse }]);
  };

  return (
    <div className="claude-assistant-container">
      <div className="assistant-header">
        <h3>Claude DeFi Assistant</h3>
        <span className="assistant-subtitle">Powered by Anthropic's Claude with Real-Time DeFi Data</span>
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
          Use real API data
        </label>
      </div>
    </div>
  );
}

export default ClaudeAssistant; 