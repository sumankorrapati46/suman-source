import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/CloseAccount.css"; 

const CloseAccountSteps = () => {
  const navigate = useNavigate();

  return (
    <div className="close-account-container">
      <h2>Close Account</h2>
      <p>
        We will take you through the following stages one by one to close your account. Read the following overview, 
        then click <strong>Proceed</strong>. For detailed instructions, <a href="/help" className="help-link">refer help article</a>.
      </p>

      <div className="steps-container">
        <div className="column">
          <h3>1. Used Apps</h3>
          <p>Go through the list of apps you use. The data in these apps will be deleted while closing your account.</p>
          
          <h3>2. Paid Subscriptions</h3>
          <p>The apps in which you have a paid subscription will be listed. Unsubscribe from them in Slate Store.</p>
        </div>

        <div className="column">
          <h3>3. App-specific Organizations</h3>
          <p>App-specific organizations means the different organizations, portals, and departments you have created within the apps. 
             Some of them require your action to proceed with closing your account while others will be deleted automatically.</p>

          <h3>4. Close Account</h3>
          <p>Give your consent to close the account and continue.</p>
        </div>
      </div>
      <div className="button-container">
        <button className="proceed-button">Proceed</button>
        <button className="cancel-button" onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </div>
  );
};

export default CloseAccountSteps;
