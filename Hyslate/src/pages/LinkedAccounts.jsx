import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LinkedAccounts.css";


const LinkedAccounts = () => {
  const navigate = useNavigate(); 

  return (
    <>
    <h2 className="Settings-heading">Settings</h2>

    <div className="linked-container">
      <h4>Linked Accounts</h4>

      <form className="linked-accounts">

          <h6>View and manage the list of accounts that are linked with your HY Slate account.
          <br />
          You don’t have any linked accounts.</h6>

        
        <button type="button" onClick={() => navigate("/add-linked-accounts")}>
          Link Your Account
        </button>
      </form>
    </div>
    </>
  );
};

export default LinkedAccounts;


