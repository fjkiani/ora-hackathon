import React, { useState, useEffect } from 'react';

function MarketAlerts({ onAlertClick = () => {} }) {
  const [alerts, setAlerts] = useState([]);
  const [alertSettings, setAlertSettings] = useState({
    priceAlerts: true,
    tvlChanges: true,
    securityIncidents: true,
    opportunityAlerts: true
  });
  
  // Fetch alerts periodically
  useEffect(() => {
    const fetchAlerts = async () => {
      // This could connect to a websocket for real-time updates
      // or poll an API endpoint
      
      // Example alerts
      const newAlerts = [
        {
          type: 'price',
          severity: 'high',
          message: 'ETH price increased by 10% in the last hour',
          timestamp: new Date()
        },
        {
          type: 'security',
          severity: 'critical',
          message: 'Potential exploit detected in Protocol X',
          timestamp: new Date()
        }
      ];
      
      setAlerts(prev => [...newAlerts, ...prev].slice(0, 10));
    };
    
    fetchAlerts(); // Fetch immediately on mount
    const interval = setInterval(fetchAlerts, 60000);
    return () => clearInterval(interval);
  }, []);
  
  const handleAlertClick = (alert) => {
    console.log("Alert clicked:", alert);
    onAlertClick(alert);
  };
  
  const toggleAlertSetting = (setting) => {
    setAlertSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  return (
    <div className="market-alerts">
      <h3>Market Alerts</h3>
      
      <div className="alert-settings">
        <div className="setting-toggles">
          <label>
            <input 
              type="checkbox" 
              checked={alertSettings.priceAlerts} 
              onChange={() => toggleAlertSetting('priceAlerts')}
            />
            Price Alerts
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={alertSettings.tvlChanges} 
              onChange={() => toggleAlertSetting('tvlChanges')}
            />
            TVL Changes
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={alertSettings.securityIncidents} 
              onChange={() => toggleAlertSetting('securityIncidents')}
            />
            Security Incidents
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={alertSettings.opportunityAlerts} 
              onChange={() => toggleAlertSetting('opportunityAlerts')}
            />
            Opportunity Alerts
          </label>
        </div>
      </div>
      
      <div className="alerts-list">
        {alerts.length === 0 ? (
          <p className="no-alerts">No alerts at this time</p>
        ) : (
          alerts.map((alert, index) => (
            <div 
              key={index} 
              className={`alert alert-${alert.severity} alert-${alert.type}`}
              onClick={() => handleAlertClick(alert)}
            >
              <span className="alert-time">{alert.timestamp.toLocaleTimeString()}</span>
              <span className="alert-message">{alert.message}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MarketAlerts; 