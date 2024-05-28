// src\Components\HomePage\HomepageComponents\Homepage.jsx

import React, { useState } from "react";
import "../CSS/Homepage.css"; // Import CSS file for styling
import * as ReactDOM from "react-dom/client";
import PopupRegister from "./RegisterPopup/PopupRegister"; // Import RegisterPopup component
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import DataComponent from "../../ExploreBusiness/Datacomponent";

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
    <div className="landing-page-container" >
      

      <div className="centered-text">
        <h1>Welcome to Our Website</h1>
        <p>Explore our services and offerings.</p>
      </div>
      {showPopup && <PopupRegister onClose={togglePopup} />}
    </div>
  );
}

export default Homepage;
