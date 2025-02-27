import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../styles/PersonalInfo.css"
const PersonalInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = location.state || {}; 

  return (
    <div className="personal-info-container">
      <div className="header">
        <div className="profile-icon">
          <FaUserCircle size={50} color="blue" />
        </div>
        <button className="edit-btn" onClick={() => navigate("/profile", { state: userInfo })}>
          Edit
        </button>
      </div>

      <h2>Personal Information</h2>
      <div className="info-grid">
        <div className="info-column">
          <p><strong>First Name:</strong> {userInfo.firstName}</p>
          <p><strong>Display Name:</strong> {userInfo.displayName}</p>
          <p><strong>Country:</strong> {userInfo.country}</p>
          <p><strong>Timezone:</strong> {userInfo.timezone}</p>
        </div>
        <div className="info-column">
          <p><strong>Last Name:</strong> {userInfo.lastName}</p>
          <p><strong>Gender:</strong> {userInfo.gender}</p>
          <p><strong>State:</strong> {userInfo.state}</p>
          <p><strong>Language:</strong> {userInfo.language}</p>
          
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

