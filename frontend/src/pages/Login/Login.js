// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/authActions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    try {
      const response = dispatch(loginUser({ email, password }));
      if (response) {
        navigate("/enroll");
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="auth-form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleLogin(email, password)}>Login</button>
      <p>
        Don't have an account?{" "}
        <span className="link" onClick={() => navigate("/signup")}>
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default Login;