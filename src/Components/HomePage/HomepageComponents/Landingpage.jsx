// src/components/HomePage/HomePageComponents/Homepage.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="logo">ECOMHUB</div>
        <nav className="landing-nav">
          <Link to="/login" className="nav-button">
            Login
          </Link>
          <Link to="/signup" className="nav-button">
            Sign Up
          </Link>
        </nav>
      </header>
      <section className="hero-section">
        <h1>Website Analytics</h1>
        <p>
          Get Detailed Analytics of your Website
        </p>
        <Link to="/signup" className="cta-button">
          Get Started
        </Link>
      </section>
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3> Efficient Real-Time Notifications</h3>
            <p>Delivering timely notifications to keep users updated instantly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Analyze & Optimize</h3>
            <p>Offering comprehensive analytics and optimization.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>Machine Learning Integration</h3>
            <p>Integrating machine learning models for intelligent data processing.</p>
          </div>
          {/* <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Topnotch Security</h3>
            <p>Ensuring the highest level of security.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>Data Science & AI</h3>
            <p>Innovative data science and AI solutions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛠️</div>
            <h3>Big Data Visualization</h3>
            <p>Visualizing complex data for better insights.</p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
