import React, { useState } from 'react';
import axios from 'axios';
import './AgentCreationInterface.css';

function AgentCreationInterface() {
  const [agentName, setAgentName] = useState('');
  const [agentType, setAgentType] = useState('risk');
  const [agentDescription, setAgentDescription] = useState('');
  const [targetProtocols, setTargetProtocols] = useState([]);
  const [protocolInput, setProtocolInput] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  
  // New states for Claude integration
  const [isGettingSuggestions, setIsGettingSuggestions] = useState(false);
  const [claudeSuggestions, setClaudeSuggestions] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleAddProtocol = () => {
    if (protocolInput && !targetProtocols.includes(protocolInput)) {
      setTargetProtocols([...targetProtocols, protocolInput]);
      setProtocolInput('');
    }
  };

  const handleRemoveProtocol = (protocol) => {
    setTargetProtocols(targetProtocols.filter(p => p !== protocol));
  };
  
  // Function to get suggestions from Claude
  const getClaudeSuggestions = async () => {
    if (!agentName || !agentType || targetProtocols.length === 0) {
      alert('Please fill in the agent name, type, and at least one protocol before getting suggestions.');
      return;
    }
    
    setIsGettingSuggestions(true);
    
    try {
      // In a full implementation, this would call the Claude API
      // For MVP, we'll simulate the API call with mock responses
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate mock suggestions based on agent type
      let mockSuggestions;
      
      switch (agentType) {
        case 'risk':
          mockSuggestions = {
            capabilities: [
              'Smart contract vulnerability scanning',
              'Economic risk assessment',
              'Centralization risk analysis',
              'Liquidity monitoring',
              'Price impact prediction'
            ],
            monitoringMetrics: [
              'TVL changes',
              'Protocol governance actions',
              'Smart contract upgrades',
              'Unusual transaction patterns',
              'Price volatility'
            ],
            recommendations: [
              'Set up alerts for significant TVL changes',
              'Monitor governance proposals closely',
              'Implement circuit breakers for unusual activity',
              'Regularly audit connected protocols'
            ]
          };
          break;
          
        case 'explainer':
          mockSuggestions = {
            capabilities: [
              'Protocol mechanism explanation',
              'Transaction breakdown',
              'Fee structure analysis',
              'Comparison with similar protocols',
              'Historical context provision'
            ],
            monitoringMetrics: [
              'User interaction patterns',
              'Common user errors',
              'Frequently asked questions',
              'Protocol parameter changes'
            ],
            recommendations: [
              'Create a knowledge base of common questions',
              'Develop step-by-step guides for complex interactions',
              'Maintain an updated glossary of protocol-specific terms'
            ]
          };
          break;
          
        case 'monitor':
          mockSuggestions = {
            capabilities: [
              'Real-time transaction monitoring',
              'Anomaly detection',
              'Gas price optimization',
              'MEV protection',
              'Slippage monitoring'
            ],
            monitoringMetrics: [
              'Transaction success rate',
              'Gas costs',
              'Execution time',
              'Price impact',
              'Sandwich attack attempts'
            ],
            recommendations: [
              'Set up alerts for failed transactions',
              'Implement gas price strategies based on urgency',
              'Monitor for front-running attempts',
              'Track slippage across different pools'
            ]
          };
          break;
          
        case 'advisor':
          mockSuggestions = {
            capabilities: [
              'Yield optimization',
              'Portfolio diversification',
              'Risk-adjusted return calculation',
              'Opportunity identification',
              'Market trend analysis'
            ],
            monitoringMetrics: [
              'APY across protocols',
              'Impermanent loss',
              'Correlation between assets',
              'Historical volatility',
              'Protocol incentives'
            ],
            recommendations: [
              'Rebalance positions based on risk tolerance',
              'Diversify across multiple protocols',
              'Set profit-taking thresholds',
              'Monitor governance tokens for additional yield'
            ]
          };
          break;
          
        default:
          mockSuggestions = {
            capabilities: [
              'Basic protocol interaction',
              'Data collection and analysis',
              'User notification',
              'Transaction execution'
            ],
            monitoringMetrics: [
              'Protocol activity',
              'User engagement',
              'Transaction success rate'
            ],
            recommendations: [
              'Start with simple monitoring tasks',
              'Gradually increase complexity as reliability is proven',
              'Maintain detailed logs of all actions'
            ]
          };
      }
      
      setClaudeSuggestions(mockSuggestions);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error getting Claude suggestions:', error);
      alert('Failed to get suggestions. Please try again later.');
    } finally {
      setIsGettingSuggestions(false);
    }
  };
  
  // Function to apply Claude's suggestions to the agent description
  const applySuggestions = () => {
    if (!claudeSuggestions) return;
    
    const formattedSuggestions = `
This agent will focus on ${targetProtocols.join(', ')} with the following capabilities:
${claudeSuggestions.capabilities.map(cap => `- ${cap}`).join('\n')}

Key metrics to monitor:
${claudeSuggestions.monitoringMetrics.map(metric => `- ${metric}`).join('\n')}

Recommendations:
${claudeSuggestions.recommendations.map(rec => `- ${rec}`).join('\n')}
    `;
    
    setAgentDescription(formattedSuggestions.trim());
    setShowSuggestions(false);
  };

  const handleCreateAgent = () => {
    if (agentName && agentType && targetProtocols.length > 0) {
      setIsCreating(true);
      // Simulate creation delay
      setTimeout(() => {
        setIsCreating(false);
        setIsCreated(true);
      }, 2000);
    }
  };

  const handleReset = () => {
    setAgentName('');
    setAgentType('risk');
    setAgentDescription('');
    setTargetProtocols([]);
    setClaudeSuggestions(null);
    setShowSuggestions(false);
    setIsCreated(false);
  };

  return (
    <div className="agent-creation-container">
      <h3>Create ORA Agent</h3>
      
      {!isCreated ? (
        <div className="agent-form">
          <div className="form-group">
            <label>Agent Name</label>
            <input 
              type="text" 
              value={agentName} 
              onChange={(e) => setAgentName(e.target.value)}
              placeholder="e.g., ETH/USDC Risk Analyzer"
            />
          </div>
          
          <div className="form-group">
            <label>Agent Type</label>
            <select value={agentType} onChange={(e) => setAgentType(e.target.value)}>
              <option value="risk">Risk Assessment</option>
              <option value="explainer">Protocol Explainer</option>
              <option value="monitor">Transaction Monitor</option>
              <option value="advisor">Investment Advisor</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Target Protocols</label>
            <div className="protocol-input-group">
              <input 
                type="text" 
                value={protocolInput} 
                onChange={(e) => setProtocolInput(e.target.value)}
                placeholder="e.g., Uniswap V3"
              />
              <button onClick={handleAddProtocol}>Add</button>
            </div>
            
            {targetProtocols.length > 0 && (
              <div className="protocol-tags">
                {targetProtocols.map((protocol, index) => (
                  <div key={index} className="protocol-tag">
                    {protocol}
                    <span 
                      className="remove-tag" 
                      onClick={() => handleRemoveProtocol(protocol)}
                    >
                      ×
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="form-group">
            <div className="description-header">
              <label>Description</label>
              <button 
                className="suggestion-button"
                onClick={getClaudeSuggestions}
                disabled={isGettingSuggestions}
              >
                {isGettingSuggestions ? 'Getting Suggestions...' : 'Get Claude Suggestions'}
              </button>
            </div>
            <textarea 
              value={agentDescription} 
              onChange={(e) => setAgentDescription(e.target.value)}
              placeholder="Describe what your agent will do..."
              rows={6}
            />
          </div>
          
          {showSuggestions && claudeSuggestions && (
            <div className="claude-suggestions">
              <h4>Claude's Suggestions</h4>
              
              <div className="suggestion-section">
                <h5>Recommended Capabilities</h5>
                <ul>
                  {claudeSuggestions.capabilities.map((cap, index) => (
                    <li key={index}>{cap}</li>
                  ))}
                </ul>
              </div>
              
              <div className="suggestion-section">
                <h5>Key Metrics to Monitor</h5>
                <ul>
                  {claudeSuggestions.monitoringMetrics.map((metric, index) => (
                    <li key={index}>{metric}</li>
                  ))}
                </ul>
              </div>
              
              <div className="suggestion-section">
                <h5>Recommendations</h5>
                <ul>
                  {claudeSuggestions.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
              
              <div className="suggestion-actions">
                <button onClick={applySuggestions}>Apply Suggestions</button>
                <button onClick={() => setShowSuggestions(false)}>Dismiss</button>
              </div>
            </div>
          )}
          
          <button 
            className="create-agent-button"
            onClick={handleCreateAgent}
            disabled={!agentName || targetProtocols.length === 0 || isCreating}
          >
            {isCreating ? 'Creating...' : 'Create Agent'}
          </button>
        </div>
      ) : (
        <div className="agent-created">
          <div className="success-icon">✓</div>
          <h4>Agent Created Successfully!</h4>
          <div className="agent-details">
            <div className="agent-detail-row">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{agentName}</span>
            </div>
            <div className="agent-detail-row">
              <span className="detail-label">Type:</span>
              <span className="detail-value">{agentType.charAt(0).toUpperCase() + agentType.slice(1)}</span>
            </div>
            <div className="agent-detail-row">
              <span className="detail-label">Protocols:</span>
              <span className="detail-value">{targetProtocols.join(', ')}</span>
            </div>
            {agentDescription && (
              <div className="agent-detail-row">
                <span className="detail-label">Description:</span>
                <span className="detail-value description-value">{agentDescription}</span>
              </div>
            )}
          </div>
          <p className="agent-note">
            Your agent is now deployed on the ORA network and will begin analyzing the specified protocols.
          </p>
          <div className="agent-actions">
            <button className="action-button view-button">View Agent Dashboard</button>
            <button className="reset-button" onClick={handleReset}>
              Create Another Agent
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AgentCreationInterface; 