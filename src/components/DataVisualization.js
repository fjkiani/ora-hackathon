import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

// Register the required chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function DataVisualization({ data, type }) {
  // Implement different chart types based on the data and query
  const renderChart = () => {
    if (!data || !data.datasets || !data.labels) {
      return <p>No data available for visualization</p>;
    }

    switch(type) {
      case 'price_history':
        return (
          <Line 
            data={data}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Token Price History'
                }
              }
            }}
          />
        );
      case 'tvl_comparison':
        return (
          <Bar 
            data={data}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Protocol TVL Comparison'
                }
              }
            }}
          />
        );
      // Add more chart types
      default:
        return <p>Select a data visualization type</p>;
    }
  };

  return (
    <div className="data-visualization">
      {renderChart()}
    </div>
  );
}

export default DataVisualization; 