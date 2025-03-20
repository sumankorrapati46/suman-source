
import {Link } from "react-router-dom";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "../styles/ForgotUser.css";

const FORGOT_PASSWORD_URL = "/forgot-username";
const ForgotUserId = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!emailOrPhone) {
      setError("Email/Phone number is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone) && !/^\d{10}$/.test(emailOrPhone)) {
      setError("Enter a valid Email or 10-digit Phone Number");
      return;
    }

    try {
      const response = await fetch("https://your-api.com/forgot-userid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrPhone }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          setError("Email/Phone not found.");
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
        alert("User ID recovery link sent to your email/phone.");
      }
    } catch (error) {
      setError("No server response. Please check your connection.");
    }
  };

  return (
    <div className="forgot-userid-container">
      <img src="/logo.png" alt="HInfinity Logo" className="logo" />

      <div className="content">
        <div className="forgot-form">
          <h2>Forgot Email/Id?</h2>
          <p>
            Enter your email address, click "Forgot User Id", and we’ll send
            you a link to reset your user ID.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="emailOrPhone"
                placeholder="Email/Phone number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="forgot-btn">
              Forgot User Id
            </button>
            <div className="Login">
              <Link to="/Login">Return to Login</Link>
            </div>
          </form>
        </div>
        <div className="forgot-image">
          <img src="/logo1.png" alt="Forgot User ID" />
        </div>
      </div>
    </div>
  );
};

export default ForgotUserId;
