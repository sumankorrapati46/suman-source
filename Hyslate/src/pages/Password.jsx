import React from "react";
import { Link } from "react-router-dom";
import "../styles/Password.css";


const Password = () => {
  return (
    <>
    <h2 className="Security-heading">Security</h2>
    <div className="Password-container">
     
      <form className="password">
        <h3>Password</h3>
        <button><Link to="/change-password">Change Password</Link></button>
      </form>
    </div>
    </>
  );
};




export default Password;