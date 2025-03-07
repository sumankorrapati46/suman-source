import React, { useState, useEffect } from "react";

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

export default StateDropdown;
