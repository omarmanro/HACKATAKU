import React from 'react';
import { useState, useEffect } from 'react';
import '../../components/css/Dashboard.css'; 

export default function Dashboard() {
  const [earnings, setEarnings] = useState({
    totalEarnings: 0,
    monthlyEarnings: [],
    recentEvents: []
  });

  // Simulated data - replace with actual API calls
  useEffect(() => {
    // Simulated data
    const data = {
      totalEarnings: 25000,
      monthlyEarnings: [
        { month: 'January', amount: 3000 },
        { month: 'February', amount: 4500 },
        { month: 'March', amount: 5000 },
        { month: 'April', amount: 6000 },
        { month: 'May', amount: 6500 }
      ],
      recentEvents: [
        { id: 1, name: 'Corporate Meeting', revenue: 1200, date: '2025-05-20' },
        { id: 2, name: 'Wedding Reception', revenue: 2500, date: '2025-05-18' },
        { id: 3, name: 'Birthday Party', revenue: 800, date: '2025-05-15' }
      ]
    };
    setEarnings(data);
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Financial Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <h3 className="card-title">Total Earnings</h3>
          <p className="card-value green">
            ${earnings.totalEarnings.toLocaleString()}
          </p>
        </div>
        
        <div className="card">
          <h3 className="card-title">Average Monthly</h3>
          <p className="card-value blue">
            ${(earnings.totalEarnings / 5).toLocaleString()}
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Total Events</h3>
          <p className="card-value purple">
            {earnings.recentEvents.length}
          </p>
        </div>
      </div>

      {/* Recent Events Table */}
      <div className="events-table">
        <h2 className="table-title">Recent Events</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {earnings.recentEvents.map((event) => (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td className="revenue">
                    ${event.revenue.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="trends">
        <h2 className="trends-title">Monthly Earnings Trend</h2>
        <div className="chart-container">
          {/* Chart will be added here once Chart.js is installed */}
          <p className="text-gray-500">Install Chart.js to view monthly earnings trend</p>
        </div>
      </div>
    </div>
  );
}