import React, { useState, useEffect } from "react";

const LanguageDropdown = ({ onSelectLanguage }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all") 
      .then((response) => response.json())
      .then((data) => {
        const languageSet = new Set(); 
        data.forEach((country) => {
          if (country.languages) {
            Object.values(country.languages).forEach((lang) => languageSet.add(lang));
          }
        });
        setLanguages([...languageSet].sort()); 
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

export default LanguageDropdown;
