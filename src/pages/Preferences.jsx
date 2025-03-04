import React, { useState } from "react";

const PreferencesPage = () => {
  const [emailNotifications, setEmailNotifications] = useState({
    signInAlert: false,
    thirdPartyAccess: false,
    newsletterSubscription: false,
  });

  const handleToggle = (event) => {
    const { name, checked } = event.target;
    setEmailNotifications((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Preferences</h2>

      <div className="mb-6">
        <h3 className="text-lg font-medium">Preferences</h3>
        <p className="text-gray-600">Manage your preferences for date format, privacy settings, and email notifications.</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium">Date Format</h3>
        <p> Select the date and time format to be used for your HY Slate account activity.</p>
        <select className="w-full p-2 border rounded">
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
        </select>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium">Profile Picture Visibility</h3>
        <p className="text-gray-600">
        You need to add a profile picture to select its visibility setting.<button className="text-blue-500 hover:underline">Add Profile Picture</button>
        </p>
        
      </div>

      
      <div className="mb-6">
        <h3 className="text-lg font-medium">Email Notifications</h3>

        <div className="mt-2 space-y-3">
          <p> Receive email alerts whenever your account is signed in from a new device, browser, or location.
          </p>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="signInAlert"
              checked={emailNotifications.signInAlert}
              onChange={handleToggle}
              className="w-4 h-4 mr-2"
            />
            New sign-in to account alert
          </label>

         
          <label className="flex items-center">
            <p> Receive email alerts whenever your account is accessed from a new third-party app or location. Example: IMAP/POP clients such as mail apps and calendar apps.
            </p>
            <input
              type="checkbox"
              name="thirdPartyAccess"
              checked={emailNotifications.thirdPartyAccess}
              onChange={handleToggle}
              className="w-4 h-4 mr-2"
            />
            Third-party app access alert
          </label>

          
          <label className="flex items-center">
            <p>Receive marketing communication regarding HY Slate products, services, and events from HY Slate and its regional partners.</p>
            <input
              type="checkbox"
              name="newsletterSubscription"
              checked={emailNotifications.newsletterSubscription}
              onChange={handleToggle}
              className="w-4 h-4 mr-2"
            />
            Newsletter subscription
          </label>
        </div>
      </div>
    </div>
  );
};

export default PreferencesPage;
