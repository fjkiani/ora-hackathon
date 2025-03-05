import React, { useState } from 'react';
import { getMockPoolData, getMockTokenData } from '../services/mockDataService';
import RiskAssessment from './RiskAssessment';
import ModeSelector from './ModeSelector';
import DataFlowVisualization from './DataFlowVisualization';
import TransactionLogs from './TransactionLogs';
import AgentCreationInterface from './AgentCreationInterface';
import ClaudeAssistant from './ClaudeAssistant';
import ApiTester from './ApiTester';
import AgentStatusDashboard from './AgentStatusDashboard';
import ProtocolMonitoringDashboard from './ProtocolMonitoringDashboard';
import TestComponent from './TestComponent';
import './Dashboard.css';

function Dashboard() {
  const poolData = getMockPoolData();
  const tokenData = getMockTokenData();
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedPool, setSelectedPool] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const connectWallet = () => {
    // Mock wallet connection
    setWalletConnected(true);
    setWalletAddress('0x1a2...3b4c');
  };

  return (
    <div className="dashboard">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="dashboard-title">System Overview</h1>
        
        <button 
          className={`wallet-connect-button ${walletConnected ? 'connected' : ''}`}
          onClick={connectWallet}
        >
          {walletConnected ? (
            <>Connected <span className="address">{walletAddress}</span></>
          ) : (
            'Connect Wallet'
          )}
        </button>
      </div>
      
      <div className="dashboard-tabs">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`tab-button ${activeTab === 'assistant' ? 'active' : ''}`}
          onClick={() => setActiveTab('assistant')}
        >
          Claude Assistant
        </button>
        <button 
          className={`tab-button ${activeTab === 'ora' ? 'active' : ''}`}
          onClick={() => setActiveTab('ora')}
        >
          ORA Integration
        </button>
        <button 
          className={`tab-button ${activeTab === 'framework' ? 'active' : ''}`}
          onClick={() => setActiveTab('framework')}
        >
          ORA Framework
        </button>
        <button 
          className={`tab-button ${activeTab === 'create' ? 'active' : ''}`}
          onClick={() => setActiveTab('create')}
        >
          Create Agent
        </button>
        <button 
          className={`tab-button ${activeTab === 'test' ? 'active' : ''}`}
          onClick={() => setActiveTab('test')}
        >
          API Test
        </button>
      </div>
      
      {activeTab === 'overview' && (
        <>
          <section className="token-stats">
            <h2>Token Statistics</h2>
            <div className="stats-grid">
              {tokenData.map((data, index) => (
                <div key={index} className="stat-card">
                  <h3>{data.name}</h3>
                  <div className="stat-item">
                    <span>Price:</span>
                    <span>{data.price}</span>
                  </div>
                  <div className="stat-item">
                    <span>24h Change:</span>
                    <span>{data.change24h}</span>
                  </div>
                  <div className="stat-item">
                    <span>Market Cap:</span>
                    <span>{data.marketCap}</span>
                  </div>
                  <div className="stat-item">
                    <span>Volume:</span>
                    <span>{data.volume}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="pool-stats">
            <h2>Pool Statistics</h2>
            <div className="stats-grid">
              {poolData.map((data, pool) => (
                <div key={pool} className="stat-card">
                  <h3>{data.name}</h3>
                  <div className="stat-item">
                    <span>TVL:</span>
                    <span>{data.tvl}</span>
                  </div>
                  <div className="stat-item">
                    <span>APR:</span>
                    <span>{data.apr}</span>
                  </div>
                  <div className="stat-item">
                    <span>Total Staked:</span>
                    <span>{data.totalStaked}</span>
                  </div>
                  <div className="stat-item">
                    <span>Rewards:</span>
                    <span>{data.rewards.join(', ')}</span>
                  </div>
                  
                  <div style={{ marginTop: '1rem' }}>
                    {selectedPool === pool ? (
                      <RiskAssessment poolName={data.name} />
                    ) : (
                      <button 
                        className="action-button risk-button"
                        onClick={() => setSelectedPool(pool)}
                      >
                        Assess Risk
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
      
      {activeTab === 'assistant' && (
        <ClaudeAssistant />
      )}
      
      {activeTab === 'ora' && (
        <div className="ora-integration-container">
          <div className="ora-section">
            <AgentStatusDashboard />
          </div>
          
          <div className="ora-section">
            <ProtocolMonitoringDashboard />
          </div>
          
          <div className="ora-section ora-grid">
            <div className="ora-grid-item">
              <ModeSelector />
            </div>
            <div className="ora-grid-item">
              <AgentCreationInterface />
            </div>
            <div className="ora-grid-item">
              <TransactionLogs />
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'framework' && (
        <div className="framework-container">
          <DataFlowVisualization />
        </div>
      )}
      
      {activeTab === 'create' && (
        <AgentCreationInterface />
      )}
      
      {activeTab === 'test' && (
        <ApiTester />
      )}
      
      <footer className="app-footer">
        <p>AI-Powered DeFi Protocol Navigator & Intelligent Risk Advisor</p>
      </footer>
    </div>
  );
}

export default Dashboard; 