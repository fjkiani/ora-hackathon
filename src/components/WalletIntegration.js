import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function WalletIntegration() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [connected, setConnected] = useState(false);
  
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        const accts = await web3Instance.eth.getAccounts();
        
        setWeb3(web3Instance);
        setAccounts(accts);
        setConnected(true);
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', (newAccounts) => {
          setAccounts(newAccounts);
        });
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask or another Web3 wallet");
    }
  };
  
  return (
    <div className="wallet-integration">
      {!connected ? (
        <button onClick={connectWallet} className="connect-wallet-button">
          Connect Wallet
        </button>
      ) : (
        <div className="wallet-info">
          <p>Connected: {accounts[0]}</p>
          {/* Display wallet balance, network, etc. */}
        </div>
      )}
    </div>
  );
}

export default WalletIntegration; 