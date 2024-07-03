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
        <h1>Turn data into insight with survey reports</h1>
        <p>
          Start your free trial, Get real-time data analysis for your projects
        </p>
        <Link to="/signup" className="cta-button">
          Get Started
        </Link>
      </section>
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>50 Implementations</h3>
            <p>Providing top-notch implementations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Analyze & Optimize</h3>
            <p>Offering comprehensive analytics and optimization.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Consulting Services</h3>
            <p>Expert consulting services to grow your business.</p>
          </div>
          <div className="feature-card">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
