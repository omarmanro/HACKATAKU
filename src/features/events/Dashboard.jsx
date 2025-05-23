import React from 'react';
import { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { FaCalendarAlt, FaChartLine, FaUsers, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import '../../components/css/Dashboard.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  const [timeFilter, setTimeFilter] = useState('year');
  const [metrics, setMetrics] = useState({
    totalEarnings: 0,
    totalEvents: 0,
    avgEventValue: 0,
    customerSatisfaction: 0,
    upcomingEvents: [],
    monthlyData: [],
    resourceUtilization: [],
    recentEvents: []
  });

  // Simulated data - replace with actual API calls
  useEffect(() => {
    // Simulated data
    const data = {
      totalEarnings: 125000,
      totalEvents: 48,
      avgEventValue: 2604,
      customerSatisfaction: 4.8,
      upcomingEvents: [
        { id: 1, name: 'Corporate Conference', date: '2025-05-25', time: '09:00', location: 'Grand Ballroom', attendees: 150 },
        { id: 2, name: 'Wedding Reception', date: '2025-05-27', time: '18:00', location: 'Garden Terrace', attendees: 200 },
        { id: 3, name: 'Tech Summit', date: '2025-05-30', time: '10:00', location: 'Conference Hall A', attendees: 120 }
      ],
      monthlyData: [
        { month: 'Jan', revenue: 8000, events: 4 },
        { month: 'Feb', revenue: 12000, events: 6 },
        { month: 'Mar', revenue: 15000, events: 7 },
        { month: 'Apr', revenue: 18000, events: 8 },
        { month: 'May', revenue: 22000, events: 10 }
      ],
      resourceUtilization: [
        { name: 'Grand Ballroom', usage: 85 },
        { name: 'Conference Room A', usage: 70 },
        { name: 'Garden Terrace', usage: 60 },
        { name: 'Meeting Room B', usage: 45 }
      ],
      recentEvents: [
        { id: 1, name: 'Tech Conference', revenue: 5200, date: '2025-05-20', status: 'Completed' },
        { id: 2, name: 'Wedding Ceremony', revenue: 8500, date: '2025-05-18', status: 'Completed' },
        { id: 3, name: 'Corporate Meeting', revenue: 3200, date: '2025-05-15', status: 'In Progress' }
      ]
    };
    setMetrics(data);
  }, [timeFilter]);

  const revenueChartData = {
    labels: metrics.monthlyData.map(d => d.month),
    datasets: [
      {
        label: 'Monthly Revenue',
        data: metrics.monthlyData.map(d => d.revenue),
        fill: true,
        borderColor: '#0C9F9B',
        backgroundColor: 'rgba(12, 159, 155, 0.1)',
        tension: 0.4
      }
    ]
  };

  const eventsTrendData = {
    labels: metrics.monthlyData.map(d => d.month),
    datasets: [
      {
        label: 'Number of Events',
        data: metrics.monthlyData.map(d => d.events),
        backgroundColor: '#096B68',
        borderRadius: 4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Event Dashboard</h1>
        <div className="time-filter">
          <button 
            className={timeFilter === 'month' ? 'active' : ''} 
            onClick={() => setTimeFilter('month')}
          >
            Month
          </button>
          <button 
            className={timeFilter === 'quarter' ? 'active' : ''} 
            onClick={() => setTimeFilter('quarter')}
          >
            Quarter
          </button>
          <button 
            className={timeFilter === 'year' ? 'active' : ''} 
            onClick={() => setTimeFilter('year')}
          >
            Year
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <div className="card-icon">
            <FaChartLine />
          </div>
          <div className="card-content">
            <h3 className="card-title">Total Revenue</h3>
            <p className="card-value green">
              ${metrics.totalEarnings.toLocaleString()}
            </p>
            <p className="card-trend positive">↑ 12.5% vs last period</p>
          </div>
        </div>
        
        <div className="card">
          <div className="card-icon">
            <FaCalendarAlt />
          </div>
          <div className="card-content">
            <h3 className="card-title">Total Events</h3>
            <p className="card-value blue">
              {metrics.totalEvents}
            </p>
            <p className="card-trend positive">↑ 8.3% vs last period</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">
            <FaUsers />
          </div>
          <div className="card-content">
            <h3 className="card-title">Avg Event Value</h3>
            <p className="card-value purple">
              ${metrics.avgEventValue.toLocaleString()}
            </p>
            <p className="card-trend positive">↑ 5.2% vs last period</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Revenue Chart */}
        <div className="chart-container revenue-chart">
          <h2 className="section-title">Revenue Trend</h2>
          <div className="chart-wrapper">
            <Line data={revenueChartData} options={chartOptions} />
          </div>
        </div>

        {/* Events Trend */}
        <div className="chart-container events-chart">
          <h2 className="section-title">Events by Month</h2>
          <div className="chart-wrapper">
            <Bar data={eventsTrendData} options={chartOptions} />
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Upcoming Events */}
        <div className="upcoming-events">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-list">
            {metrics.upcomingEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-card-header">
                  <h3>{event.name}</h3>
                  <span className="event-date">
                    <FaCalendarAlt /> {event.date}
                  </span>
                </div>
                <div className="event-card-details">
                  <p><FaClock /> {event.time}</p>
                  <p><FaMapMarkerAlt /> {event.location}</p>
                  <p><FaUsers /> {event.attendees} attendees</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Utilization */}
        <div className="resource-utilization">
          <h2 className="section-title">Resource Utilization</h2>
          <div className="utilization-list">
            {metrics.resourceUtilization.map((resource, index) => (
              <div key={index} className="utilization-item">
                <div className="utilization-header">
                  <span>{resource.name}</span>
                  <span className="utilization-percentage">{resource.usage}%</span>
                </div>
                <div className="utilization-bar">
                  <div 
                    className="utilization-progress" 
                    style={{ width: `${resource.usage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
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
                <th>Status</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {metrics.recentEvents.map((event) => (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>
                    <span className={`status-badge ${event.status.toLowerCase()}`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="revenue">
                    ${event.revenue.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}