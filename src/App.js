import React from 'react';
import axios from 'axios';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Profile from "./components/profile";
import { useState,useEffect } from "react";
import { auth } from "./Components/Authentication/firebase";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginScreen from './Components/Authentication/Login/LoginScreen';
import Signup from './Components/Authentication/SignUp/SignupScreen';
import Authentication from './Components/Authentication/Authentication';
import Homepage from './Components/HomePage/HomepageComponents/Homepage'
import DataComponent from './Components/ExploreBusiness/Datacomponent';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignupScreen from './Components/Authentication/SignUp/SignupScreen';



function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="App">
      {/* <LoginScreen/>
      {/* <Homepage/> */}
      {/* <DataComponent/> */}
      {/* <RouterProvider router={router} /> */}
      <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                path="/"
                element={!user ? <Navigate to="/login" /> : <Homepage />}
              />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
