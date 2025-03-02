import React, { useState } from 'react';

function RiskAssessment({ poolName }) {
  const [showRiskDetails, setShowRiskDetails] = useState(false);
  
  // Mock risk assessment data
  const riskData = {
    overallRisk: 'medium-risk',
    overallScore: '6.5/10',
    categories: [
      {
        name: 'Smart Contract Risk',
        score: 'medium-risk',
        scoreValue: '5.8/10',
        description: 'The smart contracts have been audited by a reputable firm, but some minor issues were identified. The contracts are not fully open-source, limiting independent verification.'
      },
      {
        name: 'Economic Risk',
        score: 'low-risk',
        scoreValue: '3.2/10',
        description: 'The protocol has a sustainable economic model with reasonable incentives. The token distribution is relatively fair, with no excessive concentration among whales.'
      },
      {
        name: 'Centralization Risk',
        score: 'high-risk',
        scoreValue: '8.1/10',
        description: 'The protocol has admin keys that can modify critical parameters without timelock. A small team controls these keys, creating a centralization risk.'
      }
    ],
    recommendations: [
      'Consider limiting your exposure to this pool to no more than 5-10% of your portfolio',
      'Monitor the protocol\'s governance proposals regularly',
      'Set up alerts for any unusual activity in the pool'
    ]
  };

  return (
    <div className="risk-assessment">
      {!showRiskDetails ? (
        <button 
          className="action-button risk-button"
          onClick={() => setShowRiskDetails(true)}
        >
          Assess Risk for {poolName}
        </button>
      ) : (
        <div className="card">
          <h3>Risk Assessment for {poolName}</h3>
          
          <div className={`risk-level ${riskData.overallRisk}`}>
            <span>Overall Risk Level:</span>
            <span>{riskData.overallScore} - {riskData.overallRisk.replace('-', ' ').toUpperCase()}</span>
          </div>
          
          <div className="risk-categories">
            {riskData.categories.map((category, index) => (
              <div key={index} className="risk-category">
                <div className="category-header">
                  <span>{category.name}</span>
                  <span className={`category-score ${category.score}`}>
                    {category.scoreValue}
                  </span>
                </div>
                <p className="category-description">{category.description}</p>
              </div>
            ))}
          </div>
          
          <div className="recommendations">
            <h4>Recommendations:</h4>
            <ul>
              {riskData.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
          
          <div className="powered-by">
            Powered by AI Risk Assessment
          </div>
          
          <button 
            className="action-button explain-button"
            onClick={() => setShowRiskDetails(false)}
            style={{ marginTop: '1rem' }}
          >
            Close Assessment
          </button>
        </div>
      )}
    </div>
  );
}

export default RiskAssessment; 