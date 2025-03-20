import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthorizedWebsites.css";

const AuthorizedWebsites = () => {
  return (
    <>
    <h2 className="Settings-heading">Settings</h2>

    <div className="authorized-container">
      
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
    </>
  );
};

export default AuthorizedWebsites;
