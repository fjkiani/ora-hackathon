import React, { useState, useEffect, useRef } from 'react';
import './DataFlowVisualization.css';
// import oraLogo from '../public/ora-logo.png'; // You'll need to add this logo to your assets

function DataFlowVisualization() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const [simulatedTransactions, setSimulatedTransactions] = useState([]);
  const [agentStatus, setAgentStatus] = useState('idle');
  const [userInteraction, setUserInteraction] = useState(false);
  
  // Refs for animation
  const messageRefs = useRef([]);
  const actorRefs = useRef([]);
  
  const steps = [
    {
      title: "1. Create OPAgent Onchain",
      description: "User initiates the creation of an AI agent on the blockchain. This agent will have its own wallet and can interact with DeFi protocols.",
      activeMessage: "right-message",
      activeActor: [0, 1],
      animation: "create-agent",
      simulatedTx: {
        hash: "0x8a7d953f45b7938357bbd95d4c5d9ff66b7915c11f1c48da77a3b67f27dfa223",
        type: "Agent Creation",
        status: "Confirmed",
        gas: "0.0042 ETH"
      }
    },
    {
      title: "2. Agent Deployment",
      description: "The agent is deployed to the blockchain and linked to a contract wallet that can hold and manage assets.",
      activeMessage: "right-message message-offset-1",
      activeActor: [1, 2],
      animation: "deploy-agent",
      simulatedTx: {
        hash: "0x3e9b7a4fc45b2c1e9d5f1c780d96fe1673c8454c9e1c8df9c724c4c631a7cd82",
        type: "Contract Deployment",
        status: "Confirmed",
        gas: "0.0156 ETH"
      }
    },
    {
      title: "3. Send Transaction Request",
      description: "The agent sends a transaction request to interact with a DeFi protocol (e.g., providing liquidity, staking, or swapping tokens).",
      activeMessage: "right-message message-offset-2",
      activeActor: [1, 3],
      animation: "send-request",
      simulatedTx: {
        hash: "0x5f2b89e4c9d7e8a3a4f6b7d1c2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1",
        type: "Transaction Request",
        status: "Pending",
        gas: "0.0018 ETH"
      }
    },
    {
      title: "4. Trigger Agent Action",
      description: "The OAO (Onchain Agent Orchestrator) triggers the agent to perform an action based on predefined conditions or user requests.",
      activeMessage: "left-message message-offset-3",
      activeActor: [3, 1],
      animation: "trigger-action",
      simulatedTx: {
        hash: "0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8",
        type: "Agent Trigger",
        status: "Confirmed",
        gas: "0.0023 ETH"
      }
    },
    {
      title: "5. Trigger Wallet Action",
      description: "The agent instructs its contract wallet to execute a transaction on a DeFi protocol.",
      activeMessage: "right-message message-offset-4",
      activeActor: [1, 2],
      animation: "wallet-action",
      simulatedTx: {
        hash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2",
        type: "Swap ETH to USDC",
        status: "Confirmed",
        gas: "0.0037 ETH",
        details: "Swapped 0.5 ETH for 982.45 USDC"
      }
    },
    {
      title: "6. Status Update",
      description: "The contract wallet sends a status update to the agent after the transaction is completed.",
      activeMessage: "left-message message-offset-5",
      activeActor: [2, 1],
      animation: "status-update",
      simulatedTx: {
        hash: "0xb1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c",
        type: "Status Update",
        status: "Confirmed",
        gas: "0.0008 ETH"
      }
    },
    {
      title: "7. Notify User",
      description: "The agent notifies the user about the completed transaction and any relevant information (e.g., yield earned, new positions, etc.).",
      activeMessage: "left-message message-offset-6",
      activeActor: [1, 0],
      animation: "notify-user",
      simulatedTx: {
        hash: "0xd1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e",
        type: "Notification",
        status: "Confirmed",
        gas: "0.0005 ETH",
        details: "Transaction successful. New balance: 982.45 USDC"
      }
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isPlaying && !animationInProgress) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev < steps.length - 1) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 5000); // Longer interval to allow animations to complete
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length, animationInProgress]);

  // Effect to handle step changes and animations
  useEffect(() => {
    if (currentStep >= 0 && currentStep < steps.length) {
      // Update agent status based on step
      const statusMap = [
        'initializing', 'deploying', 'requesting', 
        'processing', 'executing', 'updating', 'completed'
      ];
      setAgentStatus(statusMap[currentStep]);
      
      // Add the simulated transaction for this step
      const currentTx = steps[currentStep].simulatedTx;
      if (currentTx) {
        setAnimationInProgress(true);
        
        // Simulate transaction processing
        setTimeout(() => {
          setSimulatedTransactions(prev => [currentTx, ...prev].slice(0, 5));
          setAnimationInProgress(false);
        }, 1500);
      }
    }
  }, [currentStep, steps]);

  const handleNext = () => {
    if (currentStep < steps.length - 1 && !animationInProgress) {
      setCurrentStep(currentStep + 1);
      setUserInteraction(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0 && !animationInProgress) {
      setCurrentStep(currentStep - 1);
      setUserInteraction(true);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setUserInteraction(true);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    setSimulatedTransactions([]);
    setAgentStatus('idle');
    setUserInteraction(true);
  };
  
  const getAgentStatusClass = () => {
    switch(agentStatus) {
      case 'idle': return 'status-idle';
      case 'initializing': return 'status-initializing';
      case 'deploying': return 'status-deploying';
      case 'requesting': return 'status-requesting';
      case 'processing': return 'status-processing';
      case 'executing': return 'status-executing';
      case 'updating': return 'status-updating';
      case 'completed': return 'status-completed';
      default: return '';
    }
  };
  
  const getAgentStatusText = () => {
    switch(agentStatus) {
      case 'idle': return 'Agent Idle';
      case 'initializing': return 'Initializing Agent';
      case 'deploying': return 'Deploying Agent';
      case 'requesting': return 'Sending Request';
      case 'processing': return 'Processing Request';
      case 'executing': return 'Executing Transaction';
      case 'updating': return 'Updating Status';
      case 'completed': return 'Operation Completed';
      default: return 'Unknown Status';
    }
  };

  return (
    <div className="data-flow-container">
      <div className="flow-header">
        <h3>ORA Framework Integration</h3>
        {/* <img src={oraLogo} alt="ORA Logo" className="ora-logo" /> */}
        <div className="agent-status-indicator">
          <div className={`status-dot ${getAgentStatusClass()}`}></div>
          <span>{getAgentStatusText()}</span>
        </div>
        <div className="step-indicator">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>
      
      <div className="visualization-grid">
        <div className="visualization-main">
          <div className="current-step-info">
            <h4>{steps[currentStep].title}</h4>
            <p>{steps[currentStep].description}</p>
          </div>
          
          <div className="sequence-diagram">
            <div className="sequence-actors">
              {['USER', 'AGENT', 'OPAGENT CONTRACT WALLET', 'OAO'].map((actor, index) => (
                <div 
                  key={index} 
                  ref={el => actorRefs.current[index] = el}
                  className={`actor ${steps[currentStep].activeActor.includes(index) ? 'active-actor' : ''}`}
                >
                  <div className="actor-icon">
                    {index === 0 ? '👤' : index === 1 ? '🤖' : index === 2 ? '💼' : '🔄'}
                  </div>
                  <div className="actor-label">{actor}</div>
                </div>
              ))}
            </div>
            
            <div className="sequence-lifelines">
              {[0, 1, 2, 3].map(index => (
                <div 
                  key={index} 
                  className={`lifeline ${steps[currentStep].activeActor.includes(index) ? 'active-lifeline' : ''}`}
                ></div>
              ))}
            </div>
            
            <div className="sequence-messages">
              {['right-message', 'right-message message-offset-1', 'right-message message-offset-2', 
                'left-message message-offset-3', 'right-message message-offset-4', 
                'left-message message-offset-5', 'left-message message-offset-6'].map((messageClass, index) => (
                <div 
                  key={index}
                  ref={el => messageRefs.current[index] = el}
                  className={`message ${messageClass} ${steps[currentStep].activeMessage === messageClass ? 'active-message' : ''} ${steps[currentStep].animation}`}
                >
                  <div className="message-arrow">
                    {messageClass.includes('right-message') ? '→' : '←'}
                  </div>
                  <div className="message-label">
                    {index === 0 ? 'CREATE OPAGENT ONCHAIN' : 
                     index === 1 ? 'SEND AN ONCHAIN TRANSACTION' :
                     index === 2 ? 'SEND MESSAGE / TRANSACTION REQUEST' :
                     index === 3 ? 'TRIGGER AGENT ACTION VIA CALLBACK FUNCTION' :
                     index === 4 ? 'TRIGGER WALLET ACTION' :
                     index === 5 ? 'STATUS UPDATE' : 'NOTIFY'}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="sequence-controls">
            <button 
              className="control-button"
              onClick={handleReset}
              disabled={currentStep === 0 || animationInProgress}
            >
              Reset
            </button>
            <button 
              className="control-button"
              onClick={handlePrev}
              disabled={currentStep === 0 || animationInProgress}
            >
              Previous
            </button>
            <button 
              className={`control-button play-button ${isPlaying ? 'playing' : ''}`}
              onClick={handlePlayPause}
              disabled={animationInProgress}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button 
              className="control-button next-button"
              onClick={handleNext}
              disabled={currentStep === steps.length - 1 || animationInProgress}
            >
              Next
            </button>
          </div>
        </div>
        
        <div className="visualization-sidebar">
          <div className="agent-info-panel">
            <h4>Agent Information</h4>
            <div className="agent-info-content">
              <div className="agent-info-row">
                <span className="info-label">Name:</span>
                <span className="info-value">ETH/USDC Risk Monitor</span>
              </div>
              <div className="agent-info-row">
                <span className="info-label">Type:</span>
                <span className="info-value">Risk Assessment</span>
              </div>
              <div className="agent-info-row">
                <span className="info-label">Status:</span>
                <span className={`info-value ${getAgentStatusClass()}`}>{getAgentStatusText()}</span>
              </div>
              <div className="agent-info-row">
                <span className="info-label">Wallet:</span>
                <span className="info-value">0x7a8...f9e2</span>
              </div>
              <div className="agent-info-row">
                <span className="info-label">Created:</span>
                <span className="info-value">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          
          <div className="transaction-panel">
            <h4>Simulated Transactions</h4>
            {simulatedTransactions.length === 0 ? (
              <div className="no-transactions">No transactions yet</div>
            ) : (
              <div className="transaction-list">
                {simulatedTransactions.map((tx, index) => (
                  <div key={index} className={`transaction-item ${index === 0 ? 'latest' : ''}`}>
                    <div className="tx-header">
                      <span className="tx-type">{tx.type}</span>
                      <span className={`tx-status ${tx.status.toLowerCase()}`}>{tx.status}</span>
                    </div>
                    <div className="tx-hash">{tx.hash.substring(0, 10)}...{tx.hash.substring(tx.hash.length - 4)}</div>
                    <div className="tx-details">
                      <span className="tx-gas">Gas: {tx.gas}</span>
                      {tx.details && <div className="tx-extra">{tx.details}</div>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="ora-features">
        <div className="feature-box">
          <h4>LAUNCH AGENT CODEBASE</h4>
        </div>
        <div className="feature-box">
          <h4>CONTEXT AND MEMORY STORED IN DECENTRALIZED STORAGE</h4>
        </div>
        <div className="feature-box">
          <h4>VERIFIABLE INFERENCE POWERED BY OPML AND ORA NODE NETWORK</h4>
        </div>
      </div>
      
      <button 
        className="details-toggle"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Technical Details' : 'Show Technical Details'}
      </button>
      
      {showDetails && (
        <div className="technical-details">
          <h4>How ORA Works with DeFi Protocols</h4>
          <ol>
            <li>
              <strong>User Creates an Agent</strong> - Users can create specialized AI agents to monitor, analyze, and interact with DeFi protocols.
            </li>
            <li>
              <strong>Agent Deployment</strong> - The agent is deployed on-chain with its own contract wallet, giving it the ability to interact with DeFi protocols.
            </li>
            <li>
              <strong>Transaction Monitoring</strong> - Agents can monitor transactions and protocol states, providing real-time insights.
            </li>
            <li>
              <strong>Risk Assessment</strong> - Using verifiable inference powered by OPML, agents can assess protocol risks and provide recommendations.
            </li>
            <li>
              <strong>Automated Actions</strong> - With user permission, agents can execute transactions based on predefined conditions.
            </li>
            <li>
              <strong>Notifications</strong> - Users receive updates about agent activities and important protocol changes.
            </li>
          </ol>
        </div>
      )}
    </div>
  );
}

export default DataFlowVisualization; 