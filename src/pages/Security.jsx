import React from "react";
import "../App.css";


const Security = () => {
  return (
    <div className="security-container">
      <h2>Security Settings</h2>
      <ul>
        <li><a href="#">Change Password</a></li>
        <li><a href="#">Enable Two-Factor Authentication</a></li>
        <li><a href="#">View Active Devices</a></li>
      </ul>
    </div>
  );
};

export default Security;

