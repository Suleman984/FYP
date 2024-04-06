// src\Components\HomePage\HomepageComponents\Homepage.jsx

import React, { useState } from "react";
import "../CSS/Homepage.css"; // Import CSS file for styling
import * as ReactDOM from "react-dom/client";
import PopupRegister from "./RegisterPopup/PopupRegister"; // Import RegisterPopup component
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <div className="centered-text">
        <h1>Welcome to Our Website</h1>
        <p>Explore our services and offerings.</p>
      </div>
    </>,
  },
]);

function Homepage() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const tools = () => {};
  const explore = () => {};
  const analytics = () => {};
  return (
    <div className="landing-page-container">
      <div className="top-menu">
        <ul>
          <li onClick={analytics}>Website Analytics</li>
          <li onClick={explore}>Explore Ecommerce Businesses</li>
          <li onClick={togglePopup}>Register for Updates</li>
          <li onClick={tools}>Tools and Technologies</li>
        </ul>
      </div>

      <div className="centered-text">
        <h1>Welcome to Our Website</h1>
        <p>Explore our services and offerings.</p>
      </div>
      {showPopup && <PopupRegister onClose={togglePopup} />}
    </div>
  );
}

export default Homepage;
