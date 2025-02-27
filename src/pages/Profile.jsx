import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FaUser, FaGlobe } from "react-icons/fa";
import { Person, Public } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../App.css";


const CountryDropdown = ({ onSelectCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <select name="country" onChange={(e) => onSelectCountry(e.target.value)}>
      <option value="">Select Country</option>
      {countries.map((country, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};


const StateDropdown = ({ selectedCountry, onSelectState }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (selectedCountry) {
      fetch(`https://api.example.com/states?country=${selectedCountry}`)
        .then((response) => response.json())
        .then((data) => setStates(data.states || []))
        .catch((error) => console.error("Error fetching states:", error));
    } else {
      setStates([]); 
    }
  }, [selectedCountry]);

  return (
    <select name="state" disabled={!selectedCountry} onChange={(e) => onSelectState(e.target.value)}>
      <option value="">Select State</option>
      {states.map((state, index) => (
        <option key={index} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};


const LanguageDropdown = ({ onSelectLanguage }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const languageList = new Set();
        data.forEach((country) => {
          Object.values(country.languages || {}).forEach((lang) => {
            languageList.add(lang);
          });
        });
        setLanguages([...languageList].sort());
      })
      .catch((error) => console.error("Error fetching languages:", error));
  }, []);

  return (
    <select name="language" onChange={(e) => onSelectLanguage(e.target.value)}>
      <option value="">Select Language</option>
      {languages.map((lang, index) => (
        <option key={index} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};


const TimezoneDropdown = ({ onSelectTimezone }) => {
  const [timezones, setTimezones] = useState([]);

  useEffect(() => {
    fetch("http://worldtimeapi.org/api/timezone")
      .then((response) => response.json())
      .then((data) => setTimezones(data))
      .catch((error) => console.error("Error fetching timezones:", error));
  }, []);

  return (
    <select name="timezone" onChange={(e) => onSelectTimezone(e.target.value)}>
      <option value="">Select Timezone</option>
      {timezones.map((tz, index) => (
        <option key={index} value={tz}>
          {tz}
        </option>
      ))}
    </select>
  );
};


const Profile = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const navigate = useNavigate();
  const handleSave = (e) => {
    e.preventDefault(); 
    navigate("/dashboard"); 
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
                <input type="text" name="firstName" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" />
              </div>
              <div className="form-group">
                <label>Display Name</label>
                <input type="text" name="displayName" />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select name="gender">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              
              <div className="form-group">
                <label>Country/Region</label>
                <CountryDropdown onSelectCountry={setSelectedCountry} />
              </div>

              
              <div className="form-group">
                <label>State</label>
                <StateDropdown selectedCountry={selectedCountry} onSelectState={setSelectedState} />
              </div>

              
              <div className="form-group">
                <label>Language</label>
                <LanguageDropdown onSelectLanguage={setSelectedLanguage} />
              </div>

              
              <div className="form-group">
                <label>Timezone</label>
                <TimezoneDropdown onSelectTimezone={setSelectedTimezone} />
              </div>
            </div>

            <div className="form-buttons">
              <button type="submit" className="save-btn" onClick={handleSave}>
                Save
              </button>
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      <Outlet />
    </div>
  );
};

export default Profile;
