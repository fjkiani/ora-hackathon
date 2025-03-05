import React, { useState } from 'react';

function StrategyBuilder() {
  const [strategy, setStrategy] = useState({
    initialInvestment: 10000,
    riskTolerance: 'medium',
    timeHorizon: '6months',
    steps: []
  });
  
  const [evaluation, setEvaluation] = useState(null);
  
  const addStrategyStep = (step) => {
    setStrategy(prev => ({
      ...prev,
      steps: [...prev.steps, step]
    }));
  };
  
  const evaluateStrategy = async () => {
    // Use Claude API to evaluate the strategy
    // This would analyze risks, expected returns, etc.
    
    // Example evaluation
    const result = {
      expectedAPY: 12.5,
      riskAssessment: "Medium-High",
      strengths: [
        "Diversified across multiple protocols",
        "Good balance of stable and variable yields"
      ],
      weaknesses: [
        "High exposure to ETH price volatility",
        "Significant smart contract risk from newer protocols"
      ],
      alternatives: [
        "Consider adding stablecoin LP positions for reduced volatility",
        "Explore options for hedging ETH exposure"
      ]
    };
    
    setEvaluation(result);
  };
  
  return (
    <div className="strategy-builder">
      <h3>DeFi Strategy Builder</h3>
      
      {/* Strategy configuration UI */}
      
      <div className="strategy-steps">
        {strategy.steps.map((step, index) => (
          <div key={index} className="strategy-step">
            {/* Display strategy step */}
          </div>
        ))}
        
        <button onClick={() => addStrategyStep({
          type: 'deposit',
          protocol: 'Aave',
          asset: 'ETH',
          amount: 5000
        })}>
          Add Step
        </button>
      </div>
      
      <button onClick={evaluateStrategy}>Evaluate Strategy</button>
      
      {evaluation && (
        <div className="strategy-evaluation">
          {/* Display strategy evaluation */}
        </div>
      )}
    </div>
  );
}

export default StrategyBuilder; 