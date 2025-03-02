import React, { useState, useEffect } from 'react';
import { getTokenData, getProtocolData, getWalletBalances, getNftData } from '../services/defiDataService';

function ApiTester() {
  const [results, setResults] = useState({
    anthropic: { status: 'pending', data: null, error: null },
    coingecko: { status: 'pending', data: null, error: null },
    defillama: { status: 'pending', data: null, error: null },
    goldrush: { status: 'pending', data: null, error: null }
  });

  useEffect(() => {
    // Test Anthropic API
    const testAnthropic = async () => {
      try {
        const apiKey = process.env.REACT_APP_ANTHROPIC_API_KEY;
        console.log("Testing Anthropic API with key:", apiKey ? apiKey.substring(0, 10) + "..." : "undefined");
        
        if (!apiKey) {
          throw new Error("API key is undefined");
        }
        
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
          throw new Error(`API request failed with status ${response.status}: ${errorText}`);
        }
        
        const data = await response.json();
        setResults(prev => ({
          ...prev,
          anthropic: { status: 'success', data, error: null }
        }));
      } catch (error) {
        console.error("Anthropic API test error:", error);
        setResults(prev => ({
          ...prev,
          anthropic: { status: 'error', data: null, error: error.message }
        }));
      }
    };
    
    // Test CoinGecko API
    const testCoinGecko = async () => {
      try {
        const data = await getTokenData(['ethereum']);
        setResults(prev => ({
          ...prev,
          coingecko: { status: 'success', data, error: null }
        }));
      } catch (error) {
        setResults(prev => ({
          ...prev,
          coingecko: { status: 'error', data: null, error: error.message }
        }));
      }
    };
    
    // Test DeFi Llama API
    const testDefiLlama = async () => {
      try {
        const data = await getProtocolData(['uniswap']);
        setResults(prev => ({
          ...prev,
          defillama: { status: 'success', data, error: null }
        }));
      } catch (error) {
        setResults(prev => ({
          ...prev,
          defillama: { status: 'error', data: null, error: error.message }
        }));
      }
    };
    
    // Test GoldRush API
    const testGoldRush = async () => {
      try {
        const data = await getWalletBalances('eth-mainnet', '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');
        setResults(prev => ({
          ...prev,
          goldrush: { status: 'success', data, error: null }
        }));
      } catch (error) {
        setResults(prev => ({
          ...prev,
          goldrush: { status: 'error', data: null, error: error.message }
        }));
      }
    };
    
    testAnthropic();
    testCoinGecko();
    testDefiLlama();
    testGoldRush();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>API Tester</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Anthropic API</h3>
        <p>Status: {results.anthropic.status}</p>
        {results.anthropic.error && <p style={{ color: 'red' }}>Error: {results.anthropic.error}</p>}
        {results.anthropic.data && (
          <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
            {JSON.stringify(results.anthropic.data, null, 2)}
          </pre>
        )}
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>CoinGecko API</h3>
        <p>Status: {results.coingecko.status}</p>
        {results.coingecko.error && <p style={{ color: 'red' }}>Error: {results.coingecko.error}</p>}
        {results.coingecko.data && (
          <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px', overflow: 'auto', maxHeight: '200px' }}>
            {JSON.stringify(results.coingecko.data, null, 2)}
          </pre>
        )}
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>DeFi Llama API</h3>
        <p>Status: {results.defillama.status}</p>
        {results.defillama.error && <p style={{ color: 'red' }}>Error: {results.defillama.error}</p>}
        {results.defillama.data && (
          <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px', overflow: 'auto', maxHeight: '200px' }}>
            {JSON.stringify(results.defillama.data, null, 2)}
          </pre>
        )}
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>GoldRush API</h3>
        <p>Status: {results.goldrush.status}</p>
        {results.goldrush.error && <p style={{ color: 'red' }}>Error: {results.goldrush.error}</p>}
        {results.goldrush.data && (
          <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px', overflow: 'auto', maxHeight: '200px' }}>
            {JSON.stringify(results.goldrush.data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

export default ApiTester; 