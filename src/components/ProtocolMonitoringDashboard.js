import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProtocolMonitoringDashboard.css';

function ProtocolMonitoringDashboard() {
  const [protocolData, setProtocolData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');

  useEffect(() => {
    fetchProtocolData();
    
    // Set up refresh interval (every 5 minutes)
    const intervalId = setInterval(fetchProtocolData, 300000);
    
    return () => clearInterval(intervalId);
  }, [selectedTimeframe]);

  const fetchProtocolData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a full implementation, this would call the Covalent API
      // For MVP, we'll simulate the API call with mock data
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Generate mock protocol data
      const mockData = generateMockProtocolData(selectedTimeframe);
      setProtocolData(mockData);
    } catch (error) {
      console.error('Error fetching protocol data:', error);
      setError('Failed to fetch protocol data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const generateMockProtocolData = (timeframe) => {
    // Base values
    const baseValues = {
      tvl: 1250000000,
      volume24h: 85000000,
      transactions: 12500,
      uniqueUsers: 3800,
      fees: 320000,
      liquidityUtilization: 68,
      priceImpact: 0.12,
      slippage: 0.08,
      failedTxRate: 2.1,
    };
    
    // Generate random fluctuations based on timeframe
    const fluctuationFactor = timeframe === '24h' ? 0.05 : 
                             timeframe === '7d' ? 0.12 : 0.25;
    
    const randomFluctuation = (base) => {
      const fluctuation = (Math.random() * 2 - 1) * fluctuationFactor;
      return base * (1 + fluctuation);
    };
    
    // Generate historical data points
    const dataPoints = timeframe === '24h' ? 24 : 
                      timeframe === '7d' ? 7 : 30;
    
    const generateHistoricalData = (base, isPercentage = false) => {
      const result = [];
      let currentValue = base;
      
      for (let i = 0; i < dataPoints; i++) {
        // Add some randomness to each point
        const change = (Math.random() * 0.06 - 0.03) * currentValue;
        currentValue += change;
        
        // Ensure percentages stay within reasonable bounds
        if (isPercentage) {
          currentValue = Math.max(0, Math.min(100, currentValue));
        }
        
        result.push({
          time: i,
          value: currentValue
        });
      }
      
      return result;
    };
    
    // Generate alerts based on thresholds
    const generateAlerts = () => {
      const alertTypes = [
        'TVL decrease',
        'Unusual transaction volume',
        'High slippage detected',
        'Liquidity imbalance',
        'Price impact spike',
        'Failed transaction rate increase'
      ];
      
      const alertSeverities = ['low', 'medium', 'high'];
      const numAlerts = Math.floor(Math.random() * 4); // 0-3 alerts
      
      const alerts = [];
      for (let i = 0; i < numAlerts; i++) {
        const alertType = alertTypes[Math.floor(Math.random() * alertTypes.length)];
        const severity = alertSeverities[Math.floor(Math.random() * alertSeverities.length)];
        const timestamp = new Date(Date.now() - Math.random() * 86400000 * 
                         (timeframe === '24h' ? 1 : timeframe === '7d' ? 7 : 30));
        
        alerts.push({
          id: i,
          type: alertType,
          severity,
          timestamp,
          message: `${alertType} detected in ORA/USDC pool`,
          acknowledged: Math.random() > 0.7
        });
      }
      
      return alerts;
    };
    
    return {
      overview: {
        tvl: randomFluctuation(baseValues.tvl),
        tvlChange: (Math.random() * 10 - 5).toFixed(2),
        volume: randomFluctuation(baseValues.volume24h),
        volumeChange: (Math.random() * 15 - 7).toFixed(2),
        transactions: Math.round(randomFluctuation(baseValues.transactions)),
        transactionsChange: (Math.random() * 12 - 6).toFixed(2),
        uniqueUsers: Math.round(randomFluctuation(baseValues.uniqueUsers)),
        uniqueUsersChange: (Math.random() * 8 - 4).toFixed(2)
      },
      metrics: {
        fees: randomFluctuation(baseValues.fees),
        liquidityUtilization: randomFluctuation(baseValues.liquidityUtilization),
        priceImpact: randomFluctuation(baseValues.priceImpact),
        slippage: randomFluctuation(baseValues.slippage),
        failedTxRate: randomFluctuation(baseValues.failedTxRate)
      },
      charts: {
        tvlHistory: generateHistoricalData(baseValues.tvl),
        volumeHistory: generateHistoricalData(baseValues.volume24h),
        liquidityUtilizationHistory: generateHistoricalData(baseValues.liquidityUtilization, true),
        priceImpactHistory: generateHistoricalData(baseValues.priceImpact)
      },
      alerts: generateAlerts(),
      lastUpdated: new Date()
    };
  };
  
  const formatCurrency = (value) => {
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
  
  const formatNumber = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    } else {
      return value.toFixed(0);
    }
  };
  
  const getChangeClass = (change) => {
    const numChange = parseFloat(change);
    return numChange > 0 ? 'positive-change' : 
           numChange < 0 ? 'negative-change' : '';
  };
  
  const getChangeIcon = (change) => {
    const numChange = parseFloat(change);
    return numChange > 0 ? '↑' : 
           numChange < 0 ? '↓' : '';
  };
  
  const getSeverityClass = (severity) => {
    return `severity-${severity}`;
  };
  
  const renderMetricCard = (title, value, format, suffix = '') => {
    return (
      <div className="metric-card">
        <h4>{title}</h4>
        <div className="metric-value">
          {format === 'currency' ? formatCurrency(value) : 
           format === 'number' ? formatNumber(value) : 
           format === 'percent' ? `${value.toFixed(2)}%` : 
           value.toFixed(2)}
          {suffix}
        </div>
      </div>
    );
  };
  
  const renderOverviewCard = (title, value, change, format) => {
    return (
      <div className="overview-card">
        <div className="overview-title">{title}</div>
        <div className="overview-value">
          {format === 'currency' ? formatCurrency(value) : formatNumber(value)}
        </div>
        <div className={`overview-change ${getChangeClass(change)}`}>
          {getChangeIcon(change)} {change}%
        </div>
      </div>
    );
  };
  
  const renderAlerts = (alerts) => {
    if (!alerts || alerts.length === 0) {
      return <div className="no-alerts">No alerts detected in the selected timeframe</div>;
    }
    
    return (
      <div className="alerts-list">
        {alerts.map(alert => (
          <div key={alert.id} className={`alert-item ${getSeverityClass(alert.severity)}`}>
            <div className="alert-icon">
              {alert.severity === 'high' ? '⚠️' : 
               alert.severity === 'medium' ? '⚠' : 'ℹ️'}
            </div>
            <div className="alert-content">
              <div className="alert-message">{alert.message}</div>
              <div className="alert-time">
                {alert.timestamp.toLocaleString()}
              </div>
            </div>
            <div className="alert-status">
              {alert.acknowledged ? 'Acknowledged' : 'New'}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  const renderChartPlaceholder = (title) => {
    return (
      <div className="chart-placeholder">
        <div className="chart-title">{title}</div>
        <div className="chart-area">
          <div className="chart-message">
            Chart visualization would be implemented here with a charting library like Chart.js or Recharts
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="protocol-monitoring-dashboard">
      <div className="dashboard-header">
        <h3>Protocol Monitoring Dashboard</h3>
        <div className="timeframe-selector">
          <button 
            className={selectedTimeframe === '24h' ? 'active' : ''} 
            onClick={() => setSelectedTimeframe('24h')}
          >
            24H
          </button>
          <button 
            className={selectedTimeframe === '7d' ? 'active' : ''} 
            onClick={() => setSelectedTimeframe('7d')}
          >
            7D
          </button>
          <button 
            className={selectedTimeframe === '30d' ? 'active' : ''} 
            onClick={() => setSelectedTimeframe('30d')}
          >
            30D
          </button>
        </div>
      </div>
      
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <div>Loading protocol data...</div>
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : protocolData ? (
        <div className="dashboard-content">
          <div className="overview-section">
            <div className="section-title">Overview</div>
            <div className="overview-cards">
              {renderOverviewCard('Total Value Locked', protocolData.overview.tvl, protocolData.overview.tvlChange, 'currency')}
              {renderOverviewCard('Trading Volume', protocolData.overview.volume, protocolData.overview.volumeChange, 'currency')}
              {renderOverviewCard('Transactions', protocolData.overview.transactions, protocolData.overview.transactionsChange, 'number')}
              {renderOverviewCard('Unique Users', protocolData.overview.uniqueUsers, protocolData.overview.uniqueUsersChange, 'number')}
            </div>
          </div>
          
          <div className="metrics-section">
            <div className="section-title">Key Metrics</div>
            <div className="metrics-cards">
              {renderMetricCard('Protocol Fees', protocolData.metrics.fees, 'currency')}
              {renderMetricCard('Liquidity Utilization', protocolData.metrics.liquidityUtilization, 'percent')}
              {renderMetricCard('Avg. Price Impact', protocolData.metrics.priceImpact, 'percent')}
              {renderMetricCard('Avg. Slippage', protocolData.metrics.slippage, 'percent')}
              {renderMetricCard('Failed TX Rate', protocolData.metrics.failedTxRate, 'percent')}
            </div>
          </div>
          
          {/* <div className="charts-section">
            <div className="section-title">Charts</div>
            <div className="charts-grid">
              {renderChartPlaceholder('TVL History')}
              {renderChartPlaceholder('Volume History')}
              {renderChartPlaceholder('Liquidity Utilization')}
              {renderChartPlaceholder('Price Impact')}
            </div>
          </div> */}
          
          <div className="alerts-section">
            <div className="section-title">Alerts</div>
            {renderAlerts(protocolData.alerts)}
          </div>
          
          <div className="dashboard-footer">
            Last updated: {protocolData.lastUpdated.toLocaleString()}
            <button className="refresh-button" onClick={fetchProtocolData}>
              Refresh Data
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProtocolMonitoringDashboard; 
