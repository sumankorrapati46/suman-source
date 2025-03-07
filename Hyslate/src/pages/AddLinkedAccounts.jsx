import React, { useState } from "react";
import "../styles/LinkedAccounts.css";
import { FaGoogle, FaFacebookF, FaTwitter, FaGithub, FaMicrosoft, FaLinkedinIn, FaApple } from "react-icons/fa";

const LinkedAccounts = () => {
  const [linkedAccounts, setLinkedAccounts] = useState([]);
  const [error, setError] = useState("");

  const handleSocialLogin = async (provider) => {
    try {
      const response = await fetch(`https://api.example.com/auth/${provider}`, { method: "POST" });

      if (!response.ok) {
        throw new Error(`Failed to authenticate with ${provider}`);
      }

      const data = await response.json();
      setLinkedAccounts([...linkedAccounts, { provider, email: data.email }]);

      alert(`${provider} linked successfully!`);
    } catch (err) {
      setError(`Error linking ${provider}: ${err.message}`);
    }
  };

  return (
    <div className="linked-accounts-container">
      <h2>Settings</h2>

      <div className="linked-accounts-box">
        <h3>Linked Accounts</h3>
        <p>View and manage the list of accounts that are linked with your HY Slate account.</p>
      </div>

      <div className="social-login-container">
        <h3>Link Your Account</h3>
        <div className="social-buttons">
          <button className="google" onClick={() => handleSocialLogin("google")}>
            <FaGoogle /> Sign in with Google
          </button>
          <button className="microsoft" onClick={() => handleSocialLogin("microsoft")}>
            <FaMicrosoft /> Sign in with Microsoft
          </button>
          <button className="linkedin" onClick={() => handleSocialLogin("linkedin")}>
            <FaLinkedinIn /> Sign in with Linkedin
          </button>
          <button className="facebook" onClick={() => handleSocialLogin("facebook")}>
            <FaFacebookF /> Sign in with Facebook
          </button>
          <button className="twitter" onClick={() => handleSocialLogin("twitter")}>
            <FaTwitter /> Sign in with Twitter
          </button>
          <button className="apple" onClick={() => handleSocialLogin("apple")}>
            <FaApple /> Sign in with Apple
          </button>
          <button className="github" onClick={() => handleSocialLogin("github")}>
            <FaGithub /> Sign in with Github
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LinkedAccounts;
