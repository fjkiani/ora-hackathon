import React from 'react';
import { motion } from 'framer-motion';

const ProtocolMonitoringPreview = () => {
  const protocolData = {
    name: 'Verified Mudarabah Pool',
    tvl: {
      value: 55200000,
      change: 1.8
    },
    volume24h: {
      value: 1230000,
      change: 3.1
    },
    profitShare24h: {
      value: 15800,
      change: 2.5
    },
    uniqueUsers: {
      value: 850,
      change: 0.5
    },
    metrics: [
      { name: 'Sharia Compliance Status', value: 'Verified', format: 'status' },
      { name: 'Profit Source Transparency', value: 'High', format: 'qualitative' },
      { name: 'Permissible Asset Ratio', value: '100%', format: 'percentage' },
      { name: 'Interest (Riba) Exposure', value: 'None Detected', format: 'status' }
    ],
    alerts: [
      { 
        id: 1,
        severity: 'medium', 
        message: 'Underlying asset [Asset Name] in pool flagged for potential compliance review due to business activity change.',
        time: '45m ago',
        resolved: false
      },
      { 
        id: 2,
        severity: 'low', 
        message: 'Increased demand for profit-sharing; pool nearing capacity.',
        time: '2h ago',
        resolved: false
      },
      { 
        id: 3,
        severity: 'high', 
        message: 'Temporary suspension of withdrawals from underlying [Asset XYZ] issuer - Resolved.',
        time: '5h ago',
        resolved: true
      }
    ]
  };

  const formatCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(2)}B`;
    } else if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(2)}K`;
    } else {
      return `$${value.toFixed(2)}`;
    }
  };

  const getChangeClass = (change: number) => {
    return change >= 0 ? 'text-green-500' : 'text-red-500';
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    ) : (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    );
  };

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-500 bg-red-500/20 border-red-600/30';
      case 'medium': return 'text-yellow-500 bg-yellow-500/20 border-yellow-600/30';
      case 'low': return 'text-blue-500 bg-blue-500/20 border-blue-600/30';
      default: return 'text-gray-500 bg-gray-500/20 border-gray-600/30';
    }
  };

  return (
    <div className="py-20 px-4 relative overflow-hidden">
      <div className="absolute -left-40 top-60 w-80 h-80 bg-green-600/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-20 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Monitor <span className="text-gradient-blue">Compliant Protocols</span> in Real-Time
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Stay informed with compliance status, key metrics, and performance data for vetted protocols within the DefiKSA ecosystem.
        </p>

        <div className="glass-dark p-6 rounded-xl mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="bg-blue-600 rounded-full p-2 mr-3">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{protocolData.name}</h3>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                24H
              </button>
              <button className="bg-transparent text-gray-400 hover:text-white px-3 py-1 rounded-full text-sm font-medium transition-colors">
                7D
              </button>
              <button className="bg-transparent text-gray-400 hover:text-white px-3 py-1 rounded-full text-sm font-medium transition-colors">
                30D
              </button>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <motion.div 
              className="bg-gray-800/60 p-4 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-gray-400 text-sm mb-1">Total Value Locked</div>
              <div className="text-2xl font-bold mb-1">{formatCurrency(protocolData.tvl.value)}</div>
              <div className={`flex items-center text-sm ${getChangeClass(protocolData.tvl.change)}`}>
                {getChangeIcon(protocolData.tvl.change)}
                <span className="ml-1">{Math.abs(protocolData.tvl.change)}%</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-800/60 p-4 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-gray-400 text-sm mb-1">24h Volume</div>
              <div className="text-2xl font-bold mb-1">{formatCurrency(protocolData.volume24h.value)}</div>
              <div className={`flex items-center text-sm ${getChangeClass(protocolData.volume24h.change)}`}>
                {getChangeIcon(protocolData.volume24h.change)}
                <span className="ml-1">{Math.abs(protocolData.volume24h.change)}%</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-800/60 p-4 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-gray-400 text-sm mb-1">24h Profit Share</div>
              <div className="text-2xl font-bold mb-1">{formatCurrency(protocolData.profitShare24h.value)}</div>
              <div className={`flex items-center text-sm ${getChangeClass(protocolData.profitShare24h.change)}`}>
                {getChangeIcon(protocolData.profitShare24h.change)}
                <span className="ml-1">{Math.abs(protocolData.profitShare24h.change)}%</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-800/60 p-4 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-gray-400 text-sm mb-1">Unique Users</div>
              <div className="text-2xl font-bold mb-1">{protocolData.uniqueUsers.value.toLocaleString()}</div>
              <div className={`flex items-center text-sm ${getChangeClass(protocolData.uniqueUsers.change)}`}>
                {getChangeIcon(protocolData.uniqueUsers.change)}
                <span className="ml-1">{Math.abs(protocolData.uniqueUsers.change)}%</span>
              </div>
            </motion.div>
          </div>

          {/* Metrics & Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Metrics */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-lg mb-4">Performance Metrics</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {protocolData.metrics.map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-800/60 p-4 rounded-lg border border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="text-gray-400 text-sm mb-1">{metric.name}</div>
                    <div className="text-xl font-bold">{metric.value}</div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700 mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold">Historical Performance</h4>
                  <div className="text-sm text-gray-400">Updated 12 min ago</div>
                </div>
                <div className="h-40 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="h-24 w-24 text-gray-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-gray-400 mt-2">Interactive charts available in the full dashboard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-lg mb-4">Recent Alerts</h4>
              <div className="space-y-3">
                {protocolData.alerts.map((alert, index) => (
                  <motion.div 
                    key={alert.id}
                    className={`p-3 rounded-lg border ${getSeverityClass(alert.severity)}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        {alert.severity === 'high' ? (
                          <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        ) : alert.severity === 'medium' ? (
                          <svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <p className={`text-sm font-medium`}>{alert.message}</p>
                        <div className="flex justify-between mt-1">
                          <div className="text-xs text-gray-400">{alert.time}</div>
                          {alert.resolved && (
                            <div className="text-xs text-green-500 font-medium">Resolved</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <h4 className="font-medium text-sm">Customizable Alerts</h4>
                </div>
                <p className="text-xs text-gray-400">
                  Set up custom alerts based on your risk tolerance. Receive instant notifications via email, SMS, or in-app messages when critical thresholds are crossed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://app.cryptohedgefund.com" 
            className="btn btn-primary shadow-xl hover:shadow-blue-600/20 inline-flex items-center"
          >
            Explore Full Dashboard
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProtocolMonitoringPreview; 