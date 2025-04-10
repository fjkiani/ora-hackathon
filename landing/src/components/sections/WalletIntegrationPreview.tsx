import React from 'react';
import { motion } from 'framer-motion';

const WalletIntegrationPreview = () => {
  const supportedWallets = [
    { 
      id: 'metamask', 
      name: 'MetaMask', 
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.5417 3.5L22.2917 13.625L24.6667 7.33333L33.5417 3.5Z" fill="#E17726" stroke="#E17726" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.45825 3.5L17.6249 13.7083L15.3333 7.33333L6.45825 3.5Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M29.1251 27.0417L25.8334 32.375L32.7084 34.4583L34.6667 27.1667L29.1251 27.0417Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.33325 27.1667L7.29159 34.4583L14.1666 32.375L10.8749 27.0417L5.33325 27.1667Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.7916 17.6667L11.75 20.875L18.5416 21.25L18.2916 13.875L13.7916 17.6667Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26.2084 17.6667L21.625 13.7917L21.4584 21.25L28.25 20.875L26.2084 17.6667Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.1666 32.375L18.0833 30.0833L14.7916 27.2083L14.1666 32.375Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.9166 30.0833L25.8333 32.375L25.2083 27.2083L21.9166 30.0833Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: 'walletconnect', 
      name: 'WalletConnect', 
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.17264 13.6677C15.1806 6.85023 26.5211 6.85023 33.5291 13.6677L34.2489 14.3694C34.6428 14.7541 34.6428 15.3784 34.2489 15.763L31.7783 18.1742C31.5814 18.3665 31.2634 18.3665 31.0665 18.1742L30.0926 17.2255C25.4482 12.6969 16.2535 12.6969 11.6091 17.2255L10.5685 18.2407C10.3716 18.433 10.0535 18.433 9.85665 18.2407L7.38606 15.8294C6.99219 15.4448 6.99219 14.8205 7.38606 14.4359L8.17264 13.6677ZM37.7168 17.7457L39.89 19.8599C40.2839 20.2445 40.2839 20.8688 39.89 21.2534L28.894 31.9606C28.1062 32.7293 26.8382 32.7293 26.0504 31.9606L18.6582 24.7619C18.5597 24.6658 18.4004 24.6658 18.3019 24.7619L10.9097 31.9606C10.1219 32.7293 8.8539 32.7293 8.0661 31.9606L-2.22045e-05 24.1558C-0.393892 23.7711 -0.393892 23.1468 -2.22045e-05 22.7622L2.17322 20.648C2.96102 19.8793 4.22902 19.8793 5.01682 20.648L12.409 27.8467C12.5075 27.9428 12.6668 27.9428 12.7653 27.8467L20.1575 20.648C20.9453 19.8793 22.2133 19.8793 23.0011 20.648L30.3933 27.8467C30.4918 27.9428 30.6511 27.9428 30.7496 27.8467L37.7168 21.0574C37.9137 20.8652 38.2318 20.8652 38.4287 21.0574L37.7168 17.7457Z" fill="#3B99FC"/>
        </svg>
      )
    },
    { 
      id: 'coinbase', 
      name: 'Coinbase', 
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3.33334C10.7954 3.33334 3.33337 10.7953 3.33337 20C3.33337 29.2046 10.7954 36.6667 20 36.6667C29.2047 36.6667 36.6667 29.2046 36.6667 20C36.6667 10.7953 29.2047 3.33334 20 3.33334Z" fill="#0052FF"/>
          <path d="M20.0001 28.125C15.5149 28.125 11.8751 24.4852 11.8751 20C11.8751 15.5147 15.5149 11.875 20.0001 11.875C24.0521 11.875 27.418 14.8438 28.0209 18.75H20.0001V21.25H28.0209C27.418 25.1562 24.0521 28.125 20.0001 28.125Z" fill="white"/>
        </svg>
      )
    },
    { 
      id: 'trustwallet', 
      name: 'Trust Wallet', 
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0001 3.33334L11.4376 7.85417V18.2292C11.4376 23.7292 15.0834 28.7708 20.0001 30C24.9167 28.7708 28.5626 23.7292 28.5626 18.2292V7.85417L20.0001 3.33334Z" fill="#3375BB"/>
          <path d="M28.5626 7.85417L20.0001 3.33334V30C24.9167 28.7708 28.5626 23.7292 28.5626 18.2292V7.85417Z" fill="#3375BB"/>
          <path d="M11.4376 7.85417L20.0001 3.33334V30C15.0834 28.7708 11.4376 23.7292 11.4376 18.2292V7.85417Z" fill="#66AFE9"/>
        </svg>
      )
    }
  ];

  const connectedData = {
    address: '0x7a16ff...4a9b',
    balance: '2.45 ETH',
    network: 'Ethereum Mainnet',
    recentTransactions: [
      {
        id: 1,
        type: 'Approve',
        protocol: 'Uniswap V3',
        asset: 'USDC',
        time: '2 hours ago',
        status: 'confirmed',
        hash: '0x7c3b...a16f'
      },
      {
        id: 2,
        type: 'Swap',
        protocol: 'Uniswap V3',
        asset: 'ETH → USDC',
        time: '2 hours ago',
        status: 'confirmed',
        hash: '0x5e21...b93c'
      },
      {
        id: 3,
        type: 'Deposit',
        protocol: 'Aave V3',
        asset: 'USDC',
        time: '3 hours ago',
        status: 'confirmed',
        hash: '0x1d7f...c45e'
      }
    ],
    tokens: [
      { symbol: 'ETH', balance: '2.45', value: '$5,467.80', change: 1.2 },
      { symbol: 'USDC', balance: '1,250.00', value: '$1,250.00', change: 0 },
      { symbol: 'AAVE', balance: '12.5', value: '$1,125.00', change: -2.3 }
    ]
  };

  return (
    <div className="py-20 px-4 relative overflow-hidden">
      <div className="absolute -right-40 top-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 bottom-40 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Seamless <span className="text-gradient-blue">Wallet Integration</span>
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Securely connect your preferred wallet with one click to manage assets, view transactions, and interact with the DefiKSA platform.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Not Connected Demo */}
          <div className="glass-dark p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Connect Your Wallet</h3>
            <p className="text-gray-300 mb-8">
              Choose from multiple wallet providers for secure access to your digital assets. Our platform supports all major wallet types.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {supportedWallets.map((wallet, index) => (
                <motion.button
                  key={wallet.id}
                  className="flex flex-col items-center justify-center p-4 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-3">{wallet.icon}</div>
                  <span>{wallet.name}</span>
                </motion.button>
              ))}
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-800/50">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium mb-2">Security First</h4>
                  <p className="text-xs text-gray-400">
                    We never store your private keys. All wallet connections are secure and use industry-standard encryption protocols. Your assets remain in your control at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Connected Demo */}
          <div className="glass-dark p-8 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Connected Wallet</h3>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-green-500">Connected</span>
              </div>
            </div>
            
            <div className="p-4 bg-gray-800/80 rounded-lg border border-gray-700 mb-6">
              <div className="flex justify-between mb-2">
                <div className="text-sm text-gray-400">Address</div>
                <div className="flex items-center">
                  <span className="text-sm font-medium">{connectedData.address}</span>
                  <button className="ml-2 text-blue-400 hover:text-blue-300">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="text-sm text-gray-400">Balance</div>
                <div className="text-sm font-medium">{connectedData.balance}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-gray-400">Network</div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <div className="text-sm font-medium">{connectedData.network}</div>
                </div>
              </div>
            </div>
            
            <h4 className="font-medium text-sm mb-3">Token Balances</h4>
            <div className="space-y-2 mb-6">
              {connectedData.tokens.map((token, index) => (
                <motion.div 
                  key={index}
                  className="p-3 bg-gray-800/60 rounded-lg flex justify-between items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                      {token.symbol.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{token.symbol}</div>
                      <div className="text-sm text-gray-400">{token.balance}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div>{token.value}</div>
                    <div className={`text-sm ${token.change > 0 ? 'text-green-500' : token.change < 0 ? 'text-red-500' : 'text-gray-400'}`}>
                      {token.change > 0 ? '+' : ''}{token.change}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h4 className="font-medium text-sm mb-3">Recent Transactions</h4>
            <div className="space-y-2">
              <motion.div 
                  key={1}
                  className="p-2 hover:bg-gray-800/80 rounded-lg transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (0 * 0.1) }}
                >
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <div className="font-medium">Approve</div>
                      <div className="ml-2 px-2 py-0.5 bg-gray-700 rounded text-xs">Compliant Pool</div>
                    </div>
                    <div className="text-xs text-gray-400">15m ago</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-400">SAR Stablecoin</div>
                    <a className="text-xs text-blue-400 hover:text-blue-300">
                      0xab12...ef34 ↗
                    </a>
                  </div>
              </motion.div>
              <motion.div 
                  key={2}
                  className="p-2 hover:bg-gray-800/80 rounded-lg transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (1 * 0.1) }}
                >
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <div className="font-medium">Swap</div>
                      <div className="ml-2 px-2 py-0.5 bg-gray-700 rounded text-xs">Compliant DEX</div>
                    </div>
                    <div className="text-xs text-gray-400">1h ago</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-400">Asset A → Asset B</div>
                    <a className="text-xs text-blue-400 hover:text-blue-300">
                      0xcd34...gh56 ↗
                    </a>
                  </div>
              </motion.div>
              <motion.div 
                  key={3}
                  className="p-2 hover:bg-gray-800/80 rounded-lg transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (2 * 0.1) }}
                >
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <div className="font-medium">Deposit</div>
                      <div className="ml-2 px-2 py-0.5 bg-gray-700 rounded text-xs">Mudarabah Pool</div>
                    </div>
                    <div className="text-xs text-gray-400">3h ago</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-400">USDC</div>
                    <a className="text-xs text-blue-400 hover:text-blue-300">
                      0xef56...ij78 ↗
                    </a>
                  </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://app.cryptohedgefund.com" 
            className="btn btn-primary shadow-xl hover:shadow-blue-600/20 inline-flex items-center"
          >
            Connect Your Wallet
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WalletIntegrationPreview; 