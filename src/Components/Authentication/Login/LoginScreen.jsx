// LoginScreen.js
import React from 'react';

function LoginScreen({ toggleForm }) {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div className="input-container">
          <label htmlFor="email">Enter Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Enter Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <button onClick={toggleForm}>Create an account</button></p>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
