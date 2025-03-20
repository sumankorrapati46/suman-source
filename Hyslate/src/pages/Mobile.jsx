import React from "react";
import { Link } from "react-router-dom";
import "../styles/Mobile.css";

const Mobile = () => {
  return (
    <>
    <h2 className="Mobile Number-heading">Mobile Number</h2>

    <div className="mobile-container">
      
      
      <form className="mobile">
        <h3>My Mobile Numbers</h3>
        <p>
          You can use the following mobile numbers to sign in to your account and also to reset your password if you ever forget it.
        </p>
        <button>
          <Link to="/add-mobile">+ Add Mobile Number</Link>
        </button>
      </form>
    </div>
    </>
  );
};

export default Mobile;

