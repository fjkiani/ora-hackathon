import React, { useState } from 'react';
import './AgentCreationInterface.css';

function AgentCreationInterface() {
  const [agentName, setAgentName] = useState('');
  const [agentType, setAgentType] = useState('risk');
  const [agentDescription, setAgentDescription] = useState('');
  const [targetProtocols, setTargetProtocols] = useState([]);
  const [protocolInput, setProtocolInput] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  const handleAddProtocol = () => {
    if (protocolInput && !targetProtocols.includes(protocolInput)) {
      setTargetProtocols([...targetProtocols, protocolInput]);
      setProtocolInput('');
    }
  };

  const handleRemoveProtocol = (protocol) => {
    setTargetProtocols(targetProtocols.filter(p => p !== protocol));
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
              placeholder="e.g., PancakeSwap Risk Analyzer"
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
            <label>Description (Optional)</label>
            <textarea 
              value={agentDescription} 
              onChange={(e) => setAgentDescription(e.target.value)}
              placeholder="Describe what your agent will do..."
            />
          </div>
          
          <div className="form-group">
            <label>Target Protocols</label>
            <div className="protocol-input-group">
              <input 
                type="text" 
                value={protocolInput} 
                onChange={(e) => setProtocolInput(e.target.value)}
                placeholder="e.g., PancakeSwap"
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
                <span className="detail-value">{agentDescription}</span>
              </div>
            )}
          </div>
          <p className="agent-note">
            Your agent is now deployed on the ORA network and will begin analyzing the specified protocols.
          </p>
          <button className="reset-button" onClick={handleReset}>
            Create Another Agent
          </button>
        </div>
      )}
    </div>
  );
}

export default AgentCreationInterface; 