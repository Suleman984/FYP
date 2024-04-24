// LoginScreen.js
import React,{useState,useEffect} from "react";
import { auth } from "../firebase";
import Homepage from "../../HomePage/HomepageComponents/Homepage";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link,  useNavigate } from "react-router-dom";


function LoginScreen({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignupClick = () => {

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully", {res});
    //   window.location.href = "../../HomePage/HomepageComponents/Homepage";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
      navigate("/")
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div className="input-container">
          <label htmlFor="email">Enter Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account?{" "}
            <Link to={"/signup"}>Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
