// Authentication.js (Parent Component)

import React, { useState } from 'react';
import SignupScreen from './SignUp/SignupScreen';
import LoginScreen from './Login/LoginScreen';

function Authentication() {
  const [showSignup, setShowSignup] = useState(true);

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="authentication-container">
      {showSignup ? <SignupScreen toggleForm={toggleForm} /> : <LoginScreen toggleForm={toggleForm} />}
    </div>
  );
}

export default Authentication;
