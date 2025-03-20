import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Password.css";
import ForgotPassword from "./ForgotPassword";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }

    if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(newPassword)) {
      setError("Password must contain at least one uppercase letter, one number, and one special character.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    setError("");
    alert("Password changed successfully!");
  };

  return (
    <>
    <h2 className="Security-heading">Security</h2>

    <div className="security-container">
      <h2> Password </h2>

      <form onSubmit={handleSubmit} className="security-form">
        {error && <p className="error-message">{error}</p>}
        <p>Set a strong password to prevent unauthorized access to your account. </p>
        <div className="form-group">
          <label>Current Password</label> 
          
          <input
            type="password"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Change Password</button>
        <Link to="/Forgot-password"  className="forgot-password-link">Forgot Password</Link>
      </form>
    </div>
    </>
  );
};

export default ChangePassword;