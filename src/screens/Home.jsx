import React from 'react';
import { Link } from 'react-router-dom';
import ImageComponent from '../components/ImageComponent';
import Logo from '../assets/logito.png';
import './css/Home.css';
import { FaCalendarAlt, FaChartLine, FaCubes } from 'react-icons/fa';

const Home = () => {
  return (    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <ImageComponent src={Logo} alt="Logo" className="hero-logo" />
          <h1>Manejador de Eventos <span className="highlight">Simplified</span></h1>
          <p className="hero-description">
            Tu mejor opcion para administrar tu evento con la mejor calidad
          </p>
          <div className="cta-buttons">
            <Link to="/eventos" className="primary-button">Get Started</Link>
            <Link to="/dashboard" className="secondary-button">View Dashboard</Link>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <h2 className="section-title">Our Features</h2>
        <div className="features-grid">
          <Link to="/eventos" className="feature-card">
            <div className="feature-icon">
              <FaCalendarAlt />
            </div>
            <h3>Event Planning</h3>
            <p>Create and manage events with intuitive tools and real-time updates</p>
          </Link>
          
          <Link to="/dashboard" className="feature-card">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3>Analytics Dashboard</h3>
            <p>Track performance metrics and gain valuable insights</p>
          </Link>
          
          <Link to="/resources" className="feature-card">
            <div className="feature-icon">
              <FaCubes />
            </div>
            <h3>Resource Management</h3>
            <p>Optimize resource allocation and maximize efficiency</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
