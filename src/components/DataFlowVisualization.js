import React, { useState, useEffect } from 'react';
import './DataFlowVisualization.css';
// import oraLogo from '../public/ora-logo.png'; // You'll need to add this logo to your assets

function DataFlowVisualization() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  const steps = [
    {
      title: "1. Create OPAgent Onchain",
      description: "User initiates the creation of an AI agent on the blockchain. This agent will have its own wallet and can interact with DeFi protocols.",
      activeMessage: "right-message",
      activeActor: [0, 1]
    },
    {
      title: "2. Agent Deployment",
      description: "The agent is deployed to the blockchain and linked to a contract wallet that can hold and manage assets.",
      activeMessage: "right-message message-offset-1",
      activeActor: [1, 2]
    },
    {
      title: "3. Send Transaction Request",
      description: "The agent sends a transaction request to interact with a DeFi protocol (e.g., providing liquidity, staking, or swapping tokens).",
      activeMessage: "right-message message-offset-2",
      activeActor: [1, 3]
    },
    {
      title: "4. Trigger Agent Action",
      description: "The OAO (Onchain Agent Orchestrator) triggers the agent to perform an action based on predefined conditions or user requests.",
      activeMessage: "left-message message-offset-3",
      activeActor: [3, 1]
    },
    {
      title: "5. Trigger Wallet Action",
      description: "The agent instructs its contract wallet to execute a transaction on a DeFi protocol.",
      activeMessage: "right-message message-offset-4",
      activeActor: [1, 2]
    },
    {
      title: "6. Status Update",
      description: "The contract wallet sends a status update to the agent after the transaction is completed.",
      activeMessage: "left-message message-offset-5",
      activeActor: [2, 1]
    },
    {
      title: "7. Notify User",
      description: "The agent notifies the user about the completed transaction and any relevant information (e.g., yield earned, new positions, etc.).",
      activeMessage: "left-message message-offset-6",
      activeActor: [1, 0]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev < steps.length - 1) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="data-flow-container">
      <div className="flow-header">
        <h3>ORA Framework Integration</h3>
        {/* <img src={oraLogo} alt="ORA Logo" className="ora-logo" /> */}
        <div className="step-indicator">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>
      
      <div className="current-step-info">
        <h4>{steps[currentStep].title}</h4>
        <p>{steps[currentStep].description}</p>
      </div>
      
      <div className="sequence-diagram">
        <div className="sequence-actors">
          {['USER', 'AGENT', 'OPAGENT CONTRACT WALLET', 'OAO'].map((actor, index) => (
            <div 
              key={index} 
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
              className={`message ${messageClass} ${steps[currentStep].activeMessage === messageClass ? 'active-message' : ''}`}
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
          disabled={currentStep === 0}
        >
          Reset
        </button>
        <button 
          className="control-button"
          onClick={handlePrev}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button 
          className="control-button play-button"
          onClick={handlePlayPause}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button 
          className="control-button"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
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