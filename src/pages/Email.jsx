import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Email.css"
const Email = () => {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]); 
  const [showEmailForm, setShowEmailForm] = useState(false); 

  const handleAddEmail = () => {
    if (email.trim() !== "") {
      setEmails([...emails, email]); 
      setEmail(""); 
      setShowEmailForm(false); 
    }
  };

  return (
    <div>
      <h1>Email Address</h1>
    
      <p>
      <h2>My Email Address</h2> 
        You can use the following email addresses to sign in to your account and also to reset your password if you ever forget it.
      </p>

      <ul className="menu">
        
        {emails.length > 0 && (
          <div>
            <h3>Saved Emails</h3>
            <ul>
              {emails.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </div>
        )}

        <li>
          <Link onClick={() => setShowEmailForm(true)} className="active">
            <i className="fas fa-user"></i> <h2>+ Add Email Address</h2>
          </Link>

          
          {showEmailForm && (
            <div className="submenu">
              <p>A one-time password (OTP) will be sent to your email address.</p>
              <h4>Enter your email address</h4>
              <input
                type="email"
                placeholder="Enter new email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleAddEmail}>Add</button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Email;
