import React, { useState, useEffect } from "react";

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

export default TimezoneDropdown;
