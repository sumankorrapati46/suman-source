import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const DeviceSignIns = () => {
  return (
    <div className="device-container">
      <h2>Device Sign-ins</h2>
      
      <form className="device-signin">
        <h3>My Devices</h3>
        <p>
          Here you can see the devices you have used to sign in to your account.  
          You can also remove access from a device if you don't recognize it.
        </p>
        <button>
          <Link to="/manage-devices">Manage Devices</Link>
        </button>
      </form>
    </div>
  );
};

export default DeviceSignIns;
