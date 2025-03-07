import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Email.css";

const AddEmailAddress = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  const handleAddEmail = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`OTP sent to ${email}. Email added successfully!`);
    setEmail(""); 
    navigate("/email"); 
  };

  return (
    <div className="add-email-container">
      <h2>Add Email Address</h2>

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
    </div>
  );
};

export default AddEmailAddress;
