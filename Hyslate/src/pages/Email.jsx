import React from "react";
import { Link } from "react-router-dom";
import "../styles/Email.css";

const Email = () => {
  return (
    <>
    <h2 className="Email Address-heading">Email Address</h2>

    <div className="email-container">

      <form className="email">
        <h3>My Email Address</h3>
        <p>
         You can use the following email addresses to sign in to your account and also to reset your password if you ever forget it.
        </p>
        <button>
          <Link to="/add-email">+ Add Email Address</Link>
        </button>
      </form>
    </div>
    </>
  );
};

export default Email;
