import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import '../CSS/Login.css'; // Import CSS file for styling

function SignupScreen({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alrgeistered, setAlRegistered] = useState("");
  const navigate = useNavigate();
  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
     
      if (user) {
        toast.success("User Registered Successfully!!", {
          position: "top-center",
        });

        // Update state to indicate successful registration
        

        // Navigate to login screen
        navigate("/login");
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email
        });
       
        
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setAlRegistered('Email already in use');
      } else if (error.code === 'auth/invalid-email') {
        setAlRegistered('Invalid email');
      } else if (error.code === 'auth/weak-password') {
        setAlRegistered('Weak password');
      } else {
        setAlRegistered('An error occurred');
      }
      
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Signup</h2>
        <div className="input-container">
          <label htmlFor="email">Enter Email:</label>
          <input type="email" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Enter Password:</label>
          <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-container">
          <p style={{ color: 'red' }}>{alrgeistered}</p>
        </div>

        <button type="submit" onClick={handleRegister}>Signup</button>
        <div className="register-link">
          <p>Already have an account? <a href="#" onClick={toggleForm}><Link to={"/login"}>Login</Link></a></p>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
