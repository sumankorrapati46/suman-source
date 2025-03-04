import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Mobile.css";

const AddMobileNumber = () => {
  const [mobile, setMobile] = useState("");
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
    alert(`OTP sent to ${mobile}. Mobile number added successfully!`);
    setMobile("");
    navigate("/mobile"); 
  };

  return (
    <div className="add-mobile-container">
      <h2>Add Mobile Number</h2>

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
    </div>
  );
};

export default AddMobileNumber;
