import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const AuthorizedWebsites = () => {
  return (
    <div className="authorized-container">
      <h2>Settings</h2>
      
      <form className="authorized-websites">
        <h3>Authorized Websites</h3>
        <p>
        View and manage the websites you've granted access to your account information.
        </p>
        <button>
          <Link to="/manage-websites">You don't have any authorized websites</Link>
        </button>
      </form>
    </div>
  );
};

export default AuthorizedWebsites;
