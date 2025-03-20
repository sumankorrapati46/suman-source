import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import {Link } from "react-router-dom";
import "../styles/Forgot.css";

const FORGOT_PASSWORD_URL = "/forgot-password";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email/ID is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await fetch("https://your-api.com/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          setError("Email not found.");
        } else if (response.status === 500) {
          setError("Server error. Please try again later.");
        } else if (response.status === 502) {
          setError("Bad Gateway. Try again later.");
        } else if (response.status === 402) {
          setError("Payment required. Contact support.");
        } else {
          setError("Something went wrong. Try again.");
        }
      } else {
        alert("Password reset link sent to your email.");
      }
    } catch (error) {
      setError("No server response. Please check your connection.");
    }
  };

  return (
    <div className="forgot-password-container">
      <img src="/logo.png" alt="HInfinity Logo" className="logo" />

      <div className="content">
        <div className="forgot-form">
          <h2>Forgot Password?</h2>
          <p>
            Enter your email address, click "Reset password", and we’ll send
            you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="email"
                placeholder="Email/Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="reset-btn">
              Reset password
            </button>
            <div className="Login">
              <Link to="/Login">Return to Login</Link>
            </div>
          </form>
        </div>
        <div className="forgot-image">
          <img src="/logo2.png" alt="Forgot Password" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

