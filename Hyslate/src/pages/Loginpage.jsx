import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Logo from "../assets/logo4.png"; // Importing logo properly

import "../styles/Login.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email/ID is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setErrors(newErrors);
    if (valid) {
      console.log("Login successful", formData);
    }
  };

  return (
    <div className="login-page">
      {/* Top Frame (10% height) */}
      <div className="top-frame">
      <img src={Logo} alt="Logo" className="logo" />

      </div>

      {/* Main Content Frame (90% height) */}
      <div className="main-frame">
        {/* Left Frame (60% width) */}
        <div className="left-frame">
          <div className="login-form">
            <h2>Sign in to HY Slate</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="email"
                  placeholder="Email/Id"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.email && <p className="error-message">{errors.email}</p>}

              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.password && <p className="error-message">{errors.password}</p>}

              <div className="forgot-links">
                <Link to="/forgot-password">Forgot Password?</Link>
                <Link to="/forgot-username">Forgot Email/Id?</Link>
              </div>

              <button type="submit" className="login-btn">Login</button>
            </form>

            <p className="register-text">
              Do you have an account? <Link to="/register">Registration</Link>
            </p>

            <p className="social-text">Or sign up with</p>
            <div className="social-icons">
              <a href="#"><FcGoogle /></a>
              <a href="#"><FaMicrosoft /></a>
              <a href="#"><FaLinkedin color="#0077b5" /></a>
              <a href="#"><FaTwitter color="#1DA1F2" /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* Right Frame (40% width) */}
        <div className="right-frame">
          <img src="/login.png" alt="Illustration" className="login-image" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

