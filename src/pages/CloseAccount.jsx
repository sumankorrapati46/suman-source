import React from "react";
import { FaTrashAlt } from "react-icons/fa"; 
import "../styles/CloseAccount.css"; 

const CloseAccount = () => {
  return (
    <div className="close-account-container">
      <h2>Close Account</h2>
      <p>
        Permanently delete all the data associated with your account and the apps you use.
         Refer to help article
      </p>

      <div className="delete-icon">
        <FaTrashAlt size={50} color="black" />
      </div>

      <p className="warning-text">
        Closing your Slate Account will permanently delete all your account information, 
        and you will no longer be able to use any of the Slate services.
      </p>

      <div className="button-container">
        <a href="/close-account-steps" className="close-account"><button className="close-account-button">Close Account</button> </a>
      </div>
    </div>
  );
};

export default CloseAccount;
