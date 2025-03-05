import React, { useState, useEffect } from 'react';
import ClaudeAssistant from './ClaudeAssistant';
import DataVisualization from './DataVisualization';
import TransactionSimulator from './TransactionSimulator';
import PortfolioAnalyzer from './PortfolioAnalyzer';
import StrategyBuilder from './StrategyBuilder';
import MarketAlerts from './MarketAlerts';
import WalletIntegration from './WalletIntegration';
import InteractiveTutorial from './InteractiveTutorial';
import RiskAssessment from './RiskAssessment';
import './DashboardLayout.css';

function DashboardLayout() {
  const [activeTab, setActiveTab] = useState('assistant');
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedPool, setSelectedPool] = useState('BTC/ETH');
  const [availablePools, setAvailablePools] = useState([
    'BTC/ETH',
    'ETH/USDC',
    'ORA/USDC',
    'WBTC/ETH',
    'ETH/DAI',
    'LINK/ETH'
  ]);
  const [assistantQuery, setAssistantQuery] = useState('');
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'ETH Price',
        data: [1500, 1700, 1900, 2200, 2400, 2460],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  });

  // Function to handle wallet connection
  const handleWalletConnected = (address) => {
    setWalletAddress(address);
    // Automatically query the assistant about the connected wallet
    setAssistantQuery(`Analyze wallet ${address}`);
  };

  // Function to handle pool selection
  const handlePoolSelection = (poolName) => {
    console.log("Selected pool:", poolName);
    setSelectedPool(poolName);
    
    // If we're on the risk tab, refresh the risk assessment
    if (activeTab === 'risk') {
      console.log("Refreshing risk assessment for pool:", poolName);
    }
  };

  // Function to handle risk assessment requests
  const handleRiskAssessment = (poolName) => {
    setSelectedPool(poolName);
    setActiveTab('assistant');
    setAssistantQuery(`What are the risks of investing in ${poolName}?`);
  };

  // Function to handle strategy suggestions
  const handleStrategyRequest = (strategy) => {
    setActiveTab('assistant');
    setAssistantQuery(`Suggest a ${strategy} strategy for the current market conditions`);
  };

  // Function to handle requests for more information
  const handleRequestMoreInfo = (question) => {
    console.log("==========================================");
    console.log("Requesting more info:", question);
    console.log("Current activeTab:", activeTab);
    console.log("Current assistantQuery:", assistantQuery);
    console.log("Question type:", typeof question);
    console.log("Question length:", question ? question.length : 0);
    console.log("Question content:", JSON.stringify(question));
    console.log("==========================================");
    
    // First set the query, then switch tabs
    setAssistantQuery(question);
    console.log("Set assistantQuery to:", question);
    
    // Then switch to the assistant tab with a slight delay to ensure state updates
    setTimeout(() => {
      setActiveTab('assistant');
      console.log("Set activeTab to: assistant");
      
      // Log the state after setting
      setTimeout(() => {
        console.log("After state update - assistantQuery:", assistantQuery);
        console.log("After state update - activeTab:", activeTab);
      }, 100);
    }, 50);
  };

  // Function to visualize data based on assistant response
  const handleVisualizationRequest = (dataType) => {
    // Update chart data based on the requested visualization
    if (dataType === 'eth_price_history') {
      setChartData({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'ETH Price',
            data: [1500, 1700, 1900, 2200, 2400, 2460],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      });
    } else if (dataType === 'protocol_tvl') {
      setChartData({
        labels: ['Uniswap', 'Aave', 'Compound', 'Curve', 'MakerDAO'],
        datasets: [
          {
            label: 'TVL (billions)',
            data: [5.2, 4.8, 3.7, 3.5, 7.1],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ],
          }
        ]
      });
    }
  };

  // Function to handle tab switching
  const handleTabSwitch = (tab) => {
    console.log("Switching to tab:", tab);
    
    // Only clear the query when switching to the assistant tab if it's a direct tab click
    // This prevents clearing queries that are set by other components
    if (tab === 'assistant' && assistantQuery === '') {
      console.log("Tab switch to assistant - no query to preserve");
    } else if (tab === 'assistant') {
      console.log("Tab switch to assistant - preserving query:", assistantQuery);
    } else {
      // If switching to any other tab, it's safe to clear the query
      console.log("Switching away from assistant tab, clearing query");
      setAssistantQuery('');
    }
    
    setActiveTab(tab);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>DeFi Navigator</h2>
        <WalletIntegration onWalletConnected={handleWalletConnected} />
      </div>

      <div className="pool-selector">
        <label>Select Pool: </label>
        <select 
          value={selectedPool} 
          onChange={(e) => handlePoolSelection(e.target.value)}
          className="pool-select"
        >
          {availablePools.map((pool) => (
            <option key={pool} value={pool}>{pool}</option>
          ))}
        </select>
      </div>

      <div className="dashboard-tabs">
        <button 
          className={activeTab === 'assistant' ? 'active' : ''} 
          onClick={() => handleTabSwitch('assistant')}
        >
          AI Assistant
        </button>
        <button 
          className={activeTab === 'portfolio' ? 'active' : ''} 
          onClick={() => handleTabSwitch('portfolio')}
        >
          Portfolio
        </button>
        <button 
          className={activeTab === 'simulator' ? 'active' : ''} 
          onClick={() => handleTabSwitch('simulator')}
        >
          Transaction Simulator
        </button>
        <button 
          className={activeTab === 'strategy' ? 'active' : ''} 
          onClick={() => handleTabSwitch('strategy')}
        >
          Strategy Builder
        </button>
        <button 
          className={activeTab === 'risk' ? 'active' : ''} 
          onClick={() => handleTabSwitch('risk')}
        >
          Risk Assessment
        </button>
        <button 
          className={activeTab === 'learn' ? 'active' : ''} 
          onClick={() => handleTabSwitch('learn')}
        >
          Learn
        </button>
      </div>

      <div className="dashboard-content">
        <div className="main-content">
          {activeTab === 'assistant' && <ClaudeAssistant initialQuery={assistantQuery} onClearQuery={() => setAssistantQuery('')} />}
          {activeTab === 'portfolio' && <PortfolioAnalyzer walletAddress={walletAddress} onAnalysisComplete={(analysis) => {
            // When analysis is complete, you can ask the assistant about it
            setActiveTab('assistant');
            setAssistantQuery(`Analyze this portfolio data and suggest improvements: ${JSON.stringify(analysis)}`);
          }} />}
          {activeTab === 'simulator' && <TransactionSimulator onSimulationComplete={(result) => {
            // When simulation is complete, you can ask the assistant about it
            setActiveTab('assistant');
            setAssistantQuery(`Analyze this transaction simulation and tell me if it's a good deal: ${JSON.stringify(result)}`);
          }} />}
          {activeTab === 'strategy' && <StrategyBuilder onStrategyCreated={(strategy) => {
            // When strategy is created, you can ask the assistant to evaluate it
            setActiveTab('assistant');
            setAssistantQuery(`Evaluate this DeFi strategy: ${JSON.stringify(strategy)}`);
          }} />}
          {activeTab === 'risk' && <RiskAssessment 
            poolName={selectedPool} 
            onRequestMoreInfo={handleRequestMoreInfo} 
          />}
          {activeTab === 'learn' && <InteractiveTutorial topic="liquidity-pools" onAskQuestion={(question) => {
            // When user has a question during the tutorial
            setActiveTab('assistant');
            setAssistantQuery(question);
          }} />}
        </div>
        
        <div className="sidebar">
          <div className="sidebar-section">
            <h3>Market Overview</h3>
            <DataVisualization data={chartData} type="price_history" />
            <div className="visualization-buttons">
              <button onClick={() => handleVisualizationRequest('eth_price_history')}>ETH Price</button>
              <button onClick={() => handleVisualizationRequest('protocol_tvl')}>Protocol TVL</button>
            </div>
          </div>
          
          <div className="sidebar-section">
            <MarketAlerts onAlertClick={(alert) => {
              // When user clicks on an alert, ask the assistant about it
              setActiveTab('assistant');
              setAssistantQuery(`Tell me more about this alert: ${alert.message}`);
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout; 