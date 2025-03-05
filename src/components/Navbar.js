import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = () => {
    // Mock wallet connection
    setWalletConnected(true);
    setWalletAddress('0x1a2...3b4c');
  };

  const switchToWeb2 = () => {
    window.location.href = 'https://ai-hedge-fund1.vercel.app/';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          DeFi Navigator
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-item">Dashboard</Link>
          <Link to="/swap" className="nav-item">Swap</Link>
          <Link to="/defi-assistant" className="nav-item">AI Assistant</Link>
          <Link to="/api-test" className="nav-item">API Test</Link>
        </div>
        
        <div className="navbar-actions">
          <button 
            className="web2-switch-button"
            onClick={switchToWeb2}
          >
            Switch to Web2
          </button>
          
          <button 
            className={`wallet-connect-button ${walletConnected ? 'connected' : ''}`}
            onClick={connectWallet}
          >
            {walletConnected ? (
              <>Connected <span className="address">{walletAddress}</span></>
            ) : (
              'Connect Wallet'
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 