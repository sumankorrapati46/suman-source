import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaMicrosoft, FaLinkedin, FaFacebook, FaTwitter, FaApple, FaGithub } from "react-icons/fa";

const socialLogins = [
  { name: "Google", icon: <FaGoogle />, url: "http://localhost:3000/login/auth/google" },
  { name: "Microsoft", icon: <FaMicrosoft />, url: "http://localhost:3000/login/auth/microsoft" },
  { name: "LinkedIn", icon: <FaLinkedin />, url: "http://localhost:3000/login/auth/linkedin" },
  { name: "Facebook", icon: <FaFacebook />, url: "http://localhost:3000/login/auth/facebook" },
  { name: "Twitter", icon: <FaTwitter />, url: "http://localhost:3000/login/auth/twitter" },
  { name: "Apple", icon: <FaApple />, url: "http://localhost:3000/login/auth/apple" },
  { name: "GitHub", icon: <FaGithub />, url: "http://localhost:3000/login/auth/github" },
];

const AddLinkedAccounts = () => {
  const navigate = useNavigate(); 

  return (
    <div className="social-login-container">
      <h2>Link Your Account</h2>
      <div className="social-buttons">
        {socialLogins.map((platform, index) => (
          <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" className="social-button">
            {platform.icon} <span>Sign in with {platform.name}</span>
          </a>
        ))}
      </div>
      <button type="button" onClick={() => navigate("/")}>
        Back to Settings
      </button>
    </div>
  );
};

export default AddLinkedAccounts;

