import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LinkedAccounts.css";


const LinkedAccounts = () => {
  const navigate = useNavigate(); 

  return (
    <div className="linked-container">
      <h2>Settings</h2>

      <form className="linked-accounts">
        <h3>Linked Accounts</h3>
        <p>
          View and manage the list of accounts that are linked with your HY Slate account.
          <br />
          You don’t have any linked accounts.
        </p>
        
        <button type="button" onClick={() => navigate("/add-linked-accounts")}>
          Link Your Account
        </button>
      </form>
    </div>
  );
};

export default LinkedAccounts;


