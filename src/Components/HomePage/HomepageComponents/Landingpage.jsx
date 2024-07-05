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
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="why-choose-us-container">
          <div className="why-choose-card">
            <div className="choose-icon">🚀</div>
            <h3>High Performance</h3>
            <p>Optimized for speed and reliability.</p>
          </div>
          <div className="why-choose-card">
            <div className="choose-icon">💼</div>
            <h3>Professional Services</h3>
            <p>Top-notch services from industry experts.</p>
          </div>
          <div className="why-choose-card">
            <div className="choose-icon">⚙️</div>
            <h3>Innovative Solutions</h3>
            <p>Cutting-edge technology to meet your needs.</p>
          </div>
        </div>
      </section>
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-container">
          <div className="team-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-img"
            />
            <h3>Muhammad Adil</h3>
          </div>
          <div className="team-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-img"
            />
            <h3>Muhammad Suleman</h3>
          </div>
          <div className="team-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-img"
            />
            <h3>Hassan Abrar</h3>
          </div>
        </div>
      </section>
      <footer className="landing-footer">
        <div className="footer-content">
          <p>&copy; 2024 ECOMHUB. All Rights Reserved.</p>
          <nav className="footer-nav">
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
