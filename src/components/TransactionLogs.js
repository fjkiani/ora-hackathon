import React, { useState } from 'react';
import './TransactionLogs.css';

function TransactionLogs() {
  const [expandedLog, setExpandedLog] = useState(null);
  
  const mockTransactions = [
    {
      id: 'tx1',
      hash: '0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b',
      type: 'Agent Activation',
      timestamp: '2023-03-02 14:32:45',
      gas: '0.0042 ETH',
      status: 'Confirmed',
      details: 'Activated Risk Assessment Agent for PancakeSwap Pool'
    },
    {
      id: 'tx2',
      hash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
      type: 'Data Collection',
      timestamp: '2023-03-02 14:33:12',
      gas: '0.0038 ETH',
      status: 'Confirmed',
      details: 'Collected on-chain data about PancakeSwap Pool parameters and history'
    },
    {
      id: 'tx3',
      hash: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d',
      type: 'Analysis Execution',
      timestamp: '2023-03-02 14:34:28',
      gas: '0.0067 ETH',
      status: 'Confirmed',
      details: 'Executed risk analysis algorithms on collected data'
    },
    {
      id: 'tx4',
      hash: '0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f',
      type: 'Result Storage',
      timestamp: '2023-03-02 14:35:47',
      gas: '0.0029 ETH',
      status: 'Confirmed',
      details: 'Stored analysis results on-chain for future reference'
    }
  ];

  return (
    <div className="transaction-logs-container">
      <h3>Mock On-Chain Transactions</h3>
      <p className="logs-description">
        In a fully implemented system, these transactions would occur on-chain through the ORA framework:
      </p>
      
      <div className="transaction-list">
        {mockTransactions.map((tx, index) => (
          <div 
            key={tx.id} 
            className={`transaction-item ${expandedLog === tx.id ? 'expanded' : ''}`}
            onClick={() => setExpandedLog(expandedLog === tx.id ? null : tx.id)}
          >
            <div className="transaction-header">
              <div className="transaction-type">{tx.type}</div>
              <div className="transaction-time">{tx.timestamp}</div>
            </div>
            
            {expandedLog === tx.id && (
              <div className="transaction-details">
                <div className="detail-row">
                  <span className="detail-label">Transaction Hash:</span>
                  <span className="detail-value">{tx.hash}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Gas Used:</span>
                  <span className="detail-value">{tx.gas}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value status-confirmed">{tx.status}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Details:</span>
                  <span className="detail-value">{tx.details}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="logs-note">
        <p>Note: These are simulated transactions. In a production environment, these would be actual on-chain transactions executed through the ORA framework.</p>
      </div>
    </div>
  );
}

export default TransactionLogs; 