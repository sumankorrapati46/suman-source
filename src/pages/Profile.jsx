import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import CountryDropdown from "./CountryDropdown";
import StateDropdown from "./StateDropdown";
import LanguageDropdown from "./LanguageDropdown";
import TimezoneDropdown from "./TimezoneDropdown";

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    gender: "",
    country: "",
    state: "",
    language: "",
    timezone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    navigate("/personal-info", { state: formData }); 
  };
 
  const handleCancel = () => {
    navigate("/profile"); 
  };

  return (
    <div className="profile-form">
      <h2>Profile</h2>
      <div className="user-profile-container">
        <form>
          <div className="profile-image">
            <h2><FaUserCircle size={40} color="blue" /></h2>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Display Name</label>
              <input type="text" name="displayName" value={formData.displayName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Country/Region</label>
              <CountryDropdown onSelectCountry={(country) => setFormData({ ...formData, country })} />
            </div>

            <div className="form-group">
              <label>State</label>
              <StateDropdown selectedCountry={formData.country} onSelectState={(state) => setFormData({ ...formData, state })} />
            </div>

            <div className="form-group">
              <label>Language</label>
              <LanguageDropdown onSelectLanguage={(language) => setFormData({ ...formData, language })} />
            </div>

            <div className="form-group">
              <label>Timezone</label>
              <TimezoneDropdown onSelectTimezone={(timezone) => setFormData({ ...formData, timezone })} />
            </div>
          </div>

          <div className="form-buttons">
            <button type="submit" className="save-btn" onClick={handleSave}>Save</button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>
                Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
