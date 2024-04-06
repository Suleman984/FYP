// SignupScreen.js (Component)

import React from 'react';
import '../CSS/Login.css'; // Import CSS file for styling

function SignupScreen({ toggleForm }) {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Signup</h2>
        <div className="input-container">
          <label htmlFor="email">Enter Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Enter Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" placeholder="Confirm your password" />
        </div>
        <button type="submit">Signup</button>
        <div className="register-link">
          <p>Already have an account? <a href="#" onClick={toggleForm}>Login here</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
