import React, { useState, useEffect } from 'react';
import './AgentStatusDashboard.css';

function AgentStatusDashboard() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch agent data
    fetchAgentData();
    
    // Set up refresh interval (every 30 seconds)
    const intervalId = setInterval(fetchAgentData, 30000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const fetchAgentData = async () => {
    setLoading(true);
    try {
      // In a real implementation, this would call the Covalent API
      // For now, we'll use mock data
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      const mockAgents = [
        {
          id: 'agent-001',
          name: 'ETH/USDC Risk Monitor',
          type: 'Risk Assessment',
          status: 'active',
          created: '2023-10-15T14:30:00Z',
          lastActive: '2023-10-20T09:45:22Z',
          protocols: ['Uniswap V3', 'Aave'],
          metrics: {
            transactionsMonitored: 1245,
            alertsGenerated: 8,
            successRate: 99.2
          }
        },
        {
          id: 'agent-002',
          name: 'BTC/ETH Yield Optimizer',
          type: 'Yield Strategy',
          status: 'paused',
          created: '2023-09-28T10:15:00Z',
          lastActive: '2023-10-19T22:10:05Z',
          protocols: ['Curve', 'Convex', 'Yearn'],
          metrics: {
            transactionsExecuted: 28,
            yieldGenerated: 3.4,
            gasOptimization: 12.5
          }
        },
        {
          id: 'agent-003',
          name: 'ORA/USDC Liquidity Manager',
          type: 'Liquidity Management',
          status: 'active',
          created: '2023-10-05T08:45:00Z',
          lastActive: '2023-10-20T10:12:33Z',
          protocols: ['Balancer', 'Uniswap V3'],
          metrics: {
            rebalances: 12,
            feesCollected: 245.8,
            impermanentLoss: -0.8
          }
        }
      ];
      
      setAgents(mockAgents);
      setError(null);
    } catch (err) {
      console.error('Error fetching agent data:', err);
      setError('Failed to load agent data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'active':
        return '#4CAF50';
      case 'paused':
        return '#FFC107';
      case 'error':
        return '#F44336';
      default:
        return '#9E9E9E';
    }
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };
  
  const calculateUptime = (createdDate) => {
    const created = new Date(createdDate);
    const now = new Date();
    const uptimeDays = Math.floor((now - created) / (1000 * 60 * 60 * 24));
    return `${uptimeDays} days`;
  };

  return (
    <div className="agent-status-dashboard">
      <h3>Agent Status Dashboard</h3>
      
      {loading ? (
        <div className="loading-indicator">Loading agent data...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="agent-grid">
          {agents.map(agent => (
            <div key={agent.id} className="agent-card">
              <div className="agent-header">
                <h4>{agent.name}</h4>
                <div 
                  className="status-indicator" 
                  style={{ backgroundColor: getStatusColor(agent.status) }}
                >
                  {agent.status}
                </div>
              </div>
              
              <div className="agent-details">
                <div className="detail-row">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">{agent.type}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Protocols:</span>
                  <span className="detail-value">{agent.protocols.join(', ')}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Created:</span>
                  <span className="detail-value">{formatDate(agent.created)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Last Active:</span>
                  <span className="detail-value">{formatDate(agent.lastActive)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Uptime:</span>
                  <span className="detail-value">{calculateUptime(agent.created)}</span>
                </div>
              </div>
              
              <div className="agent-metrics">
                {Object.entries(agent.metrics).map(([key, value]) => (
                  <div key={key} className="metric">
                    <div className="metric-value">
                      {typeof value === 'number' ? value.toFixed(1) : value}
                      {key.includes('Generated') || key.includes('Rate') || key.includes('Loss') || key.includes('Optimization') ? '%' : ''}
                      {key.includes('Collected') ? ' USDC' : ''}
                    </div>
                    <div className="metric-label">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="agent-actions">
                <button className="action-button">View Details</button>
                <button className="action-button">
                  {agent.status === 'active' ? 'Pause Agent' : 'Resume Agent'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AgentStatusDashboard; 
