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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          DeFi Demo
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-item">Dashboard</Link>
          <Link to="/swap" className="nav-item">Swap</Link>
        </div>
        
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
    </nav>
  );
}

export default Navbar; 