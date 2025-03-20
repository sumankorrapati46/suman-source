import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Preferences.css";

const PreferencesPage = () => {
  const [dateFormats, setDateFormats] = useState([]);
  const [selectedDateFormat, setSelectedDateFormat] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [emailPreferences, setEmailPreferences] = useState({
    signInAlert: false,
    thirdPartyAccess: false,
    newsletterSubscription: false,
  });

  useEffect(() => {
    axios.get("https://api.example.com/date-formats")
      .then(response => setDateFormats(response.data))
      .catch(error => console.error("Error fetching date formats:", error));
  }, []);

  useEffect(() => {
    axios.get("https://api.example.com/user/profile-picture")
      .then(response => setProfilePicture(response.data.profilePicture))
      .catch(error => console.error("Error fetching profile picture:", error));
  }, []);

  useEffect(() => {
    axios.get("https://api.example.com/user/email-preferences")
      .then(response => setEmailPreferences(response.data))
      .catch(error => console.error("Error fetching email preferences:", error));
  }, []);

  const handleDateFormatChange = (event) => {
    setSelectedDateFormat(event.target.value);
  };
  const [dateFormat, setDateFormat] = useState("dd/MM/yy (09/01/25)");
  const handleToggle = (event) => {
    const { name, checked } = event.target;
    setEmailPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="preferences-container">
      <h2 className="page-title">Settings</h2>

      <div className="section">
        <h3>Preferences</h3>
        <p>Manage your preferences for date format, privacy settings, and email notifications.</p>
      </div>

      <div className="setting-option">
          <h3>Date Format</h3>
          <p>Select the date and time format to be used for your HY Slate account activity.</p>
          <select value={dateFormat} onChange={(e) => setDateFormat(e.target.value)}>
            <option value="dd/MM/yy (09/01/25)">dd/MM/yy (09/01/25)</option>
            <option value="MM/dd/yy (01/09/25)">MM/dd/yy (01/09/25)</option>
            <option value="yyyy-MM-dd (2025-01-09)">yyyy-MM-dd (2025-01-09)</option>
          </select>
        </div>

      <div className="setting-item">
        <h4>Profile Picture Visibility</h4>
        <p>You need to add a profile picture to select its visibility setting.</p>
        {profilePicture ? (
          <img src={profilePicture} alt="Profile" className="profile-pic" />
        ) : (
          <button className="profile-btn">Add Profile Picture</button>
        )}
      </div>

      <div className="section">
        <h3>Email Notifications</h3>
      </div>

      <div className="toggle-item">
        <h4>New sign-in to account alert</h4>
        <p>Receive email alerts whenever your account is signed in from a new device, browser, or location.</p>
        <label className="toggle-switch">
          <input
            type="checkbox"
            name="signInAlert"
            checked={emailPreferences.signInAlert}
            onChange={handleToggle}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="toggle-item">
        <h4>Third-party app access alert</h4>
        <p>Receive email alerts whenever your account is accessed from a new third-party app or location.</p>
        <label className="toggle-switch">
          <input
            type="checkbox"
            name="thirdPartyAccess"
            checked={emailPreferences.thirdPartyAccess}
            onChange={handleToggle}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="toggle-item">
        <h4>Newsletter subscription</h4>
        <p>Receive marketing communication regarding HY Slate products, services, and events.</p>
        <label className="toggle-switch">
          <input
            type="checkbox"
            name="newsletterSubscription"
            checked={emailPreferences.newsletterSubscription}
            onChange={handleToggle}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default PreferencesPage;
