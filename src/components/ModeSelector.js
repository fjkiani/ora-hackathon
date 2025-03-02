import React, { useState } from 'react';
import './ModeSelector.css';

function ModeSelector() {
  const [selectedMode, setSelectedMode] = useState('singleton');

  return (
    <div className="mode-selector-container">
      <h3>AI Agent Mode</h3>
      <div className="mode-selector">
        <button 
          className={`mode-button ${selectedMode === 'singleton' ? 'active' : ''}`}
          onClick={() => setSelectedMode('singleton')}
        >
          Singleton
        </button>
        <button 
          className={`mode-button ${selectedMode === 'swarm' ? 'active' : ''}`}
          onClick={() => setSelectedMode('swarm')}
        >
          Swarm
        </button>
      </div>
      
      <div className="mode-description">
        {selectedMode === 'singleton' ? (
          <div>
            <h4>Singleton Mode</h4>
            <p>A single AI agent analyzes the protocol and provides risk assessment. This mode is efficient for simple analyses and uses less computational resources.</p>
            <ul>
              <li>Lower gas costs</li>
              <li>Faster response time</li>
              <li>Suitable for basic risk assessment</li>
            </ul>
          </div>
        ) : (
          <div>
            <h4>Swarm Mode</h4>
            <p>Multiple specialized AI agents collaborate to provide a comprehensive risk assessment. Each agent focuses on a specific aspect of the protocol.</p>
            <ul>
              <li>More thorough analysis</li>
              <li>Specialized insights from different perspectives</li>
              <li>Higher accuracy for complex protocols</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModeSelector; 