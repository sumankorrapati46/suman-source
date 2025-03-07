import React from "react";
import { Link } from "react-router-dom";
import "../styles/Password.css";


const Password = () => {
  return (
    <div className="Password-container">
      <h2>Security</h2>
      <form className="password">
        <h3>Password</h3>
        <button><Link to="/change-password">Change Password</Link></button>
      </form>
    </div>
  );
};

export default Password;
