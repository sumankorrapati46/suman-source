import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Email.css";

const AddEmailAddress = () => {
  const [email, setEmail] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const navigate = useNavigate(); 

  const handleAddEmail = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }
    
    alert(`OTP sent to ${email}`);
    setShowOTP(true);  
    startResendTimer();
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }
    
    alert("Email verified successfully!");
    setEmail(""); 
    setOtp(""); 
    navigate("/email"); 
  };

  const handleResendOTP = () => {
    alert("New OTP sent to your email!");
    setOtp(""); 
    startResendTimer();
  };

  const startResendTimer = () => {
    setResendTimer(30);
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="add-email-container">
      <h2>Add Email Address</h2>

      {!showOTP ? (
        <form onSubmit={handleAddEmail} className="email-form">
          <p>A one-time password (OTP) will be sent to your email address.</p>
          <h4>Enter your email address</h4>
          <input
            type="email"
            placeholder="Enter new email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <div className="button-group">
            <button type="submit">Add</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleVerifyOTP} className="otp-form">
          <p>Enter the OTP sent to <strong>{email}</strong></p>
          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength="6"
            required
          />
          
          <div className="button-group">
            <button type="submit">Verify</button>
            <button type="button" className="cancel-btn" onClick={() => navigate("/email")}>
              Cancel
            </button>
          </div>
          {resendTimer === 0 ? (
            <p className="resend-link" onClick={handleResendOTP}>Resend OTP</p>
          ) : (
            <p className="resend-timer">Resend OTP in {resendTimer}s</p>
          )}
        </form>
      )}
    </div>
  );
};

export default AddEmailAddress;
