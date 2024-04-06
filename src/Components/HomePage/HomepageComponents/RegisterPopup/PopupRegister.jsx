// RegisterPopup.js

import React, { useState } from 'react';
import './Popup.css';

function RegisterPopup({ onClose }) {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleTermsChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleRegister = () => {
    // Implement your registration logic here
    console.log("Registered for latest updates");
    // Close the popup
    onClose();
  };

  return (
    <div className="popup">
      <p className="popup-heading">Register</p>
      <label className="terms-label">
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={handleTermsChange}
        />
        Accept Terms and Conditions
      </label>
      <button className="register-button" onClick={handleRegister} disabled={!acceptedTerms}>
        Register
      </button>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
}

export default RegisterPopup;
