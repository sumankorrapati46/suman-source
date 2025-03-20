import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Mobile.css";

const AddMobileNumber = () => {
  const [mobile, setMobile] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    setMobile(value);
  };

  const handleAddMobile = (e) => {
    e.preventDefault();
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    
    alert(`OTP sent to ${mobile}`);
    setShowOTP(true); 
    startResendTimer();
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }
    
    alert("Mobile number verified successfully!");
    setMobile("");
    setOtp("");
    navigate("/mobile");
  };

  const handleResendOTP = () => {
    alert("New OTP sent to your mobile!");
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
    <div className="add-mobile-container">
      <h2>Add Mobile Number</h2>

      {!showOTP ? (
        <form onSubmit={handleAddMobile} className="mobile-form">
          <p>A one-time password (OTP) will be sent to your mobile number.</p>
          <h4>Enter your mobile number</h4>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={handleInputChange}
            maxLength="10"
            required
            onKeyDown={(e) => {
              if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                e.preventDefault();
              }
            }}
          />
          
          <div className="button-group">
            <button type="submit">Add</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleVerifyOTP} className="otp-form">
          <p>Enter the OTP sent to <strong>{mobile}</strong></p>
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
            <button type="button" className="cancel-btn" onClick={() => navigate("/mobile")}>
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

export default AddMobileNumber;
