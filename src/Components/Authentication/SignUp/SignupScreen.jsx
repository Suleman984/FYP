// SignupScreen.js (Component)
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import React,{useState,useEffect} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import '../CSS/Login.css'; // Import CSS file for styling
import { Link } from "react-router-dom";
function SignupScreen({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [alrgeistered,setAlRegistered]=useState("")

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      setAlRegistered('Already Registered')
      console.log(error.message);
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
          <input type="email" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="input-container">
          <label htmlFor="password">Enter Password:</label>
          <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-container">
          <p style={{color:'red'}}>{alrgeistered}</p>
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
